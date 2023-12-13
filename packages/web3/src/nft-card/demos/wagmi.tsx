import { createConfig, configureChains, mainnet } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { NFTCard } from '@ant-design/web3';

const { publicClient } = configureChains(
  [mainnet],
  [
    infuraProvider({
      apiKey: YOUR_INFURA_API_KEY,
    }),
  ],
);

const config = createConfig({
  publicClient,
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider config={config}>
      <NFTCard
        like={{ liked: false }}
        price={0.1}
        address="0x79fcdef22feed20eddacbb2587640e45491b757f"
        tokenId={42n}
      />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
