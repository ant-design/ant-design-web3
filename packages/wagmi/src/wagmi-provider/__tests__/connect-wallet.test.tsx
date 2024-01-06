import { useEffect, useState } from 'react';
import { ConnectButton, ConnectModal, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  SafeheronWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { theme as antTheme, ConfigProvider, Grid } from 'antd';
import { afterEach, beforeEach, describe, expect, it, mount, vi } from 'vitest';
import { configureChains, createConfig, mainnet } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

import { groupOrder, guide, walletList } from '../../../../web3/src/connect-modal/__tests__/mock';
import { mockBrowser } from '../../../../web3/src/utils/test-utils';

describe('ConnectModal with guide', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  mockBrowser('Chrome');

  it('测试panel route change2', async () => {
    const { publicClient, chains } = configureChains([mainnet], [publicProvider()]);

    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [
        new MetaMaskConnector({
          chains,
        }),
        new WalletConnectConnector({
          chains,
          options: {
            showQrModal: false,
            projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
          },
        }),
        new CoinbaseWalletConnector({
          chains,
          options: {
            appName: 'ant.design.web3',
            jsonRpcUrl: `https://api.zan.top/node/v1/eth/mainnet/${'YOUR_ZAN_API_KEY'}`,
          },
        }),
        new InjectedConnector({
          chains,
          options: {
            name: 'Safeheron',
            getProvider: () => (window as any).safeheron,
          },
        }),
        new InjectedConnector({
          chains,
          options: {
            name: 'TokenPocket',
            getProvider: () => (window as any).tokenpocket?.ethereum,
          },
        }),
      ],
    });
    // console.log(config.publicClients.get(-1));

    const App = () => {
      return (
        <WagmiWeb3ConfigProvider
          assets={[WalletConnect, TokenPocket, CoinbaseWallet, SafeheronWallet]}
          config={config}
        >
          <Connector>
            <ConnectButton />
          </Connector>
        </WagmiWeb3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);
    // console.log(baseElement!.outerHTML);
    const btn = baseElement.querySelector('.ant-web3-connect-button');
    fireEvent.click(btn!);
    console.log(baseElement!.outerHTML);
    const dom = baseElement.querySelectorAll('.ant-web3-connect-modal-name');
    // console.log('dom', dom);
  });
  it('Get wallet from init route', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={[
          {
            icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
            name: 'Test Wallect',
            remark: '备注',
            app: {
              link: 'https://test.com/xxx',
            },
            group: 'Popular',
            getQrCode: () =>
              Promise.resolve({
                uri: 'wc:f7a2ae968db3720de3efa7f088a3a05a746c011bb972a4dae0a61abe66632e3d@2?relay-protocol=irn&symKey=85bf278d8a4240154c449939eb047863585619c9c7acaa78657606d66c5630b3',
              }),
          },
        ]}
        mode="normal"
      />
    );
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.ant-web3-connect-modal-get-btn')?.textContent).toBe(
      'Get a Wallet',
    );
    // console.log(baseElement.outerHTML);

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-get-btn')!);

    expect(baseElement.querySelector('.ant-list-item-meta-title')?.textContent).toBe(
      'Test Wallect',
    );
    expect(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-btn')?.textContent).toBe(
      'Get',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-btn')!);

    expect(baseElement.querySelector('.ant-web3-connect-modal-card-title')?.textContent).toBe(
      'Test Wallect for Mobile',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-card-item')!);
    expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-link')?.textContent).toBe(
      'Click to go to the download page',
    );
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-qr-code-link')?.getAttribute('href'),
    ).toBe('https://test.com/xxx');
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-qr-code-tips-download')?.textContent,
    ).toBe('Scan the QR code to download the wallet.');
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-title')?.textContent,
    ).toBe('Download Test Wallect');

    // back to getWallet
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')!);
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-title')?.textContent,
    ).toBe('Get Test Wallect');

    // back to qrCode
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')!);
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-title')?.textContent,
    ).toBe('Get a Wallet');

    // back to init
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')!);
    expect(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')).toBeNull();
  });
});
