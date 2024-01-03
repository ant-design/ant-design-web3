import { ConnectButton, Connector } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { configureChains, createConfig, mainnet } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

const { publicClient, chains } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new MetaMaskConnector(),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: YOUR_WALLET_CONNET_PROJECT_ID,
      },
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider assets={[WalletConnect]} config={config}>
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
