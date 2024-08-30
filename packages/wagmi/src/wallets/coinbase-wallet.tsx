import { metadata_CoinbaseWallet } from '@ant-design/web3-assets';
import { type Wallet, type WalletMetadata } from '@ant-design/web3-common';
import { coinbaseWallet, type CoinbaseWalletParameters } from 'wagmi/connectors';

import { WalletFactory } from '../interface';

export const CoinbaseWallet: (
  metadata?: Partial<WalletMetadata>,
  coinbaseConfig?: CoinbaseWalletParameters,
) => WalletFactory = (metadata, coinbaseConfig) => {
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
    createWagmiConnector: () => {
      return coinbaseWallet(coinbaseConfig);
    },
  };
};
