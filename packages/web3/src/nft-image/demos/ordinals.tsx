import { NFTImage } from '@ant-design/web3';
import { BitcoinWeb3ConfigProvider } from '@ant-design/web3-bitcoin';

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider>
      <NFTImage
        address="d5bd29bdbd768ef54442c11707e3b958803c3dc7f0a3026db90058b798ab7575i0"
        tokenId={9740n}
        width={200}
      />
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
