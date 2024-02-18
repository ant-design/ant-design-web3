import type { Wallet, WalletMetadata } from '@ant-design/web3-common';
import type { Adapter } from '@solana/wallet-adapter-base';

export type WalletFactoryBuilder = (
  adapter: Adapter,
  walletMetadata: WalletMetadata,
) => WalletFactory;

export interface WalletUseInSolanaAdapter extends Wallet {
  adapter: Adapter;
}

export interface WalletFactory {
  adapter: Adapter;
  create: () => WalletUseInSolanaAdapter;
}
