import { ConnectButton, Connector } from '@ant-design/web3';
import { Solana, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';
import { CoinbaseWallet } from '@ant-design/web3-wagmi';
import { CoinbaseWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      connectionEndpoint={`https://api.mainnet-beta.solana.com/`}
      wallets={[new CoinbaseWalletAdapter(), new PhantomWalletAdapter()]}
      assets={[Solana, CoinbaseWallet]}
      autoConnect
    >
      <div>
        <Connector>
          <ConnectButton addressPrefix={false} />
        </Connector>
      </div>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
