import { isWalletInfoCurrentlyInjected, type WalletInfo } from '@tonconnect/sdk';

import { type WalletFactory } from './type';

export const TonWalletFactory = (metadata: WalletInfo): WalletFactory => {
  const isReady = isWalletInfoCurrentlyInjected(metadata);
  console.log(metadata, isReady);
  return {
    create: () => {
      return {
        ...metadata,
        name: metadata.appName,
        remark: metadata.appName,
        hasWalletReady: () => Promise.resolve(isReady),
        hasExtensionInstalled: () => Promise.resolve(isReady),
      };
    },
  };
};
