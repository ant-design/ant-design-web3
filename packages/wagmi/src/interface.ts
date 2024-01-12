import type { Wallet, WalletMetadata } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

export interface WalletUseInWagmiAdapter extends Wallet {
  getWagmiConnector?: () => Promise<Connector | undefined>;
}

export type EthereumWallet = (metadata?: Partial<WalletMetadata>) => WalletFactory;

export interface WalletFactory {
  connectors: Connector['name'][];
  create: (connector?: readonly Connector[]) => WalletUseInWagmiAdapter;
}
