import { metadata_CoinbaseWallet } from '@ant-design/web3-assets';
import { type Wallet } from '@ant-design/web3-common';

import type { EthereumWallet } from '../interface';

export const CoinbaseWallet: EthereumWallet = (metadata) => {
  return {
    connectors: ['Coinbase Wallet'],
    create: (): Wallet => {
      return {
        ...metadata_CoinbaseWallet,
        hasWalletReady: async () => {
          return true;
        },
        ...metadata,
      };
    },
  };
};
