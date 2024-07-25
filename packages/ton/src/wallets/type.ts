import type { Wallet, WalletMetadata } from '@ant-design/web3-common';
import type { WalletInfo } from '@tonconnect/sdk';

export type TonBasicWallet = TonWalletMetadata &
  WalletInfo & {
    universalLink?: string;
  };

export type TonWallet = Wallet & WalletInfo;

export interface WalletFactory {
  create: () => TonWallet;
}

export type TonWalletMetadata = Omit<WalletMetadata, 'name' | 'remark'>;
