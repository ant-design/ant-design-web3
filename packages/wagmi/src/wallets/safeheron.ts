import { metadata_Safeheron } from '@ant-design/web3-assets';
import { type Wallet } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

import type { EthereumWallet } from '../interface';

export const SafeheronWallet: EthereumWallet = (metadata) => {
  return {
    connectors: ['Safeheron'],
    create: (connectors?: readonly Connector[]): Wallet => {
      return {
        ...metadata_Safeheron,
        hasWalletReady: async () => {
          return !!(await connectors?.[0]?.getProvider());
        },
        hasExtensionInstalled: async () => {
          return !!(await connectors?.[0]?.getProvider());
        },
        ...metadata,
      };
    },
  };
};
