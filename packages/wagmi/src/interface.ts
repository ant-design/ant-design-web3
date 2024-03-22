import type {
  ConnectOptions,
  UniversalEIP6963Config,
  Wallet,
  WalletMetadata,
} from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

export interface WalletUseInWagmiAdapter extends Wallet {
  getWagmiConnector?: (options?: ConnectOptions) => Promise<Connector | undefined>;
}

export type EthereumWallet = (metadata?: Partial<WalletMetadata>) => WalletFactory;

export interface WalletFactory {
  connectors: Connector['name'][];
  create: (connector?: readonly Connector[]) => WalletUseInWagmiAdapter;
}

export type WagmiEIP6963Config = boolean | UniversalEIP6963Config;
