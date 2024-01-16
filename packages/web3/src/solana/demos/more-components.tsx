// GNyDA4Z7vgTzi35qRFHBa4BDjZiugycWhNGWgcJcxiMo

import { NFTCard } from '@ant-design/web3';
import { metadata_CoinbaseWallet } from '@ant-design/web3-assets';
import { SolanaWeb3ConfigProvider, WalletFactory } from '@ant-design/web3-solana';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-wallets';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      // rpcProvider={() => 'https://api.mainnet-beta.solana.com/'}
      // rpcProvider={() =>
      //   'https://mainnet.helius-rpc.com/?api-key=cec63e24-d5fd-4e7e-a2ee-5518e08b8485'
      // }
      wallets={[WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet)]}
    >
      <NFTCard address="GNyDA4Z7vgTzi35qRFHBa4BDjZiugycWhNGWgcJcxiMo" tokenId={3332} />
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
