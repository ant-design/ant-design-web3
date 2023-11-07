import { NFTImage } from '@ant-design/web3';
import {
  EthereumProvider,
  createProvider,
  ZANJsonRpcProvider,
  chains,
} from '@ant-design/web3-ethereum';

const provider = createProvider({
  rpcs: [
    new ZANJsonRpcProvider({
      apiKey: YOUR_ZAN_API_KEY,
    }),
  ],
  chains: [chains.mainnet],
});

const App: React.FC = () => {
  return (
    <EthereumProvider provider={provider}>
      <NFTImage address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={42n} />
    </EthereumProvider>
  );
};

export default App;
