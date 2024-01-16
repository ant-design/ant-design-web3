import { useEffect, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { metadata_CoinbaseWallet } from '@ant-design/web3-assets';
import type { ConnectionContextState } from '@solana/wallet-adapter-react';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-wallets';
import { fireEvent } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { WalletFactory } from '../../wallets/factory';
import { SolanaWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

type TestConnection = Partial<ConnectionContextState['connection']>;

const mockedData = vi.hoisted(() => {
  const mockAddress = '8dQE449ozUAS2XPyvao6hEpkAtGALo1A1q4TApayFfCo';
  const mockAddressShort = '8dQE44...FfCo';
  const balance = 10002;

  return {
    address: {
      value: mockAddress,
      short: mockAddressShort,
    },
    balance,
  };
});

const mockSelectWalletFn = vi.fn();
const mockWalletChanged = vi.fn();

vi.mock('@solana/wallet-adapter-react', async () => {
  const originModules = await vi.importActual('@solana/wallet-adapter-react');
  const { remember } = await import('./utils');
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

  const connectedRef = remember(false);
  const currentWalletRef = remember<any>(null);

  const useWallet = () => {
    // provide a state to emit re-render
    const [connected, setConnected] = useState(() => 0);
    const [currentWallet, setCurrentWallet] = useState(() => currentWalletRef.value);
    const [connecting, setConnecting] = useState(() => false);

    useEffect(() => {
      mockWalletChanged();

      if (currentWallet) {
        connectedRef.value = true;
        setConnected((p) => p + 1);
      }
    }, [currentWallet]);

    useEffect(() => {
      if (connecting) {
        setConnecting(false);
        connectedRef.value = true;
        setConnected((p) => p + 1);
      }
    }, [connecting]);

    return {
      publicKey,
      connecting,
      connected: connected,
      connect: async () => {
        setConnecting(true);
      },
      select: (walletName: string) => {
        const mockWalletAdapter = { adapter: { name: walletName } };
        currentWalletRef.value = mockWalletAdapter;
        setCurrentWallet(mockWalletAdapter);
        mockSelectWalletFn();
      },
      disconnect: () => {},
      wallet: currentWalletRef.value,
    };
  };

  return {
    ...originModules,
    useWallet,
    useConnection: () => {
      const connection: TestConnection = {
        getBalance: async (_publicKey: any) => {
          return mockedData.balance;
        },
      };

      return { connection };
    },
    ConnectionProvider,
    WalletProvider,
  };
});

describe('Solana Connect', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterAll(() => {
    vi.resetModules();
    vi.clearAllMocks();
    mockSelectWalletFn.mockClear();
  });

  it('could connect', async () => {
    const { useWallet } = await import('@solana/wallet-adapter-react');
    const switchWalletRunned = vi.fn();
    const connectRunned = vi.fn();

    const CustomConnectBtn: React.FC = () => {
      const { connect, switchWallet, availableWallets } = useProvider();
      const { connect: connectWallet } = useWallet();

      const [connectRunDone, setConnectRunDone] = useState(false);

      return (
        <div className="custom-connectbtn">
          <button
            className="btn-switchwallet"
            onClick={async () => {
              await switchWallet?.(availableWallets?.[0]);
              switchWalletRunned();
            }}
          >
            Switch Wallet
          </button>
          <button
            className="btn-connect"
            onClick={async () => {
              await connectWallet();
              await connect?.(availableWallets?.[0]);
              connectRunned();
              setConnectRunDone(true);
            }}
          >
            Connect
          </button>
          <div className="shown-connectRunDone">{connectRunDone ? 'true' : 'false'}</div>
        </div>
      );
    };

    const App = () => {
      return (
        <SolanaWeb3ConfigProvider
          wallets={[WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet)]}
        >
          <div>
            <div className="content">test</div>
            <CustomConnectBtn />
          </div>
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');

    const connectBtn = selector('.btn-connect')!;
    const switchWalletBtn = selector('.btn-switchwallet')!;
    const shownConnectRunDone = selector('.shown-connectRunDone')!;

    expect(connectBtn).not.toBeNull();
    expect(shownConnectRunDone.textContent).toBe('false');

    fireEvent.click(switchWalletBtn);
    await vi.waitFor(() => {
      expect(switchWalletRunned).toBeCalled();
    });

    await vi.waitFor(() => {
      expect(mockWalletChanged).toBeCalled();
    });

    fireEvent.click(connectBtn);
    await vi.waitFor(() => {
      expect(mockSelectWalletFn).toBeCalledTimes(2);
    });

    await vi.waitFor(
      () => {
        expect(connectRunned).toBeCalled();
        expect(shownConnectRunDone.textContent).toBe('true');
      },
      {
        timeout: 5000,
      },
    );
  });
});
