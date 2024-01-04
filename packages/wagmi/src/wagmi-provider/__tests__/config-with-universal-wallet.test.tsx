import EventEmitter from 'events';
import { Connector, useProvider, type ConnectorTriggerProps } from '@ant-design/web3';
import {
  metadata_TokenPocket,
  UniversalWallet,
  WagmiWeb3ConfigProvider,
} from '@ant-design/web3-wagmi';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

describe('WagmiWeb3ConfigProvider with UniversalWallet', () => {
  it('avaliable wallets with assets', () => {
    const chains = [polygon, mainnet];
    const { publicClient } = configureChains(chains, [publicProvider()]);

    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [
        new MetaMaskConnector(),
        new WalletConnectConnector({
          chains,
          options: {
            showQrModal: false,
            projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
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

    const CustomConnector: React.FC = () => {
      const { availableWallets, connect } = useProvider();
      return (
        <div
          className="wallets-name"
          onClick={() => {
            connect?.();
          }}
        >
          {availableWallets?.map((item) => item.name).join(',')}
        </div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider assets={[new UniversalWallet(metadata_TokenPocket)]} config={config}>
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('MetaMask,TokenPocket');
  });
});
