import { ConnectButton, Connector } from '@ant-design/web3';
import {
  EthersWeb3ConfigProvider,
  MetaMask,
  OkxWallet,
  WalletConnect,
} from '@ant-design/web3-ethers';
import { ethers } from 'ethers';

const provider = new ethers.BrowserProvider(window.ethereum);

const App: React.FC = () => {
  return (
    <EthersWeb3ConfigProvider
      provider={provider}
      wallets={[
        MetaMask(),
        OkxWallet(),
        WalletConnect({ projectId: YOUR_WALLET_CONNET_PROJECT_ID }),
      ]}
    >
      <Connector
        onConnected={() => {
          console.log('connected');
          (window as any).provider = provider;
        }}
      >
        <ConnectButton />
      </Connector>
    </EthersWeb3ConfigProvider>
  );
};

export default App;
