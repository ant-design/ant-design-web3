import { metadata_Safeheron } from '@ant-design/web3-assets';
import { type Wallet } from '@ant-design/web3-common';

import type { WalletFactory } from '../interface';

export const SafeheronWallet: WalletFactory = {
  name: 'Safeheron',
  create: (connector): Wallet => {
    return {
      ...metadata_Safeheron,
      hasWalletReady: async () => {
        return !!connector?.ready;
      },
    };
  },
};
