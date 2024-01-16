import { ConnectButton, Connector } from '@ant-design/web3';
import { metadata_CoinbaseWallet, metadata_Phantom } from '@ant-design/web3-assets';
import { SolanaWeb3ConfigProvider, WalletFactory } from '@ant-design/web3-solana';
import { CoinbaseWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      autoConnect
      wallets={[
        WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet),
        WalletFactory(new PhantomWalletAdapter(), metadata_Phantom),
      ]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
