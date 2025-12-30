import type { WalletMetadata } from '@ant-design/web3-common';

import type { IcpWallet } from './types';

export interface IcpWalletFactory {
  create: () => IcpWallet;
}

export type IcpWalletFactoryBuilder = (
  createWallet: () => IcpWallet,
  metadata: WalletMetadata,
) => IcpWalletFactory;

export const WalletFactory: IcpWalletFactoryBuilder = (createWallet, metadata) => {
  return {
    create: () => {
      const wallet = createWallet();
      return {
        ...wallet,
        name: metadata.name,
        icon: metadata.icon ?? wallet.icon,
      };
    },
  };
};
