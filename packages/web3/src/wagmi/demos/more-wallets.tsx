import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  imTokenWallet,
  MetaMask,
  OkxWallet,
  SafeheronWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { coinbaseWallet, walletConnect } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  multiInjectedProviderDiscovery: true,
  connectors: [
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNET_PROJECT_ID,
    }),
    coinbaseWallet({
      appName: 'ant.design.web3',
      jsonRpcUrl: `https://api.zan.top/node/v1/eth/mainnet/${YOUR_ZAN_API_KEY}`,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        CoinbaseWallet(),
        SafeheronWallet(),
        OkxWallet(),
        imTokenWallet(),
      ]}
      config={config}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
