import type { Wallet, WalletMetadata } from '@ant-design/web3-common';
import type { Adapter } from '@solana/wallet-adapter-base';

import type { IUniversalProvider } from '../types';
import type { WalletConnectWalletAdapter } from '../wallet-connect-adapter';

export interface WalletFactory {
  create: (getWalletConnect?: () => Promise<IUniversalProvider | undefined>) => Wallet;
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

export type WalletFactoryBuilder = (
  adapter: Adapter,
  walletMetadata: WalletMetadata,
) => AdapterWalletFactory;

export type StandardWalletFactoryBuilder = (
  walletMetadata: WalletMetadata,
) => StandardWalletFactory;

export type WalletConnectWalletFactoryBuilder = (
  adapter: WalletConnectWalletAdapter,
  walletMetadata: WalletMetadata,
) => WalletConnectWalletFactory;
