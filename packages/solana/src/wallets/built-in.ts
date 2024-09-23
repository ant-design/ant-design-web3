/* v8 ignore start */
import {
  metadata_Backpack,
  metadata_CoinbaseWallet,
  metadata_OkxWallet,
  metadata_Phantom,
  metadata_Trust,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-coinbase';
import { TrustWalletAdapter } from '@solana/wallet-adapter-trust';
import { TipLinkWalletAdapter } from '@tiplink/wallet-adapter';

import { WalletConnectWalletAdapter } from '../wallet-connect-adapter';
import { StandardWalletFactory, WalletConnectWalletFactory, WalletFactory } from './factory';

export const CoinbaseWallet = () =>
  WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet);
export const TrustWallet = () => WalletFactory(new TrustWalletAdapter(), metadata_Trust);

export type TipLinkWalletConfig = ConstructorParameters<typeof TipLinkWalletAdapter>[0];
export const TipLinkWallet = (config: TipLinkWalletConfig) => {
  const adapter = new TipLinkWalletAdapter(config);

  return WalletFactory(adapter, {
    name: adapter.name,
    remark: 'TipLink Wallet',
    icon: adapter.icon,
    app: {
      link: adapter.url,
    },
  });
};

export const PhantomWallet = () => StandardWalletFactory(metadata_Phantom);
export const OKXWallet = () => StandardWalletFactory(metadata_OkxWallet);
export const BackpackWallet = () => StandardWalletFactory(metadata_Backpack);

export const WalletConnectWallet = () =>
  WalletConnectWalletFactory(new WalletConnectWalletAdapter(), metadata_WalletConnect);
