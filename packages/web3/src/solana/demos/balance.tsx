import { ConnectButton, Connector } from '@ant-design/web3';
import { metadata_CoinbaseWallet } from '@ant-design/web3-assets';
import { SolanaWeb3ConfigProvider, WalletFactory } from '@ant-design/web3-solana';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-wallets';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      rpcProvider={'default'}
      balance
      autoConnect
      wallets={[WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet)]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
