import type { Wallet, WalletMetadata } from '@ant-design/web3-common';

export interface WalletFactory {
  create: () => Wallet;
}

export type WalletFactoryBuilder = (metadata: WalletMetadata) => WalletFactory;
