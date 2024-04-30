import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  PhantomWallet,
  SolanaWeb3ConfigProvider,
  SolflareMetaMaskSnapWallet,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      autoConnect
      wallets={[CoinbaseWallet(), PhantomWallet(), SolflareMetaMaskSnapWallet()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
