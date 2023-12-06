import { NFTImage } from '@ant-design/web3';
import {
  EthereumProvider,
  createProvider,
  ZANJsonRpcProvider,
  Mainnet,
} from '@ant-design/web3-ethereum';

const provider = createProvider({
  rpcs: [
    new ZANJsonRpcProvider({
      apiKey: YOUR_ZAN_API_KEY,
    }),
  ],
  chains: [Mainnet],
});

const App: React.FC = () => {
  return (
    <EthereumProvider provider={provider}>
      <NFTImage
        address="0x79fcdef22feed20eddacbb2587640e45491b757f"
        tokenId={42n}
        width={200}
        getNFTMetadata={({ address: _address, tokenId: _tokenId }) => {
          return Promise.resolve({
            name: `Test_${_address}_${_tokenId}`,
            image: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
          });
        }}
      />
    </EthereumProvider>
  );
};

export default App;
