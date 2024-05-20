import {
  metadata_Backpack,
  metadata_CoinbaseWallet,
  metadata_OkxWallet,
  metadata_Phantom,
  metadata_Solflare,
  metadata_Trust,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-coinbase';
import { TrustWalletAdapter } from '@solana/wallet-adapter-trust';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';

import { WalletConnectWalletAdapter } from '../wallet-connect-adapter';
import { StandardWalletFactory, WalletConnectWalletFactory, WalletFactory } from './factory';

export const CoinbaseWallet = WalletFactory(
  () => new CoinbaseWalletAdapter(),
  metadata_CoinbaseWallet,
);
export const TrustWallet = WalletFactory(() => new TrustWalletAdapter(), metadata_Trust);
/** Solflare with MetaMask Snap */
export const SolflareSnapWallet = WalletFactory(
  () => new SolflareWalletAdapter(),
  metadata_Solflare,
);

export const PhantomWallet = StandardWalletFactory(metadata_Phantom);
export const OKXWallet = StandardWalletFactory(metadata_OkxWallet);
export const BackpackWallet = StandardWalletFactory(metadata_Backpack);
/** Solflare Wallet (Standard Wallet) */
export const SolflareWallet = StandardWalletFactory(metadata_Solflare);

export const WalletConnectWallet = WalletConnectWalletFactory(
  new WalletConnectWalletAdapter(),
  metadata_WalletConnect,
);
