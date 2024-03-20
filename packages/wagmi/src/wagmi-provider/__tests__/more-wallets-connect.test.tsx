import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  MetaMask,
  SafeheronWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { fireEvent, render } from '@testing-library/react';
import { Grid } from 'antd';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

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
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target: 'metaMask',
        }),
        walletConnect({
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        }),
        injected({
          target() {
            return {
              id: 'safeheron',
              name: 'Safeheron',
              // @ts-ignore
              provider: window.safeheron,
            };
          },
        }),
        injected({
          target: 'tokenPocket',
        }),
      ],
    });

    const App = () => {
      return (
        <WagmiWeb3ConfigProvider
          wallets={[
            MetaMask(),
            WalletConnect(),
            TokenPocket(),
            CoinbaseWallet(),
            SafeheronWallet(),
          ]}
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
    expect(walletItems.length).toBe(4);
    fireEvent.click(walletItems[0]!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-box')).toBeTruthy();
    });
    fireEvent.click(walletItems[1]!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-box')).toBeTruthy();
    });
    fireEvent.click(walletItems[0]!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-box')).toBeTruthy();
      expect(baseElement.querySelector('.ant-web3-connect-modal-card-list')).toBe(null);
    });
  });

  it('config wallets without injected connector', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true, // ≥ 768px, mock PC
    });
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        walletConnect({
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        }),
      ],
    });

    const App = () => {
      return (
        <WagmiWeb3ConfigProvider wallets={[MetaMask(), SafeheronWallet()]} config={config}>
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
    expect(walletItems.length).toBe(1);
  });

  it('config wallets without injected connector and config eip6963', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true, // ≥ 768px, mock PC
    });
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        walletConnect({
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        }),
      ],
    });

    const App = () => {
      return (
        <WagmiWeb3ConfigProvider
          eip6963
          wallets={[
            MetaMask(),
            WalletConnect(),
            TokenPocket(),
            CoinbaseWallet(),
            SafeheronWallet(),
          ]}
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
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-box')).toBeTruthy();
      expect(baseElement.querySelector('.ant-web3-connect-modal-card-list')).toBe(null);
    });
  });

  it('show get wallet panel when only injected wallet not installed', async () => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true, // ≥ 768px, mock PC
    });
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        walletConnect({
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        }),
      ],
    });

    const App = () => {
      return (
        <WagmiWeb3ConfigProvider
          eip6963
          wallets={[
            MetaMask(),
            WalletConnect(),
            TokenPocket(),
            CoinbaseWallet(),
            SafeheronWallet(),
          ]}
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
    fireEvent.click(walletItems[4]!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-box')).toBe(null);
      expect(baseElement.querySelector('.ant-web3-connect-modal-card-list')).toBeTruthy();
    });
  });
});
