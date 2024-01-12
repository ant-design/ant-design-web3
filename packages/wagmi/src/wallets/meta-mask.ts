import { metadata_MetaMask } from '@ant-design/web3-assets';
import { type Wallet } from '@ant-design/web3-common';

import type { EthereumWallet } from '../interface';

export const MetaMask: EthereumWallet = (metadata) => {
  return {
    connectors: ['MetaMask'],
    create: (): Wallet => {
      return {
        ...metadata_MetaMask,
        hasWalletReady: async () => {
          return !!window.ethereum?.isMetaMask;
        },
        hasExtensionInstalled: async () => {
          return !!window.ethereum?.isMetaMask;
        },
        ...metadata,
      };
    },
  };
};
