import type { WalletFactoryBuilder } from './types';

export const WalletFactory: WalletFactoryBuilder = (adapter, metadata) => {
  return {
    adapter,
    create: () => {
      return {
        ...metadata,
        adapter: adapter,
        hasWalletReady: () => Promise.resolve(!!adapter.provider),
        hasExtensionInstalled: () => Promise.resolve(!!adapter.provider),
      };
    },
  };
};
