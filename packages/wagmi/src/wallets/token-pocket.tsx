import { metadata_TokenPocket } from '@ant-design/web3-assets';
import { type Wallet } from '@ant-design/web3-common';

import type { WalletFactory } from '../interface';

export const TokenPocket: WalletFactory = {
  name: 'TokenPocket',
  create: (): Wallet => {
    return {
      ...metadata_TokenPocket,
      hasWalletReady: async () => {
        return true;
      },
    };
  },
};
