import { ConnectButton, Connector } from '@ant-design/web3';
import { EthereumCircleColorful } from '@ant-design/web3-icons';
import {
  metadata_MetaMask,
  metadata_TokenPocket,
  UniversalWallet,
  WagmiWeb3ConfigProvider,
} from '@ant-design/web3-wagmi';
import { configureChains, createConfig, mainnet } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
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
        showQrModal: false,
        projectId: YOUR_WALLET_CONNET_PROJECT_ID,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'TokenPocket',
        getProvider: () => (window as any).tokenpocket?.ethereum,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'TestWallet',
        getProvider: () => (window as any).testWallet,
      },
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      assets={[
        new UniversalWallet({
          ...metadata_TokenPocket,
          group: 'Popular',
        }),
        {
          name: 'TestWallet',
          create: () => {
            return {
              name: 'TestWallet',
              remark: 'My TestWallet',
              icon: <EthereumCircleColorful />,
              hasWalletReady: async () => {
                return !!(window as any).testWallet;
              },
              hasExtensionInstalled: async () => {
                return !!(window as any).testWallet;
              },
            };
          },
        },
        new UniversalWallet({
          ...metadata_MetaMask,
          group: 'More',
        }),
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
