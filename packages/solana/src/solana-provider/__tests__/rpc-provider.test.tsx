import { fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { solana } from '../../chains';
import { SolanaWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

const mockedData = vi.hoisted(() => {
  const mockAddress = '8dQE449ozUAS2XPyvao6hEpkAtGALo1A1q4TApayFfCo';
  const mockAddressShort = '8dQE44...FfCo';

  return {
    address: {
      value: mockAddress,
      short: mockAddressShort,
    },
  };
});

vi.mock('@solana/wallet-adapter-react', async () => {
  const originModules = await vi.importActual('@solana/wallet-adapter-react');
  const mfjs =
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    await vi.importActual<typeof import('@metaplex-foundation/js')>('@metaplex-foundation/js');
  const PublicKey = mfjs.PublicKey;

  const publicKey = new PublicKey(mockedData.address.value);

  const ConnectionProvider: React.FC<React.PropsWithChildren<{ endpoint: string }>> = ({
    children,
    endpoint,
  }) => (
    <div>
      <div className="endpoint">{endpoint}</div>
      {children}
    </div>
  );
  const WalletProvider: React.FC<React.PropsWithChildren> = ({ children }) => <>{children}</>;

  return {
    ...originModules,
    useWallet: () => {
      return {
        publicKey,
        connected: false,
        connect: () => {},
        select: () => {},
        disconnect: () => {},
        wallet: {
          name: 'Coinbase',
        },
      };
    },
    ConnectionProvider,
    WalletProvider,
  };
});

const mockFn = vi.fn(() => {});

describe('SolanaWeb3ConfigProvider rpcProvider', () => {
  beforeEach(async () => {
    vi.resetAllMocks();

    vi.mock('../config-provider.tsx', () => {
      const AntDesignWeb3ConfigProvider: React.FC<
        React.PropsWithChildren<{ onCurrentChainChange: () => void }>
      > = ({ children, onCurrentChainChange }) => {
        return (
          <div>
            <button
              type="button"
              className="btn"
              onClick={() => {
                mockFn();
                onCurrentChainChange();
              }}
            >
              click
            </button>
            {children}
          </div>
        );
      };

      return {
        AntDesignWeb3ConfigProvider,
      };
    });
  });

  afterEach(() => {
    vi.resetModules();
  });

  it('available custom rpcProvider by function', () => {
    const mockRpcEndpoint = 'https://fake-api.mainnet-beta.solana.com/';
    const mockRpcProvider = vi.fn(() => mockRpcEndpoint);

    const App = () => (
      <SolanaWeb3ConfigProvider rpcProvider={mockRpcProvider}>
        <div className="content">test</div>
      </SolanaWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');

    expect(mockRpcProvider).toBeCalled();
  });

  it('use default solana rpcProvider if not chain connected', async () => {
    const App = () => (
      <SolanaWeb3ConfigProvider>
        <div className="content">test</div>
      </SolanaWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');

    expect(selector('.btn')).not.toBeNull();

    fireEvent.click(selector('.btn')!);

    expect(mockFn).toBeCalled();

    expect(selector('.endpoint')?.textContent).toBe(solana.rpcUrls.default);
  });
});
