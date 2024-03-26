import { ConnectButton, Connector } from '@ant-design/web3';
import { EthersWeb3ConfigProvider, MetaMask } from '@ant-design/web3-ethers';
import { ethers } from 'ethers';

const provider = new ethers.BrowserProvider(window.ethereum);

const App: React.FC = () => {
  return (
    <EthersWeb3ConfigProvider
      provider={provider}
      wallets={[MetaMask()]}
      // eip6963={{ autoAddInjectedWallets: true }}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </EthersWeb3ConfigProvider>
  );
};

export default App;
