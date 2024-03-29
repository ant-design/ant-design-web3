import { NFTCard } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { EthersWeb3ConfigProvider } from '@ant-design/web3-ethers';

const App: React.FC = () => {
  return (
    <EthersWeb3ConfigProvider chains={[Mainnet]}>
      <NFTCard address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
    </EthersWeb3ConfigProvider>
  );
};

export default App;
