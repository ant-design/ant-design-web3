import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  solana,
  solanaDevnet,
  solanaTestnet,
  SolanaWeb3ConfigProvider,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      balance={false}
      chains={[solana, solanaTestnet, solanaDevnet]}
      wallets={[CoinbaseWallet()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
