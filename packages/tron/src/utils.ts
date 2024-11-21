import { WalletReadyState } from '@tronweb3/tronwallet-abstract-adapter';

import type {
  AdapterWalletFactory as AdapterWalletFactoryType,
  WalletFactory as WalletFactoryType,
} from './wallets/types';

export const hasWalletReady = (readyState?: WalletReadyState) =>
  readyState === WalletReadyState.Found || readyState === WalletReadyState.Loading;

export const isAdapterWalletFactory = (
  factory: WalletFactoryType,
): factory is AdapterWalletFactoryType => {
  return (factory as AdapterWalletFactoryType).adapter !== undefined;
};
