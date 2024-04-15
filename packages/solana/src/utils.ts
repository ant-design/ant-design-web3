import { WalletReadyState } from '@solana/wallet-adapter-base';

import type {
  AdapterWalletFactory as AdapterWalletFactoryType,
  WalletConnectWalletFactory as WalletConnectWalletFactoryType,
  WalletFactory as WalletFactoryType,
} from './wallets/types';

export const hasWalletReady = (readyState?: WalletReadyState) =>
  readyState === WalletReadyState.Installed || readyState === WalletReadyState.Loadable;

export const isWalletConnectFactory = (
  factory: WalletFactoryType,
): factory is WalletConnectWalletFactoryType =>
  !!(factory as WalletConnectWalletFactoryType).isWalletConnect;

export const isAdapterWalletFactory = (
  factory: WalletFactoryType,
): factory is AdapterWalletFactoryType => {
  return (factory as AdapterWalletFactoryType).adapter !== undefined;
};
