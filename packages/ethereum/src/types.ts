import type { Chain, Wallet, WalletMetadata } from '@ant-design/web3-common';
/**
 * This interface is a subset of the EIP-1193 provider interface.
 * See: https://eips.ethereum.org/EIPS/eip-1193
 */
export interface EIP1193LikeProvider {
  request: (request: { method: string; params?: any }) => Promise<any>;
  // connect and disconnect for WallectConnect
  connect?: () => Promise<void>;
  disconnect?: () => Promise<void>;
  networkVersion?: string;
}

export interface WalletProviderOptions {
  chains?: Chain[];
}

export interface EthereumWallet extends Wallet, EIP1193IncludeProvider {
  provider?: EIP1193LikeProvider;
}

export interface EIP1193IncludeProvider {
  provider?: EIP1193LikeProvider;
}

export interface EIP1193IncludeProviderFactory {
  create: (options?: WalletProviderOptions) => Promise<EIP1193IncludeProvider>;
}

export interface WalletProvider extends EIP1193IncludeProviderFactory {
  metadata: WalletMetadata;
  create: (options?: WalletProviderOptions) => Promise<EthereumWallet>;
}

export interface JsonRpcProvider extends EIP1193IncludeProviderFactory {
  getRpcUrl: (chain: Chain) => string;
}
