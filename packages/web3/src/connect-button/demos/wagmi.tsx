import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { ConnectButton } from '@ant-design/web3';

const { publicClient, chains } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new MetaMaskConnector(),
    new WalletConnectConnector({
      chains,
      options: {
        showQrModal: false,
        projectId: YOUR_WALLET_CONNET_PROJECT_ID,
      },
    }),
  ],
});

export default () => {
  return (
    <WagmiConfig config={config}>
      <WagmiWeb3ConfigProvider>
        <ConnectButton />
      </WagmiWeb3ConfigProvider>
    </WagmiConfig>
  );
};
