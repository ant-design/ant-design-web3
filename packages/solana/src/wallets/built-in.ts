import {
  metadata_CoinbaseWallet,
  metadata_Phantom,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import {
  CoinbaseWalletAdapter,
  PhantomWalletAdapter,
  WalletConnectWalletAdapter,
  type WalletConnectWalletAdapterConfig,
} from '@solana/wallet-adapter-wallets';

import { WalletConnectWalletFactory, WalletFactory } from './factory';

export const CoinbaseWallet = () =>
  WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet);
export const PhantomWallet = () => WalletFactory(new PhantomWalletAdapter(), metadata_Phantom);

export const WalletConnectWallet = (options: WalletConnectWalletAdapterConfig) =>
  WalletConnectWalletFactory(new WalletConnectWalletAdapter(options), metadata_WalletConnect);
