import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

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
    new InjectedConnector({
      chains,
      options: {
        name: 'TokenPocket',
        getProvider: () => {
          return (window as any).tokenpocket?.ethereum;
        },
      },
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider config={config} assets={[WalletConnect, TokenPocket, CoinbaseWallet]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
