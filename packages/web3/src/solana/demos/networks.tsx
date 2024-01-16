import { ConnectButton, Connector } from '@ant-design/web3';
import {
  metadata_CoinbaseWallet,
  Solana,
  SolanaDevnet,
  SolanaTestnet,
} from '@ant-design/web3-assets';
import {
  solana,
  solanaDevnet,
  solanaTestnet,
  SolanaWeb3ConfigProvider,
  WalletFactory,
} from '@ant-design/web3-solana';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-wallets';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      rpcProvider={'default'}
      balance={false}
      autoConnect
      chains={[solana, solanaTestnet, solanaDevnet]}
      chainAssets={[Solana, SolanaTestnet, SolanaDevnet]}
      wallets={[WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet)]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
