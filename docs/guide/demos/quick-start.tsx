import { createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { NFTImage } from '@ant-design/web3';

const { publicClient } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  publicClient,
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider config={config}>
      <NFTImage width={300} address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
