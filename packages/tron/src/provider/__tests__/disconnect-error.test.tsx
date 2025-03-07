import React, { useEffect, useRef, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { WalletConnectionError } from '@tronweb3/tronwallet-abstract-adapter';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { TronWeb3ConfigProvider } from '../..';
import { xrender } from './utils';

const mockThrowWalletConnectionError = vi.fn();

describe('TronWeb3ConfigProvider connect-error cases', () => {
  beforeEach(() => {
    vi.resetAllMocks();
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

        return {
          connected: connectedRef.value,
          wallets: [{ state: '' }],
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
            throw new Error('mocked disconnect error');
          },
          select: (walletName: string) => {
            walletNameRef.value = walletName;
            setWalletName(walletName);
            focusUpdate(Math.random());
          },
          wallet: walletNameRef.value
            ? { adapter: { name: walletNameRef.value, readyState: 'Found' } }
            : null,
          other: { _connectedRef, connectedRef },
        };
      },
    };
  });

  it('could hold disconnect failure (such as user reject)', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const CustomConnectBtn: React.FC = () => {
      const { disconnect } = useProvider();

      return (
        <div className="custom-connectbtn">
          <button
            type="button"
            className="btn-disconnect"
            onClick={async () => {
              disconnect?.();
            }}
          >
            Disconnect
          </button>
        </div>
      );
    };

    const App = () => {
      return (
        <TronWeb3ConfigProvider>
          <CustomConnectBtn />
        </TronWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const disconnectBtn = selector('.btn-disconnect')!;

    fireEvent.click(disconnectBtn);

    await vi.waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
    });

    expect(consoleErrorSpy).toBeCalledWith(new Error('mocked disconnect error'));

    consoleErrorSpy.mockRestore();
  });
});
