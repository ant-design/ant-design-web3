import type {
  Chain,
  ConnectOptions,
  UniversalEIP6963Config,
  Wallet,
  WalletMetadata,
} from '@ant-design/web3-common';
import type { Chain as WagmiChain } from 'viem';
import type { CreateSiweMessageParameters } from 'viem/siwe';
import type { Connector, CreateConnectorFn } from 'wagmi';

export interface WalletUseInWagmiAdapter extends Wallet {
  getWagmiConnector?: (options?: ConnectOptions) => Promise<Connector | undefined>;
}

export type EthereumWallet = (metadata?: Partial<WalletMetadata>) => WalletFactory;

export interface CreateWalletOptions {
  useWalletConnectOfficialModal?: boolean;
}

export interface WalletFactory {
  name?: string;
  connectors: Connector['name'][];
  create: (
    connector?: readonly Connector[],
    options?: CreateWalletOptions,
  ) => WalletUseInWagmiAdapter;
  createWagmiConnector?: () => CreateConnectorFn;
}

export type EIP6963Config = boolean | UniversalEIP6963Config;

export type ChainAssetWithWagmiChain = Chain & { wagmiChain?: WagmiChain };

export interface SIWEConfig {
  getNonce: (address: string, chainId?: number) => Promise<string>;
  createMessage: (args: CreateSiweMessageParameters) => string;
  verifyMessage: (message: string, signature: string) => Promise<boolean>;
}
