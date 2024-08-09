import { NFTCard } from '@ant-design/web3';
import { BitcoinWeb3ConfigProvider } from '@ant-design/web3-bitcoin';
import { Space } from 'antd';

/**
 * The main application component that sets up the BitcoinWeb3ConfigProvider and displays NFT cards.
 * @returns {JSX.Element} The rendered application component.
 */
const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider>
      <Space size={16}>
        <NFTCard
          name="Bitcoin Puppet #2087"
          description="Vibing, thriving, and striving for world peace."
          address="53151380"
          tokenId={2087n}
        />
        <NFTCard
          type="pithy"
          name="NodeMonkes"
          description="The first original 10k collection inscribed on bitcoin."
          address="d5bd29bdbd768ef54442c11707e3b958803c3dc7f0a3026db90058b798ab7575i0"
          tokenId={9740n}
        />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
