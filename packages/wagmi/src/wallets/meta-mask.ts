import { type Wallet } from '@ant-design/web3-common';
import { metadata_MetaMask } from '@ant-design/web3-assets';
import type { WalletFactory } from '../interface';

export const MetaMask: WalletFactory = {
  name: 'MetaMask',
  create: (): Wallet => {
    return {
      ...metadata_MetaMask,
      hasWalletReady: async () => {
        return !!window.ethereum?.isMetaMask;
      },
    };
  },
};
