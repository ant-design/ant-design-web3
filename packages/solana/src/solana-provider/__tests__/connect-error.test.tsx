import { useCallback, useEffect, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import type { ConnectionContextState } from '@solana/wallet-adapter-react';
import { fireEvent } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { CoinbaseWallet, PhantomWallet } from '../../wallets/built-in';
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
const mockSelectWalletFnNotWalletName = vi.fn();

const mockThrowWalletConnectionError = vi.fn();

vi.mock('@solana/wallet-adapter-base', async () => {
  const originModules = (await vi.importActual('@solana/wallet-adapter-base')) as any;
  class WalletConnectionError {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(public message: string) {}
  }

  return {
    ...originModules,
    WalletConnectionError,
  };
});

vi.mock('@solana/wallet-adapter-react', async () => {
  const { WalletConnectionError } = await import('@solana/wallet-adapter-base');
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

  const WalletProvider: React.FC<
    React.PropsWithChildren<{
      onError?: (err: any) => void;
      /** Use as mock throw connect error */
      mockThrowError: boolean;
    }>
  > = ({ children, onError, mockThrowError }) => {
    useEffect(() => {
      if (mockThrowError) {
        mockThrowWalletConnectionError();
        onError?.(new WalletConnectionError('mock error'));
      }
    }, [mockThrowError]);
    return <>{children}</>;
  };

  const connectedRef = remember(false);
  const currentWalletRef = remember<any>(null);

  const useWallet = () => {
    // provide a state to emit re-render
    const [connected] = useState(() => 0);
    const [currentWallet, setCurrentWallet] = useState(() => currentWalletRef.value);
    const [connecting, setConnecting] = useState(() => false);

    useEffect(() => {
      mockWalletChanged();

      if (currentWallet) {
        connectedRef.value = true;
      }
    }, [currentWallet]);

    useEffect(() => {
      if (connecting) {
        setConnecting(false);
        connectedRef.value = true;
      }
    }, [connecting]);

    return {
      publicKey,
      connecting,
      connected: connected,
      connect: async () => {
        setConnecting(true);
      },
      select: (walletName: string | null) => {
        mockSelectWalletFnNotWalletName(walletName);
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

describe('Solana Connect Errors', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterAll(() => {
    vi.resetModules();
    vi.clearAllMocks();
    mockSelectWalletFn.mockClear();
  });

  it('could hold connect failure (such as user reject)', async () => {
    const { useWallet } = await import('@solana/wallet-adapter-react');
    const switchWalletRunned = vi.fn();

    const CustomConnectBtn: React.FC<{
      onConnect: () => void;
    }> = ({ onConnect }) => {
      const { connect, availableWallets } = useProvider();
      const { connect: connectWallet } = useWallet();

      return (
        <div className="custom-connectbtn">
          <button
            className="btn-switchwallet"
            onClick={() => {
              switchWalletRunned();
            }}
          >
            Switch Wallet
          </button>
          <button
            className="btn-connect"
            onClick={async () => {
              await connectWallet();
              connect?.(availableWallets?.[1]).catch(() => {});
              onConnect();
            }}
          >
            Connect
          </button>
        </div>
      );
    };

    const App = () => {
      const [connectFail, setConnectFail] = useState(false);
      const [mockThrowError, setMockThrowError] = useState(false);
      const onError = useCallback(() => {
        setConnectFail(true);
      }, []);

      return (
        <SolanaWeb3ConfigProvider
          wallets={[CoinbaseWallet(), PhantomWallet()]}
          walletProviderProps={{
            //@ts-ignore
            mockThrowError,
            onError,
          }}
        >
          <div>
            <div className="error">{connectFail ? 'true' : 'false'}</div>
            <CustomConnectBtn
              onConnect={() => {
                setMockThrowError(true);
              }}
            />
          </div>
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const errorDom = selector('.error')!;
    const connectBtn = selector('.btn-connect')!;
    const switchWalletBtn = selector('.btn-switchwallet')!;

    expect(errorDom.textContent).toBe('false');
    expect(connectBtn).not.toBeNull();

    fireEvent.click(switchWalletBtn);
    await vi.waitFor(() => {
      expect(switchWalletRunned).toBeCalled();
    });

    await vi.waitFor(() => {
      expect(mockWalletChanged).toBeCalled();
    });

    fireEvent.click(connectBtn);
    await vi.waitFor(() => {
      expect(mockThrowWalletConnectionError).toBeCalled();
      expect(errorDom.textContent).toBe('true');
    });
  });
});
