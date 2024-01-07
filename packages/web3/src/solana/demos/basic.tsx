import { ConnectButton, Connector } from '@ant-design/web3';

import { SolanaWeb3ConfigProvider, Solana } from '@ant-design/web3-solana';

import { CoinbaseWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { CoinbaseWallet } from '@ant-design/web3-wagmi';

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
