import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { WalletConnectionError, WalletReadyState } from '@tronweb3/tronwallet-abstract-adapter';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { TronWeb3ConfigProvider } from '../..';
import { xrender } from './utils';

const mockThrowWalletConnectionError = vi.fn();
const mockSelectWalletFn = vi.fn();

describe('TronWeb3ConfigProvider connect-error cases', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    mockSelectWalletFn.mockRestore();
  });

  afterAll(() => {
    vi.resetModules();
  });

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

    const WalletProvider: React.FC<React.PropsWithChildren<any>> = ({
      children,
      onError,
      mockThrowError,
    }) => {
      useEffect(() => {
        if (mockThrowError) {
          mockThrowWalletConnectionError();
          onError?.(new WalletConnectionError('mocked error'));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [mockThrowError]);
      return <div>{children}</div>;
    };
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
        const [, setWalletName] = useState(walletNameRef.value);

        const wallets = [
          {
            adapter: {
              name: 'Test1',
            },
            state: '',
          },
          {
            adapter: {
              name: 'Test2',
              readyState: WalletReadyState.NotFound,
            },
            state: '',
          },
        ];

        return {
          connected: connectedRef.value,
          wallets,
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
          select: (walletName: string) => {
            walletNameRef.value = walletName;
            setWalletName(walletName);
            focusUpdate(Math.random());
            mockSelectWalletFn(walletName);
          },
          wallet: walletNameRef.value
            ? {
                adapter: {
                  name: walletNameRef.value,
                  readyState: wallets.find((v) => v.adapter.name === walletNameRef.value)?.adapter
                    .readyState,
                },
              }
            : null,
          other: { _connectedRef, connectedRef },
        };
      },
    };
  });

  it('could hold connect failure (such as user reject)', async () => {
    const switchWalletRunned = vi.fn();

    const CustomConnectBtn: React.FC<{
      onThrowMockError: () => void;
    }> = ({ onThrowMockError }) => {
      const { connect, availableWallets } = useProvider();

      return (
        <div className="custom-connectbtn">
          <button
            type="button"
            className="btn-switchwallet"
            onClick={() => {
              switchWalletRunned();
            }}
          >
            Switch Wallet
          </button>
          <button
            type="button"
            className="btn-connect"
            onClick={async () => {
              onThrowMockError();
              connect?.(availableWallets?.find((v) => v.name === 'Test1')).catch(() => {});
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
        <TronWeb3ConfigProvider
          onError={onError}
          walletProviderProps={{
            // @ts-ignore
            mockThrowError,
          }}
        >
          <div>
            <div className="error">{connectFail ? 'true' : 'false'}</div>
            <CustomConnectBtn
              onThrowMockError={() => {
                setMockThrowError(true);
              }}
            />
          </div>
        </TronWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const error = selector('.error')!;
    const btn = selector('.btn-connect')!;
    const switchBtn = selector('.btn-switchwallet')!;
    expect(error.textContent).toBe('false');

    fireEvent.click(btn);
    expect(error.textContent).toBe('true');
    expect(switchWalletRunned).not.toBeCalled();

    fireEvent.click(switchBtn);
    expect(switchWalletRunned).toBeCalled();

    fireEvent.click(btn);
    expect(error.textContent).toBe('true');
    expect(switchWalletRunned).toBeCalled();

    expect(mockSelectWalletFn).toBeCalledWith(null);
  });

  it('could hold connect wallet but not ready', async () => {
    const CustomConnectBtn: React.FC = () => {
      const { connect, availableWallets } = useProvider();

      return (
        <div className="custom-connectbtn">
          <button
            type="button"
            className="btn-connect"
            onClick={async () => {
              connect?.(availableWallets?.find((v) => v.name === 'Test2')).catch(() => {});
            }}
          >
            Connect
          </button>
        </div>
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
            {
              name: 'Test2',
              remark: 'Test2 wallet',
            },
          ]}
        >
          <CustomConnectBtn />
        </TronWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const connectBtn = selector('.btn-connect')!;
    expect(connectBtn).not.toBeNull();

    fireEvent.click(connectBtn);

    expect(mockSelectWalletFn).toBeCalledWith(null);
  });
});
