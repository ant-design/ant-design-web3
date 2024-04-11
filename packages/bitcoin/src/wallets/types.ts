import type { Wallet, WalletMetadata } from '@ant-design/web3-common';

import type { Adapter } from '../adapter';

export interface BitcoinWallet extends Wallet {
  adapter: Adapter;
}

export interface WalletFactory {
  adapter: Adapter;
  create: () => BitcoinWallet;
}

export type WalletFactoryBuilder = (adapter: Adapter, metadata: WalletMetadata) => WalletFactory;
