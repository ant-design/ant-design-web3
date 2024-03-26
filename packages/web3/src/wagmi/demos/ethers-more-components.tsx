import { NFTCard } from '@ant-design/web3';
import { EthersWeb3ConfigProvider, MetaMask } from '@ant-design/web3-ethers';
import { ethers } from 'ethers';

const provider = new ethers.BrowserProvider(window.ethereum);

const App: React.FC = () => {
  return (
    <EthersWeb3ConfigProvider wallets={[MetaMask()]} provider={provider}>
      <NFTCard address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
    </EthersWeb3ConfigProvider>
  );
};

export default App;
