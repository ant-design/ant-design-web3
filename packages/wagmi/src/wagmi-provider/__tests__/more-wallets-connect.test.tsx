import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  SafeheronWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { fireEvent, render } from '@testing-library/react';
import { Grid } from 'antd';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { configureChains, createConfig, mainnet } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

import { mockBrowser } from '../../../../web3/src/utils/test-utils';

describe('more-wallets-connect', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  mockBrowser('Chrome');

  it('connect', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true, // ≥ 768px, mock PC
    });
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
    const btn = baseElement.querySelector('.ant-web3-connect-button');
    fireEvent.click(btn!);
    const walletItems = baseElement.querySelectorAll('.ant-web3-connect-modal-wallet-item');
    expect(walletItems.length).toBe(5);
    fireEvent.click(walletItems[0]!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-card-list')).toBeTruthy();
    });
    fireEvent.click(walletItems[1]!);
    await vi.waitFor(() => {
      const qrCodeBox = baseElement.querySelector('.ant-web3-connect-modal-qr-code-box');
      if (qrCodeBox !== null) {
        expect(qrCodeBox).toBeTruthy();
        return true;
      }
      return false;
    });
    fireEvent.click(walletItems[0]!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-box')).toBe(null);
      expect(baseElement.querySelector('.ant-web3-connect-modal-card-list')).toBeTruthy();
    });
  });
});
