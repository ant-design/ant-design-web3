import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  MetamaskSnapWallet,
  PhantomWallet,
  SolanaWeb3ConfigProvider,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      autoConnect
      wallets={[CoinbaseWallet(), PhantomWallet(), MetamaskSnapWallet()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
