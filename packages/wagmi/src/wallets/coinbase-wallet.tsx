import { type Wallet } from '@ant-design/web3-common';
import { metadata_CoinbaseWallet } from '@ant-design/web3-assets';
import type { WalletFactory } from '../interface';

export const CoinbaseWallet: WalletFactory = {
  name: 'Coinbase Wallet',
  create: (): Wallet => {
    return {
      ...metadata_CoinbaseWallet,
      hasWalletReady: async () => {
        return true;
      },
    };
  },
};
