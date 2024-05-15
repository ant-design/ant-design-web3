import type { Wallet, WalletMetadata } from '@ant-design/web3-common';

import { BitcoinWallet, XverseBitcoinWallet } from '../adapter';

export interface WalletWithAdapter extends Wallet {
  adapter: BitcoinWallet;
}

export interface WalletFactory {
  create: () => WalletWithAdapter;
}

export type WalletFactoryBuilder = (
  adapter: typeof XverseBitcoinWallet,
  metadata: WalletMetadata,
) => WalletFactory;
