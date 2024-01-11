import { ConnectButton, Connector } from '@ant-design/web3';
import { EthereumCircleColorful } from '@ant-design/web3-icons';
import {
  metadata_MetaMask,
  metadata_TokenPocket,
  UniversalWallet,
  WagmiWeb3ConfigProvider,
} from '@ant-design/web3-wagmi';
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
