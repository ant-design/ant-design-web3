import { NFTCard } from '@ant-design/web3';
import { CoinbaseWallet, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
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
      projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider assets={[CoinbaseWallet]} config={config}>
      <NFTCard address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
