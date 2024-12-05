import { useEffect, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { WalletReadyState } from '@tronweb3/tronwallet-abstract-adapter';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { BitgetWallet, OkxTronWallet, TronlinkWallet } from '../../wallets';
import { TronWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

const mockedData = vi.hoisted(() => {
  const mockAddress = 'TUguNkmfvjeHanGyQZLGJfj28w1tMtvNDT';

  return {
    address: {
      value: mockAddress,
    },
  };
});

const mockSelectWalletFn = vi.fn();
const mockWalletChanged = vi.fn();
const mockSelectWalletFnNotWalletName = vi.fn();

vi.mock('@solana/wallet-adapter-react', async () => {
  const originModules = await vi.importActual('@solana/wallet-adapter-react');
  const { remember } = await import('./utils');

  const publicKey = mockedData.address.value;

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
      select: (walletName: string | null) => {
        mockSelectWalletFnNotWalletName(walletName);
        const mockWalletAdapter = {
          adapter: { name: walletName, readyState: WalletReadyState.Found },
        };
        currentWalletRef.value = mockWalletAdapter;
        setCurrentWallet(mockWalletAdapter);
        mockSelectWalletFn();
      },
      disconnect: () => {},
      wallet: currentWalletRef.value,
      wallets: [
        {
          adapter: {
            name: 'Tronlink Wallet',
            readyState: WalletReadyState.Found,
          },
        },
        {
          adapter: {
            name: 'OKX Wallet',
            readyState: WalletReadyState.Found,
          },
        },
        {
          adapter: {
            name: 'Bitget Wallet',
            readyState: WalletReadyState.Found,
          },
        },
      ],
    };
  };

  return {
    ...originModules,
    useWallet,
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
    const { useWallet } = await import('@tronweb3/tronwallet-adapter-react-hooks');
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
        <TronWeb3ConfigProvider wallets={[TronlinkWallet, OkxTronWallet, BitgetWallet]}>
          <div>
            <div className="content">test</div>
            <CustomConnectBtn />
          </div>
        </TronWeb3ConfigProvider>
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

    await vi.waitFor(
      () => {
        expect(connectRunned).toBeCalled();
        expect(shownConnectRunDone.textContent).toBe('true');
        expect(gotAddressAfterConnect).toBeCalledWith(mockedData.address.value);
      },
      {
        timeout: 5000,
      },
    );
  });

  it('call connect but not provide wallet', async () => {
    const { useWallet } = await import('@tronweb3/tronwallet-adapter-react-hooks');
    const connectRunned = vi.fn();

    const CustomConnectBtn: React.FC = () => {
      const { connect } = useProvider();
      const { connect: connectWallet } = useWallet();

      return (
        <div className="custom-connectbtn">
          <button
            className="btn-connect"
            onClick={async () => {
              await connectWallet();
              connect?.();
              connectRunned();
            }}
          >
            Connect
          </button>
        </div>
      );
    };

    const App = () => {
      return (
        <TronWeb3ConfigProvider>
          <div>
            <div className="content">test</div>
            <CustomConnectBtn />
          </div>
        </TronWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');

    const connectBtn = selector('.btn-connect')!;
    expect(connectBtn).not.toBeNull();

    fireEvent.click(connectBtn);
    await vi.waitFor(() => {
      expect(connectRunned).toBeCalled();
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
        <TronWeb3ConfigProvider wallets={[TronlinkWallet]}>
          <Display />
        </TronWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const pluginCheck = selector('.plugin-check')!;

    await vi.waitFor(async () => {
      expect(pluginCheck.textContent).toBe('true');
    });
  });
});
