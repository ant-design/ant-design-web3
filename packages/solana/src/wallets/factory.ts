import type {
  StandardWalletFactoryBuilder,
  WalletConnectWalletFactoryBuilder,
  WalletFactoryBuilder,
} from './types';

export const WalletFactory: WalletFactoryBuilder = (adapterBuilder, metadata) => {
  return () => {
    return {
      // adapter,
      create: () => {
        const adapter = typeof adapterBuilder === 'function' ? adapterBuilder() : adapterBuilder;

        return {
          ...metadata,
          name: adapter.name,
          remark: metadata.remark,
          adapter: adapter,
        };
      },
    };
  };
};

// For Standard wallets
export const StandardWalletFactory: StandardWalletFactoryBuilder = (metadata) => {
  return () => {
    return {
      create: () => {
        return {
          ...metadata,
          isStandardWallet: true,
        };
      },
    };
  };
};

// For `WalletConnect`
export const WalletConnectWalletFactory: WalletConnectWalletFactoryBuilder = (
  adapter,
  metadata,
) => {
  return () => {
    return {
      create: (getWalletConnectProvider) => {
        return {
          ...metadata,
          name: adapter.name,
          remark: metadata.remark,

          adapter,
          isWalletConnect: true,

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
};
