import type { WalletFactoryBuilder } from './types';

export const WalletFactory: WalletFactoryBuilder = (adapterConstructor, metadata) => {
  return {
    create: () => {
      const adapter = new adapterConstructor(metadata.name);
      return {
        ...metadata,
        adapter,
        hasWalletReady: () => Promise.resolve(!!adapter.provider),
        hasExtensionInstalled: () => Promise.resolve(!!adapter.provider),
      };
    },
  };
};
