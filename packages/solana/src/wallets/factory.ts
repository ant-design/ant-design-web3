import { WalletReadyState } from '@solana/wallet-adapter-base';

import { hasWalletReady } from '../utils';
import type {
  AdapterWalletFactory as AdapterWalletFactoryType,
  WalletConnectWalletFactoryBuilder,
  WalletConnectWalletFactory as WalletConnectWalletFactoryType,
  WalletFactoryBuilder,
  WalletFactory as WalletFactoryType,
} from './types';

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
          return hasWalletReady(adapter);
        },
        hasExtensionInstalled: async () => {
          return adapter.readyState === WalletReadyState.Installed;
        },
      };
    },
  };
};

// For `WalletConnect`
export const WalletConnectWalletFactory: WalletConnectWalletFactoryBuilder = (
  adapter,
  metadata,
) => {
  return {
    isWalletConnect: true,
    adapter,
    create: (getWalletConnectProvider) => {
      return {
        ...metadata,
        name: adapter.name,
        remark: metadata.remark,
        adapter,
        hasWalletReady: async () => {
          return adapter.readyState === WalletReadyState.Loadable;
        },

        getQrCode: getWalletConnectProvider
          ? async () => {
              const walletConnectProvider = await getWalletConnectProvider();

              if (!walletConnectProvider) {
                return Promise.reject(new Error('WalletConnect is not available'));
              }

              return new Promise((resolve) => {
                walletConnectProvider.on('display_uri', (uri: string) => {
                  resolve({ uri });
                });
              });
            }
          : undefined,
      };
    },
  };
};
