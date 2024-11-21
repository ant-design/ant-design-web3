// import type { Wallet, WalletMetadata } from '@ant-design/web3-common';

// export interface WalletFactory {
//   create: () => Wallet;
// }

// export type WalletFactoryBuilder = (metadata: WalletMetadata) => WalletFactory;

import type { Wallet, WalletMetadata } from '@ant-design/web3-common';
import type { Adapter } from '@tronweb3/tronwallet-abstract-adapter';

export interface StandardWallet extends Wallet {
  isStandardWallet: boolean;
}

export interface WalletFactory {
  create: () => Wallet;
}

export interface StandardWalletFactory {
  create: () => StandardWallet;
}

export interface AdapterWalletFactory extends WalletFactory {
  adapter: Adapter;
}

export type WalletFactoryBuilder = (
  adapter: Adapter,
  walletMetadata: WalletMetadata,
) => AdapterWalletFactory;

export type StandardWalletFactoryBuilder = (
  walletMetadata: WalletMetadata,
) => StandardWalletFactory;
