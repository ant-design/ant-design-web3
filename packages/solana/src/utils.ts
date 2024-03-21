import type { Adapter } from '@solana/wallet-adapter-base';
import { WalletReadyState } from '@solana/wallet-adapter-base';

export const hasWalletReady = (adapter: Adapter) =>
  adapter.readyState === WalletReadyState.Installed ||
  adapter.readyState === WalletReadyState.Loadable;
