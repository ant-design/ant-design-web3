/* v8 ignore start */
import {
  metadata_Backpack,
  metadata_CoinbaseWallet,
  metadata_OkxWallet,
  metadata_Phantom,
  metadata_Solflare,
  metadata_Trust,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { WalletMetadata } from '@ant-design/web3-common';
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

export const PhantomWallet = (metadata?: Partial<WalletMetadata>) =>
  StandardWalletFactory({ ...metadata_Phantom, ...metadata });
export const OKXWallet = (metadata?: Partial<WalletMetadata>) =>
  StandardWalletFactory({ ...metadata_OkxWallet, ...metadata });
export const BackpackWallet = (metadata?: Partial<WalletMetadata>) =>
  StandardWalletFactory({ ...metadata_Backpack, ...metadata });
export const SolflareWallet = (metadata?: Partial<WalletMetadata>) =>
  StandardWalletFactory({ ...metadata_Solflare, ...metadata });

export const WalletConnectWallet = (metadata?: Partial<WalletMetadata>) =>
  WalletConnectWalletFactory(new WalletConnectWalletAdapter(), {
    ...metadata_WalletConnect,
    ...metadata,
  });

export { StandardWalletFactory };
