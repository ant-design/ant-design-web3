import { ConnectButton, Connector } from '@ant-design/web3';
import { CoinbaseWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider balance wallets={[CoinbaseWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
