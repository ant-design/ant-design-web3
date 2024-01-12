import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  MetaMask,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet, polygon],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNET_PROJECT_ID,
    }),
    coinbaseWallet({
      appName: 'ant.design.web3',
      jsonRpcUrl: `https://api.zan.top/node/v1/eth/mainnet/${YOUR_ZAN_API_KEY}`,
    }),
    injected({
      target: 'tokenPocket',
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      config={config}
      wallets={[MetaMask(), WalletConnect(), TokenPocket(), CoinbaseWallet()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
