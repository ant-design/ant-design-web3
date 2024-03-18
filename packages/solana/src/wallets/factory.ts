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
          return (
            adapter.readyState === WalletReadyState.Installed ||
            adapter.readyState === WalletReadyState.Loadable
          );
        },
        hasExtensionInstalled: async () => {
          return adapter.readyState === WalletReadyState.Installed;
        },
      };
    },
  };
};

// For `WalletConnect`
export const WalletConnectWalletFactory: WalletFactoryBuilder = (adapter, metadata) => {
  return {
    adapter,
    create: () => {
      return {
        ...metadata,
        name: adapter.name,
        remark: metadata.remark,
        adapter,
        hasWalletReady: async () => {
          return adapter.readyState === WalletReadyState.Loadable;
        },

        // Provide a `getQrCode` method to signed it is useable,
        // but it WILL NOT actually return a URL.
        getQrCode: () => Promise.resolve({}),
      };
    },
  };
};
