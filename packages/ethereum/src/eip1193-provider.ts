import {
  EIP1193LikeProvider,
  JsonRpcProvider,
  WalletProvider,
  Chain,
  WalletMetadata,
} from '@ant-design/web3-common';
import { createDebug } from './utils';

export interface CreateProviderOptions {
  rpcs?: JsonRpcProvider[];
  wallets?: WalletProvider[];
  chains?: Chain[];
}

const debug = createDebug('eip1193-provider');

const wallectsMethods = ['eth_requestAccounts', 'eth_accounts', 'eth_chainId'];

export interface EthereumProvider extends EIP1193LikeProvider {
  wallets: WalletMetadata[];
  updateUseWallet: (wallet?: string) => void;
}

export function createProvider(options: CreateProviderOptions): EthereumProvider {
  let rpcProvders: EIP1193LikeProvider[];
  let walletProviders: EIP1193LikeProvider[];
  let useWallet: string | undefined;

  const getWalletProvider = async (): Promise<EIP1193LikeProvider | undefined> => {
    const { wallets } = options;
    if (!walletProviders) {
      walletProviders = await Promise.all((wallets || []).map((wallet) => wallet.create()));
    }
    if (!walletProviders || walletProviders.length === 0) {
      return undefined;
    }
    if (useWallet) {
      const useProviderIndex = wallets?.findIndex((item) => item.metadata.name === useWallet);
      if (useProviderIndex !== undefined && useProviderIndex >= 0) {
        return walletProviders[useProviderIndex];
      }
    }
    return walletProviders[0];
  };

  const getRpcProvider = async (index = 0): Promise<EIP1193LikeProvider | undefined> => {
    const { rpcs } = options;
    if (!rpcProvders) {
      rpcProvders = await Promise.all((rpcs || []).map((rpc) => rpc.create()));
    }
    if (!rpcProvders || rpcProvders.length <= index) {
      return undefined;
    }
    return rpcProvders[index];
  };

  const request = async (
    requestParams: { method: string; params?: any },
    retryTimes = 0,
  ): Promise<any> => {
    debug('request', requestParams);
    const { method } = requestParams;

    if (wallectsMethods.includes(method)) {
      const walletProvider = await getWalletProvider();
      if (!walletProvider) {
        throw new Error('No wallet provider found');
      }
      return walletProvider.request(requestParams);
    } else {
      const rpcProvider = await getRpcProvider(retryTimes);
      if (!rpcProvider) {
        throw new Error('No rpc provider found');
      }
      try {
        const result = rpcProvider.request(requestParams);
        return result;
      } catch (err) {
        if (retryTimes >= rpcProvders.length) {
          // when retryTimes is 1, rpcProvders length must large then 1
          throw err;
        }
        return request(requestParams, retryTimes + 1);
      }
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
    wallets: options.wallets?.map((wallet) => wallet.metadata) || [],
    updateUseWallet: (wallet?: string) => {
      useWallet = wallet;
    },
  };
}
