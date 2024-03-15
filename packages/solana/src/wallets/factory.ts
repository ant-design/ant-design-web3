import { WalletReadyState } from '@solana/wallet-adapter-base';

import type { WalletFactoryBuilder } from './types';

export const WalletFactory: WalletFactoryBuilder = (adapter, metadata) => {
  return {
    adapter,
    create: () => {
      return {
        ...metadata,
        name: adapter.name,
        remark: metadata.remark,
        adapter: adapter,
        hasWalletReady: async () => {
          return adapter.readyState === WalletReadyState.Installed;
        },
        hasExtensionInstalled: async () => {
          return adapter.readyState === WalletReadyState.Installed;
        },
      };
    },
  };
};
