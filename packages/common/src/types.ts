export interface Account {
  address: string;
}

// TODO: remve Chains, use chains
export enum Chains {
  EthereumMainnet = 'https://etherscan.io/address/',
  bitcoin = 'bitcoin:',
}

export interface Chain {
  id: number;
  name: string;
  rpcHttpUrl?: string;
  blockExplorerUrl?: string;
  nativeCurrency?: {
    decimals: number;
    name: string;
    symbol: string;
  };
}

export enum Wallets {
  MetaMask = 'MetaMask',
  WalletConnect = 'WalletConnect',
}

export interface NFTMetadata {
  name?: string;
  description?: string;
  image?: string;
  dna?: string;
  edition?: number;
  date?: number;
  attributes?: {
    trait_type?: string;
    value?: string;
  }[];
  compiler?: string;
}

export enum UniversalWeb3ProviderEventType {
  AccountsChanged = 'accountsChanged',
}

export interface UniversalWeb3ProviderInterface {
  getAccounts: () => Promise<Account[]>;
  getCurrentAccount: () => Promise<Account | undefined>;
  requestAccounts: (wallet?: Wallets) => Promise<Account[]>;
  getQrCodeLink: () => Promise<string>;
  getNFTMetadata: (address: string, id: number) => Promise<NFTMetadata>;
  disconnect: () => Promise<void>;
  on: (type: UniversalWeb3ProviderEventType, handler: (params?: any) => void) => void;
  off: (type: UniversalWeb3ProviderEventType, handler: (params?: any) => void) => void;
  chain?: Chains;
}

/**
 * This interface is a subset of the EIP-1193 provider interface.
 * See: https://eips.ethereum.org/EIPS/eip-1193
 */
export interface EIP1193LikeProvider {
  request: (request: { method: string; params?: any }) => Promise<any>;
  // connect and disconnect for WallectConnect
  connect?: () => Promise<void>;
  disconnect?: () => Promise<void>;
}

export interface WalletProviderOptions {
  projectId?: string;
}

export interface EIP1193LikeProviderFactory {
  create: (options?: WalletProviderOptions) => Promise<EIP1193LikeProvider>;
}

export interface WalletProvider extends EIP1193LikeProviderFactory {}

export interface JsonRpcProvider extends EIP1193LikeProviderFactory {
  getRpcUrl: (chain: Chains) => string;
}
