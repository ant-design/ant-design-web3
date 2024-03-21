import type { Wallet, WalletMetadata } from '@ant-design/web3-common';
import type { Adapter } from '@solana/wallet-adapter-base';

import type { IUniversalProvider } from '../types';
import type { WalletConnectWalletAdapter } from '../wallet-connect-adapter';

export type WalletFactoryBuilder = (
  adapter: Adapter,
  walletMetadata: WalletMetadata,
) => AdapterWalletFactory;

export type WalletConnectWalletFactoryBuild = (
  adapter: WalletConnectWalletAdapter,
  walletMetadata: WalletMetadata,
) => WalletConnectWalletFactory;

export interface WalletUseInSolanaAdapter extends Wallet {}

export interface WalletFactory {
  create: (
    getWalletConnect?: () => Promise<IUniversalProvider | undefined>,
  ) => WalletUseInSolanaAdapter;
}

export interface StandardWalletFactory extends WalletFactory {}

export interface AdapterWalletFactory extends WalletFactory {
  // Only need when use `@solana/wallet-adapter-*`
  adapter: Adapter;
}

export interface WalletConnectWalletFactory extends WalletFactory {
  adapter: WalletConnectWalletAdapter;
  isWalletConnect: boolean;
}

export const isAdapterWalletFactory = (factory: WalletFactory): factory is AdapterWalletFactory => {
  return (factory as AdapterWalletFactory).adapter !== undefined;
};
