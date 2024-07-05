import type { Wallet } from '@ant-design/web3-common';
import { type WalletInfo } from '@tonconnect/sdk';

export type TonBasicWallet = {
  appName: string;
};

export type WalletWithBridge = Wallet & WalletInfo;

export type TonWalletMetadata = WalletInfo & {
  universalUrl: string;
  bridgeUrl: string;
};

export interface WalletFactory {
  create: () => WalletWithBridge;
}
