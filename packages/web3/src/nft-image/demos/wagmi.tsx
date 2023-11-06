import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { NFTImage } from '@ant-design/web3';

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

export default () => {
  return (
    <WagmiConfig config={config}>
      <WagmiWeb3ConfigProvider>
        <NFTImage address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={42} />
      </WagmiWeb3ConfigProvider>
    </WagmiConfig>
  );
};
