import { ConnectButton, Connector } from '@ant-design/web3';
import { EthereumCircleColorful } from '@ant-design/web3-icons';
import { TokenPocket, UniversalWallet, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

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
      projectId: YOUR_WALLET_CONNET_PROJECT_ID,
    }),
    injected({
      target: 'tokenPocket',
    }),
    injected({
      target() {
        return {
          id: 'testWallet',
          name: 'TestWallet',
          provider: window.ethereum,
        };
      },
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      wallets={[
        new UniversalWallet({
          name: 'TestWallet',
          remark: 'My TestWallet',
          icon: <EthereumCircleColorful />,
          extensions: [],
          group: 'Popular',
        }),
        {
          connectors: ['WalletConnect'],
          create: () => {
            return {
              name: 'TestWallet',
              remark: 'My TestWallet',
              icon: <EthereumCircleColorful />,
              app: {
                link: 'https://web3.ant.design',
              },
              hasWalletReady: async () => {
                return !!(window as any).testWallet;
              },
              getQrCode: async () => {
                return {
                  uri: 'https://web3.ant.design',
                };
              },
            };
          },
        },
        TokenPocket({
          group: 'Popular',
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
