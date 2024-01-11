import { metadata_Safeheron } from '@ant-design/web3-assets';
import { type Wallet } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

import type { WalletFactory } from '../interface';

export const SafeheronWallet: WalletFactory = {
  name: 'Safeheron',
  create: (connector): Wallet => {
    return {
      ...metadata_Safeheron,
      hasWalletReady: async () => {
        return !!(await (connector as Connector)?.getProvider());
      },
      hasExtensionInstalled: async () => {
        return !!(await (connector as Connector)?.getProvider());
      },
    };
  },
};
