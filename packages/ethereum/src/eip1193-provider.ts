import {
  EIP1193LikeProvider,
  JsonRpcProvider,
  WalletProvider,
  Chain,
} from '@ant-design/web3-common';
import { createDebug } from './utils';

export interface CreateProviderOptions {
  rpcs?: JsonRpcProvider[];
  wallets?: WalletProvider[];
  chains?: Chain[];
}

const debug = createDebug('eip1193-provider');

const wallectsMethods = ['eth_requestAccounts', 'eth_accounts', 'eth_chainId'];

export function createProvider(options: CreateProviderOptions): EIP1193LikeProvider {
  let rpcProvders: EIP1193LikeProvider[];
  let walletProviders: EIP1193LikeProvider[];

  const getWalletProvider = async (): Promise<EIP1193LikeProvider | undefined> => {
    const { wallets } = options;
    if (!walletProviders) {
      walletProviders = await Promise.all((wallets || []).map((wallet) => wallet.create()));
    }
    // TODO support multiple provider
    if (!walletProviders || walletProviders.length === 0) {
      return undefined;
    }
    return walletProviders[0];
  };

  const getRpcProvider = async (): Promise<EIP1193LikeProvider | undefined> => {
    const { rpcs } = options;
    if (!rpcProvders) {
      rpcProvders = await Promise.all((rpcs || []).map((rpc) => rpc.create()));
    }
    // TODO support multiple provider
    if (!rpcProvders || rpcProvders.length === 0) {
      return undefined;
    }
    return rpcProvders[0];
  };

  const request = async (requestParams: { method: string; params?: any }) => {
    debug('request', requestParams);
    const { method } = requestParams;
    const rpcProvider = await getRpcProvider();
    const walletProvider = await getWalletProvider();
    if (!rpcProvider && !walletProvider) {
      throw new Error('No provider found');
    }
    if (wallectsMethods.includes(method)) {
      if (!walletProvider) {
        throw new Error('No wallet provider found');
      }
      return walletProvider.request(requestParams);
    } else {
      if (!rpcProvider) {
        throw new Error('No rpc provider found');
      }
      return rpcProvider.request(requestParams);
    }
  };

  return {
    request,
    connect: async () => {
      const walletProvider = await getWalletProvider();
      if (walletProvider) {
        await walletProvider?.connect?.();
      }
    },
    disconnect: async () => {
      // TODO: disconnect for MetaMask
      const walletProvider = await getWalletProvider();
      if (walletProvider) {
        await walletProvider?.disconnect?.();
      }
    },
  };
}
