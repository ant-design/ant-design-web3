export interface Account {
  address: string;
}

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

export interface Web3ProviderInterface {
  getAccounts: () => Promise<Account[]>;
  getCurrentAccount: () => Promise<Account | undefined>;
  requestAccounts: (wallet?: Wallets) => Promise<Account[]>;
  getQrCodeLink: () => Promise<string>;
  getNFTMetadata: (address: string, id: number) => Promise<NFTMetadata>;
  chain?: Chains;
}

/**
 * This interface is a subset of the EIP-1193 provider interface.
 * See: https://eips.ethereum.org/EIPS/eip-1193
 *
 * `typeof window.aldaba`
 */
export interface EIP1193LikeProvider {
  request: (request: { method: string; params?: any }) => Promise<any>;
}

export interface WalletProviderOptions {
  walletConnectProjectId?: string;
}

export interface WalletProviderFactory {
  create: (options?: WalletProviderOptions) => Promise<EIP1193LikeProvider>;
}

export interface JsonRpcProvider {
  getRpcUrl: (chain: Chains) => string;
}
