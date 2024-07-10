/* v8 ignore start */
import type {
  StandardWalletFactoryBuilder,
  WalletConnectWalletFactoryBuilder,
  WalletFactoryBuilder,
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
      };
    },
  };
};

// For Standard wallets
export const StandardWalletFactory: StandardWalletFactoryBuilder = (metadata) => {
  return {
    create: () => {
      return {
        ...metadata,
        isStandardWallet: true,
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
