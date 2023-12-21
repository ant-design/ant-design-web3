import { createConfig, configureChains } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { WagmiWeb3ConfigProvider, WalletConnect, CoinbaseWallet } from '@ant-design/web3-wagmi';
import { ConnectButton, Connector } from '@ant-design/web3';

const { publicClient, chains } = configureChains([mainnet, polygon], [publicProvider()]);

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
        projectId: YOUR_WALLET_CONNET_PROJECT_ID,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'ant.design.web3',
        jsonRpcUrl: `https://api.zan.top/node/v1/eth/mainnet/${YOUR_ZAN_API_KEY}`,
      },
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider config={config} assets={[WalletConnect, CoinbaseWallet]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
