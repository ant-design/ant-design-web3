import React, { useState } from 'react';
import { ConnectButton, Connector, useProvider } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { SuiWeb3ConfigProvider } from '../../';
import { wait, xrender } from './utils';

describe('SuiWeb3ConfigProvider connect tests', () => {
  const mockedDatas = vi.hoisted(() => {
    return {
      // fake address
      shortAddress: '0xa123...y123',
      address: '0xa123a123b123b123____a00aaf10c9c283aae9498684218____x123x123y123y123',
      accounts: [
        { address: '0xa123a123b123b123____a00aaf10c9c283aae9498684218____x123x123y123y123' },
        { address: '0xa123a123b123b123____a00aaf10c9c283aae9498684218____x123x123y123y12a' },
        { address: '0xa123a123b123b123____a00aaf10c9c283aae9498684218____x123x123y123y12b' },
      ],
      WALLETS: [
        {
          name: 'Test Wallet',
          icon: 'data:image/svg+xml;base64,test_test_test_test_test_test_test_test_',
        },
        {
          name: 'Test2 Wallet',
          icon: 'data:image/svg+xml;base64,test2_test2_test2_test2_test2_test2_test2_',
        },
      ],
    };
  });

  vi.mock('@mysten/dapp-kit', async () => {
    const originModules = await vi.importActual('@mysten/dapp-kit');
    const { remember } = await import('./utils');

    const accountRef = remember<string | undefined>(undefined);

    return {
      ...originModules,
      useConnectWallet: () => {
        const [, forceUpdate] = useState('');

        const mutateAsync = async () => {
          await wait(30);
          accountRef.value = mockedDatas.address;

          forceUpdate(accountRef.value);
          return { accounts: mockedDatas.accounts };
        };

        return {
          mutateAsync: mutateAsync,
        };
      },
      useWallets: () => {
        return [...mockedDatas.WALLETS];
      },
      useCurrentAccount: () => {
        return accountRef.value
          ? {
              address: accountRef.value,
            }
          : undefined;
      },
    };
  });

  it('available connect', async () => {
    const testOnConnectedAddresses = vi.fn();

    const App = () => {
      return (
        <SuiWeb3ConfigProvider>
          <Connector
            onConnected={(account) => {
              testOnConnectedAddresses(account?.addresses?.join(','));
            }}
          >
            <ConnectButton />
          </Connector>
        </SuiWeb3ConfigProvider>
      );
    };

    const { selector, selectors } = xrender(App);

    const connectBtn = selector('.ant-web3-connect-button');

    // not connect
    expect(connectBtn?.textContent).toBe('Connect Wallet');
    fireEvent.click(connectBtn!);

    // check wallet list
    await vi.waitFor(() => {
      const walletList = selectors(
        '.ant-web3-connect-modal-group-content .ant-list-items .ant-web3-connect-modal-name',
      );
      expect(walletList).toBeTruthy();
      expect(walletList.length).toBe(2);
      const walletTexts = Array.from(walletList)
        .map((item) => item.textContent)
        .join(',');

      expect(walletTexts).toBe(mockedDatas.WALLETS.map((v) => v.name).join(','));
    });

    // try to connect first fake wallet
    await vi.waitFor(() => {
      const walletItems = selectors('.ant-web3-connect-modal-wallet-item');
      expect(walletItems).toBeTruthy();
      expect(walletItems.length).toBe(2);

      const firstWalletItem = selectors('.ant-web3-connect-modal-wallet-item').item(0);
      expect(firstWalletItem).toBeTruthy();

      // click first wallet item
      fireEvent.click(firstWalletItem!);
    });

    // test connect-button has changed to short address
    await vi.waitFor(() => {
      expect(selector('.ant-web3-connect-button')?.textContent).toBe(mockedDatas.shortAddress);
    });

    // test onConnected callback passed `addresses`
    await vi.waitFor(() => {
      expect(testOnConnectedAddresses).toBeCalledWith(
        mockedDatas.accounts.map((v) => v.address).join(','),
      );
    });
  });

  it('available connect', async () => {
    const FAKE_WALLET = {
      name: 'fake fake wallet',
      remark: 'fake wallet remark',
    };

    const CustomConnectBtn = () => {
      const { connect } = useProvider();
      const [errorMessage, setErrorMessage] = useState('');

      return (
        <div>
          <button
            type="button"
            className="connect-btn-non"
            onClick={async () => {
              try {
                await connect?.(undefined);
              } catch (err: any) {
                setErrorMessage(err.message);
              }
            }}
          >
            connect
          </button>
          <button
            type="button"
            className="connect-btn-mistake"
            onClick={async () => {
              try {
                await connect?.(FAKE_WALLET);
              } catch (err: any) {
                setErrorMessage(err.message);
              }
            }}
          >
            connect
          </button>
          <div className="error">{errorMessage || 'no error'}</div>
        </div>
      );
    };

    const App = () => {
      return (
        <SuiWeb3ConfigProvider>
          <CustomConnectBtn />
        </SuiWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const errorDom = selector('.error');
    const connectBtnNon = selector('.connect-btn-non');
    const connectBtnMistake = selector('.connect-btn-mistake');

    expect(errorDom?.textContent).toBe('no error');
    expect(connectBtnNon?.textContent).toBe('connect');
    expect(connectBtnMistake?.textContent).toBe('connect');

    fireEvent.click(connectBtnNon!);

    await vi.waitFor(() => {
      expect(errorDom?.textContent).toBe('Can not find wallet undefined');
    });

    fireEvent.click(connectBtnMistake!);
    await vi.waitFor(() => {
      expect(errorDom?.textContent).toBe(`Can not find wallet ${FAKE_WALLET.name}`);
    });
  });
});
