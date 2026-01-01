import { useCallback, useEffect, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { WalletReadyState } from '@solana/wallet-adapter-base';
import type { ConnectionContextState } from '@solana/wallet-adapter-react';
import { fireEvent } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { CoinbaseWallet, OKXWallet, PhantomWallet } from '../../wallets/built-in';
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
    }, [currentWallet?.adapter?.name]);

    useEffect(() => {
      if (connecting) {
        setConnecting(false);
        connectedRef.value = true;
        setConnected((p) => p + 1);
      }
    }, [connecting]);

    const selectCallback = useCallback((walletName: string | null) => {
      mockSelectWalletFnNotWalletName(walletName);
      const mockWalletAdapter = {
        adapter: { name: walletName, readyState: WalletReadyState.Installed },
      };
      currentWalletRef.value = mockWalletAdapter;
      setCurrentWallet(mockWalletAdapter);
      mockSelectWalletFn();
    }, []);

    const connectCallback = useCallback(async () => {
      setConnected(0);
      setConnecting(true);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(0);
        }, 100);
      });
      setConnecting(false);
      setConnected((p) => p + 1);
    }, []);

    return {
      publicKey,
      connecting,
      connected: !!connected,
      connect: connectCallback,
      select: selectCallback,
      disconnect: () => {},
      wallet: currentWalletRef.value,
      wallets: [
        {
          adapter: {
            name: 'Coinbase Wallet',
            readyState: WalletReadyState.Installed,
          },
        },
        {
          adapter: {
            name: 'Phantom Wallet',
            readyState: WalletReadyState.Installed,
          },
        },
        {
          adapter: {
            name: 'OKX Wallet',
            readyState: WalletReadyState.NotDetected,
          },
        },
      ],
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
    const gotAddressAfterConnect = vi.fn();

    const CustomConnectBtn: React.FC = () => {
      const { connect, availableWallets } = useProvider();
      const { connect: connectWallet } = useWallet();

      const [connectRunDone, setConnectRunDone] = useState(false);

      return (
        <div className="custom-connectbtn">
          <button
            className="btn-switchwallet"
            type="button"
            onClick={() => {
              switchWalletRunned();
            }}
          >
            Switch Wallet
          </button>
          <button
            className="btn-connect"
            type="button"
            onClick={async () => {
              await connectWallet();
              // mock connect twice
              connect?.(availableWallets?.[1]);
              const connectedAddress = await connect?.(availableWallets?.[0]);
              gotAddressAfterConnect(connectedAddress?.address);
              await connect?.(availableWallets?.[2]);

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
        <SolanaWeb3ConfigProvider wallets={[CoinbaseWallet(), PhantomWallet(), OKXWallet()]}>
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
      // 1st. Phantom
      // 2nd. Coinbase Wallet
      // 3rd. null (because of no wallet installed)
      expect(mockSelectWalletFn).toBeCalledTimes(3);
    });

    await vi.waitFor(() => {
      expect(connectRunned).toBeCalled();
      expect(shownConnectRunDone.textContent).toBe('true');
      expect(gotAddressAfterConnect).toBeCalledWith(mockedData.address.value);
    });
  });

  it('call connect but not provide wallet', async () => {
    const { useWallet } = await import('@solana/wallet-adapter-react');
    const prepareConnectRunned = vi.fn();
    const connectRunned = vi.fn();

    const CustomConnectBtn: React.FC = () => {
      const { connect } = useProvider();
      const { connect: connectWallet } = useWallet();

      return (
        <div className="custom-connectbtn">
          <button
            className="btn-connect"
            type="button"
            onClick={async () => {
              prepareConnectRunned();
              await connectWallet();
              connect?.();
              connectRunned();
            }}
          >
            Connect1
          </button>
        </div>
      );
    };

    const App = () => {
      return (
        <SolanaWeb3ConfigProvider>
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
    expect(connectBtn).not.toBeNull();

    fireEvent.click(connectBtn);
    await vi.waitFor(() => {
      expect(prepareConnectRunned).toBeCalled();
      expect(connectRunned).not.toBeCalled();
    });

    await vi.waitFor(() => {
      expect(mockSelectWalletFnNotWalletName).toBeCalledWith(null);
    });
  });

  it('hasExtensionInstalled', async () => {
    const Display = () => {
      const { availableWallets } = useProvider();
      const [hasExtensionInstalled, setHasExtensionInstalled] = useState(false);

      useEffect(() => {
        availableWallets![0]?.hasExtensionInstalled?.().then((v) => {
          setHasExtensionInstalled(v);
        });
      }, [availableWallets]);

      return <div className="plugin-check">{hasExtensionInstalled ? 'true' : 'false'}</div>;
    };

    const App = () => {
      return (
        <SolanaWeb3ConfigProvider wallets={[CoinbaseWallet()]}>
          <Display />
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const pluginCheck = selector('.plugin-check')!;

    await vi.waitFor(() => {
      expect(pluginCheck.textContent).toBe('true');
    });
  });
});
