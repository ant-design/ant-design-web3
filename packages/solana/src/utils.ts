import type { Adapter } from '@solana/wallet-adapter-base';
import { WalletReadyState } from '@solana/wallet-adapter-base';

import type {
  AdapterWalletFactory as AdapterWalletFactoryType,
  WalletConnectWalletFactory as WalletConnectWalletFactoryType,
  WalletFactory as WalletFactoryType,
} from './wallets/types';

export const hasWalletReady = (adapter: Adapter) =>
  adapter.readyState === WalletReadyState.Installed ||
  adapter.readyState === WalletReadyState.Loadable;

export const isWalletConnnectFactory = (
  factory: WalletFactoryType,
): factory is WalletConnectWalletFactoryType =>
  !!(factory as WalletConnectWalletFactoryType).isWalletConnect;

export const isAdapterWalletFactory = (
  factory: WalletFactoryType,
): factory is AdapterWalletFactoryType => {
  return (factory as AdapterWalletFactoryType).adapter !== undefined;
};
