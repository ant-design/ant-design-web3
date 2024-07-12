/* v8 ignore start */
import type { WalletFactoryBuilder } from './types';

export const WalletFactory: WalletFactoryBuilder = (metadata) => {
  return {
    create: () => {
      return {
        ...metadata,
        hasWalletReady: () => Promise.resolve(false),
        hasExtensionInstalled: () => Promise.resolve(false),
      };
    },
  };
};
