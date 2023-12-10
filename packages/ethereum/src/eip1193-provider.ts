import type { Chain } from '@ant-design/web3-common';
import type {
  EIP1193LikeProvider,
  EIP1193IncludeProvider,
  JsonRpcProvider,
  WalletProvider,
  EthereumWallet,
} from './types';
import { createDebug } from './utils';

export interface CreateProviderOptions {
  rpcs?: JsonRpcProvider[];
  wallets?: WalletProvider[];
  chains?: Chain[];
}

const debug = createDebug('eip1193-provider');

const wallectsMethods = ['eth_requestAccounts', 'eth_accounts'];

export class EthereumEIP1193LikeProvider implements EIP1193LikeProvider {
  constructor(private options: CreateProviderOptions) {}

  private rpcProvders: EIP1193IncludeProvider[] | undefined = undefined;
  private walletProviders: EthereumWallet[] | undefined = undefined;
  private useWallet: string | undefined;

  private getAllWallet = async (): Promise<EthereumWallet[]> => {
    const { wallets } = this.options;
    if (!this.walletProviders) {
      this.walletProviders = await Promise.all(
        (wallets || []).map((wallet) =>
          wallet.create({
            chains: this.options.chains,
          }),
        ),
      );
    }
    return this.walletProviders || [];
  };

  private getWalletProvider = async (): Promise<EIP1193LikeProvider | undefined> => {
    await this.getAllWallet();
    const { wallets } = this.options;
    if (!this.walletProviders || this.walletProviders.length === 0) {
      return undefined;
    }

    if (this.useWallet) {
      const useProviderIndex = wallets?.findIndex((item) => item.metadata.name === this.useWallet);
      if (useProviderIndex !== undefined && useProviderIndex >= 0) {
        return this.walletProviders[useProviderIndex].provider;
      }
    }
    return this.walletProviders[0].provider;
  };

  private getRpcProvider = async (index = 0): Promise<EIP1193LikeProvider | undefined> => {
    const { rpcs } = this.options;
    if (!this.rpcProvders) {
      this.rpcProvders = await Promise.all((rpcs || []).map((rpc) => rpc.create()));
    }
    if (!this.rpcProvders || this.rpcProvders.length <= index) {
      return undefined;
    }
    return this.rpcProvders[index].provider;
  };

  request = async (
    requestParams: { method: string; params?: any },
    retryTimes = 0,
  ): Promise<any> => {
    debug('request', requestParams);
    const { method } = requestParams;

    if (wallectsMethods.includes(method)) {
      const walletProvider = await this.getWalletProvider();
      if (!walletProvider) {
        throw new Error('No wallet provider found');
      }
      return walletProvider.request(requestParams);
    } else {
      const rpcProvider = await this.getRpcProvider(retryTimes);
      if (!rpcProvider) {
        throw new Error('No rpc provider found');
      }
      try {
        const result = rpcProvider.request(requestParams);
        return result;
      } catch (err) {
        if (this.rpcProvders && retryTimes >= this.rpcProvders.length) {
          // when retryTimes is 1, rpcProvders length must large then 1
          throw err;
        }
        return this.request(requestParams, retryTimes + 1);
      }
    }
  };

  connect = async () => {
    const walletProvider = await this.getWalletProvider();
    if (walletProvider) {
      await walletProvider?.connect?.();
    }
  };

  disconnect = async () => {
    // TODO: disconnect for MetaMask
    const walletProvider = await this.getWalletProvider();
    if (walletProvider) {
      await walletProvider?.disconnect?.();
    }
  };

  getAvailableWallets = async (): Promise<EthereumWallet[]> => {
    await this.getAllWallet();
    return this.walletProviders || [];
  };

  getCurrentNetwork = async (): Promise<number | undefined> => {
    const walletProvider = await this.getWalletProvider();
    if (walletProvider && walletProvider?.networkVersion) {
      return parseInt(walletProvider?.networkVersion);
    }
    // TODO: get from JSONRpc
    return undefined;
  };

  updateUseWallet = (wallet?: string) => {
    this.useWallet = wallet;
  };
}
