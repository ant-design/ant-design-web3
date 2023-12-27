import { type Wallet } from '@ant-design/web3-common';
import { metadata_TokenpocketWallet } from '@ant-design/web3-assets';
import type { WalletFactory } from '../interface';

export const TokenpocketWallet: WalletFactory = {
  name: 'TokenPocket Wallet',
  create: (): Wallet => {
    return {
      ...metadata_TokenpocketWallet,
      hasWalletReady: async () => {
        return true;
      },
    };
  },
};
