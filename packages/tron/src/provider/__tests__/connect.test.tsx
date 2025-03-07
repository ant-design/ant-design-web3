import React, { useEffect, useRef, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { WalletReadyState } from '@tronweb3/tronwallet-abstract-adapter';
import { describe, expect, it, vi } from 'vitest';

import { TronWeb3ConfigProvider } from '../..';
import { xrender } from './utils';

const mockWalletChanged = vi.fn();
const mockSelectWalletFn = vi.fn();
const mockSelectWalletFnNotWalletName = vi.fn();

describe('TronWeb3ConfigProvider connect cases', () => {
  const mockedData = vi.hoisted(() => {
    const mockAddress = 'TLszVpy8nWpC2HFkgmGQQVeUQqmDLNvNYA';
    const mockAddressShort = 'TLszVp...DLNvNYA';
    const balance = 10002;

    const mockedDisconnect = vi.fn();

    return {
      address: {
        value: mockAddress,
        short: mockAddressShort,
      },
      balance,
      mockedDisconnect,
    };
  });

  vi.mock('@tronweb3/tronwallet-adapter-react-hooks', async () => {
    const originModules = await vi.importActual('@tronweb3/tronwallet-adapter-react-hooks');
    const { remember } = await import('./utils');

    const WalletProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
      <div>{children}</div>
    );
    const connectedRef = remember(false);
    const addressValueRef = remember<string | null>(null);
    const walletNameRef = remember<string | null>(null);

    return {
      ...originModules,
      WalletProvider,
      useWallet: () => {
        // provide a state to emit re-render
        const [, setConnected] = useState(false);
        const [, setAddressValue] = useState(addressValueRef.value);
        const _connectedRef = useRef(false);
        const [, focusUpdate] = useState(Date.now());
        const [walletName, setWalletName] = useState(walletNameRef.value);

        useEffect(() => {
          mockWalletChanged();
        }, [walletName]);

        return {
          connected: connectedRef.value,
          wallets: [
            {
              state: '',
              adapter: {
                name: 'Test1',
                readyState: WalletReadyState.Found,
              },
            },
            {
              state: '',
              adapter: {
                name: 'Test2',
                readyState: WalletReadyState.Loading,
              },
            },
            {
              state: '',
              adapter: {
                name: 'Test3',
              },
            },
          ],
          address: 'TLszVpy8nWpC2HFkgmGQQVeUQqmDLNvNYA',
          connect: () => {
            _connectedRef.current = true;
            addressValueRef.value = mockedData.address.value;
            connectedRef.value = true;
            setConnected(true);
            focusUpdate(Math.random());
          },
          disconnect: async () => {
            setAddressValue(null);
            mockedData.mockedDisconnect();
          },
          select: (_walletName: string) => {
            mockSelectWalletFnNotWalletName(_walletName);
            walletNameRef.value = _walletName;
            setWalletName(_walletName);
            focusUpdate(Math.random());
            mockSelectWalletFn();
          },
          wallet: walletNameRef.value
            ? { adapter: { name: walletNameRef.value, readyState: 'Found' } }
            : null,
          other: { _connectedRef, connectedRef },
        };
      },
    };
  });

  it('could connect', async () => {
    const switchWalletRunned = vi.fn();
    const connectRunned = vi.fn();

    const CustomConnectBtn: React.FC = () => {
      const { connect, availableWallets } = useProvider();

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
            onClick={async (e) => {
              connectRunned();
              const targetWalletName = (e.target as any).detail as string;
              await connect?.(availableWallets?.find((v) => v.name === targetWalletName));

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
        <TronWeb3ConfigProvider
          wallets={[
            { name: 'Test1', remark: 'Test1 wallet' },
            { name: 'Test2', remark: 'Test2 wallet' },
            { name: 'Test3', remark: 'Test3 wallet' },
          ]}
        >
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
    expect(shownConnectRunDone?.textContent).toBe('false');

    fireEvent.click(switchWalletBtn);
    await vi.waitFor(() => {
      expect(switchWalletRunned).toBeCalled();
    });

    await vi.waitFor(() => {
      expect(mockWalletChanged).toBeCalled();
    });

    fireEvent.click(connectBtn, { target: { detail: 'Test1' } });
    await vi.waitFor(() => {
      expect(mockSelectWalletFn).toBeCalledTimes(1);
    });

    fireEvent.click(connectBtn, { target: { detail: 'Test2' } });
    await vi.waitFor(() => {
      expect(mockSelectWalletFn).toBeCalledTimes(2);
    });

    fireEvent.click(connectBtn, { target: { detail: 'Test3' } });
    await vi.waitFor(() => {
      expect(mockSelectWalletFn).toBeCalledTimes(3);
    });

    await vi.waitFor(() => {
      expect(connectRunned).toBeCalled();
      expect(shownConnectRunDone.textContent).toBe('true');
    });
  });

  it('try connect but not provide wallet', async () => {
    const prepareConnectRunned = vi.fn();
    const connectRunned = vi.fn();

    const CustomConnectBtn: React.FC = () => {
      const { connect } = useProvider();

      return (
        <div className="custom-connectbtn">
          <button
            className="btn-connect"
            type="button"
            onClick={async () => {
              prepareConnectRunned();
              await connect?.();
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
      expect(prepareConnectRunned).toBeCalled();

      // no provide wallet, so connect should not be called
      expect(connectRunned).not.toBeCalled();
    });

    await vi.waitFor(() => {
      // want to connect with `null` wallet
      expect(mockSelectWalletFnNotWalletName).toBeCalledWith(null);
    });
  });

  it('could check by hasExtensionInstalled', async () => {
    const Display = () => {
      const { availableWallets } = useProvider();
      const [hasExtensionInstalled, setHasExtensionInstalled] = useState(false);

      useEffect(() => {
        availableWallets
          ?.find((v) => v.name === 'Test1')
          ?.hasExtensionInstalled?.()
          .then((v) => {
            setHasExtensionInstalled(v);
          });
      }, [availableWallets]);
      return (
        <div className="hasExtensionInstalled">{hasExtensionInstalled ? 'true' : 'false'}</div>
      );
    };

    const App = () => {
      return (
        <TronWeb3ConfigProvider
          wallets={[
            {
              name: 'Test1',
              remark: 'Test1 wallet',
            },
          ]}
        >
          <Display />
        </TronWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    const extensionCheckDom = selector('.hasExtensionInstalled')!;
    expect(extensionCheckDom).not.toBeNull();

    await vi.waitFor(() => {
      expect(extensionCheckDom.textContent).toBe('true');
    });
  });

  it('could check by hasWalletReady', async () => {
    const Display = () => {
      const { availableWallets } = useProvider();
      const [hasWalletReady, setHasWalletReady] = useState(false);

      useEffect(() => {
        availableWallets
          ?.find((v) => v.name === 'Test1')
          ?.hasWalletReady?.()
          .then((v) => {
            setHasWalletReady(v);
          });

        availableWallets
          ?.find((v) => v.name === 'Test2')
          ?.hasWalletReady?.()
          .then((v) => {
            setHasWalletReady(v);
          });
      }, [availableWallets]);
      return <div className="hasWalletReady">{hasWalletReady ? 'true' : 'false'}</div>;
    };

    const App = () => {
      return (
        <TronWeb3ConfigProvider
          wallets={[
            {
              name: 'Test1',
              remark: 'Test1 wallet',
            },
            {
              name: 'Test2',
              remark: 'Test2 wallet',
            },
          ]}
        >
          <Display />
        </TronWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    const extensionCheckDom = selector('.hasWalletReady')!;
    expect(extensionCheckDom).not.toBeNull();

    await vi.waitFor(() => {
      expect(extensionCheckDom.textContent).toBe('true');
    });
  });
});
