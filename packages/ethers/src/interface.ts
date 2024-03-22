import type {
  ConnectOptions,
  UniversalEIP6963Config,
  Wallet,
  WalletMetadata,
} from '@ant-design/web3-common';
import type { Provider } from 'ethers';

export type EthersEIP6963Config = boolean | UniversalEIP6963Config;

export interface EthersWallet extends Wallet {
  getEthersProvider?: (connectOptions?: ConnectOptions) => Promise<Provider | null>;
}

export interface EthersWalletFactory {
  create: () => EthersWallet;
}

export type EthereumWallet = (metadata?: Partial<WalletMetadata>) => EthersWalletFactory;
