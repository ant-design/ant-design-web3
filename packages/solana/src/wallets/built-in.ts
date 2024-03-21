import {
  metadata_CoinbaseWallet,
  metadata_Phantom,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { CoinbaseWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

import { WalletConnectWalletAdapter } from '../wallet-connect-adapter';
import { WalletConnectWalletFactory, WalletFactory } from './factory';

export const CoinbaseWallet = () =>
  WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet);
export const PhantomWallet = () => WalletFactory(new PhantomWalletAdapter(), metadata_Phantom);

export const WalletConnectWallet = () =>
  WalletConnectWalletFactory(new WalletConnectWalletAdapter(), metadata_WalletConnect);
