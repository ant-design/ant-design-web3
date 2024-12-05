import { WalletReadyState } from '@tronweb3/tronwallet-abstract-adapter';

export const hasWalletReady = (readyState?: WalletReadyState) =>
  readyState === WalletReadyState.Found || readyState === WalletReadyState.Loading;
