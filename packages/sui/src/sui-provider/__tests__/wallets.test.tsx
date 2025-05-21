import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { metadata_Slush } from '@ant-design/web3-assets';
import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Slush, SuiWeb3ConfigProvider } from '../../';
import { xrender } from './utils';

describe('SuiWeb3ConfigProvider wallets tests', () => {
  const mockedDatas = vi.hoisted(() => {
    return {
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

    return {
      ...originModules,
      useWallets: () => {
        return [...mockedDatas.WALLETS];
      },
    };
  });

  it('available get injected wallets', async () => {
    const App = () => {
      return (
        <SuiWeb3ConfigProvider>
          <Connector>
            <ConnectButton />
          </Connector>
        </SuiWeb3ConfigProvider>
      );
    };

    const { selector, selectors } = xrender(App);

    const connectBtn = selector('.ant-web3-connect-button');

    expect(connectBtn).not.toBeNull();
    fireEvent.click(connectBtn!);

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
  });

  it('available provide `wallets`', async () => {
    const App = () => {
      return (
        <SuiWeb3ConfigProvider wallets={[Slush()]}>
          <Connector>
            <ConnectButton />
          </Connector>
        </SuiWeb3ConfigProvider>
      );
    };

    const { selector, selectors } = xrender(App);

    const connectBtn = selector('.ant-web3-connect-button');

    expect(connectBtn).not.toBeNull();
    fireEvent.click(connectBtn!);

    await vi.waitFor(() => {
      const walletList = selectors(
        '.ant-web3-connect-modal-group-content .ant-list-items .ant-web3-connect-modal-name',
      );
      expect(walletList).toBeTruthy();
      expect(walletList.length).toBe(3);
      const walletTexts = Array.from(walletList)
        .map((item) => item.textContent)
        .join(',');

      // [Slush, Test Wallet, Test2 Wallet]
      const walletNames = [metadata_Slush.name].concat(mockedDatas.WALLETS.map((v) => v.name));

      expect(walletTexts).toBe(walletNames.join(','));
    });
  });
});
