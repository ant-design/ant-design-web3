import type { Wallet, WalletMetadata } from '@ant-design/web3-common';
import { type WalletInfo } from '@tonconnect/sdk';

export type TonBasicWallet = WalletMetadata &
  WalletInfo & {
    universalLink?: string;
  };

export type TonWallet = Wallet & WalletInfo;

export interface WalletFactory {
  create: () => TonWallet;
}
