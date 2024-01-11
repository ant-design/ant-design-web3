import { ConnectButton, Connector } from '@ant-design/web3';
import { Polygon, WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

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
      projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider wallets={[WalletConnect]} chains={[Polygon]} config={config}>
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
