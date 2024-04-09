import {
  metadata_CoinbaseWallet,
  metadata_OkxWallet,
  metadata_Phantom,
  metadata_Trust,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import {
  CoinbaseWalletAdapter,
  PhantomWalletAdapter,
  TrustWalletAdapter,
} from '@solana/wallet-adapter-wallets';

import { WalletConnectWalletAdapter } from '../wallet-connect-adapter';
import { StandardWalletFactory, WalletConnectWalletFactory, WalletFactory } from './factory';

export const CoinbaseWallet = () =>
  WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet);
export const PhantomWallet = () => WalletFactory(new PhantomWalletAdapter(), metadata_Phantom);
export const TrustWallet = () => WalletFactory(new TrustWalletAdapter(), metadata_Trust);

export const WalletConnectWallet = () =>
  WalletConnectWalletFactory(new WalletConnectWalletAdapter(), metadata_WalletConnect);
