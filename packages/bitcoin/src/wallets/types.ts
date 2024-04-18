import type { Wallet, WalletMetadata } from '@ant-design/web3-common';

import type { BitcoinWallet } from '../adapter';

export interface WalletWithAdapter extends Wallet {
  adapter: BitcoinWallet;
}

export interface WalletFactory {
  adapter: BitcoinWallet;
  create: () => WalletWithAdapter;
}

export type WalletFactoryBuilder = (
  adapter: BitcoinWallet,
  metadata: WalletMetadata,
) => WalletFactory;
