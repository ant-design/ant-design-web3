/* v8 ignore start */
import type { WalletFactoryBuilder } from './types';

export const WalletFactory: WalletFactoryBuilder = (metadata) => {
  return {
    create: () => {
      return {
        ...metadata,
        // We simply assume that all wallets implement the `Standard Wallet`,
        // so the wallets provided by `wallets` are not available.
        hasWalletReady: () => Promise.resolve(false),
        hasExtensionInstalled: () => Promise.resolve(false),
      };
    },
  };
};
