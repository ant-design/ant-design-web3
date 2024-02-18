import { metadata_CoinbaseWallet, metadata_Phantom } from '@ant-design/web3-assets';
import { CoinbaseWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

import { WalletFactory } from './factory';

export const CoinbaseWallet = () =>
  WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet);
export const PhantomWallet = () => WalletFactory(new PhantomWalletAdapter(), metadata_Phantom);
