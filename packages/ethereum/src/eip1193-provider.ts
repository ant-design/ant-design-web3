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
  getQrCodeLink?: (wallet: string) => Promise<string>;
}

const debug = createDebug('eip1193-provider');

const wallectsMethods = ['eth_requestAccounts', 'eth_accounts'];

export class EthereumProvider implements EIP1193LikeProvider {
  constructor(private options: CreateProviderOptions) {}

  rpcProvders: EIP1193LikeProvider[] | undefined = undefined;
  walletProviders: EIP1193LikeProvider[] | undefined = undefined;
  useWallet: string | undefined;

  getWalletProvider = async (): Promise<EIP1193LikeProvider | undefined> => {
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
    if (!this.walletProviders || this.walletProviders.length === 0) {
      return undefined;
    }

    if (this.useWallet) {
      const useProviderIndex = wallets?.findIndex((item) => item.metadata.name === this.useWallet);
      if (useProviderIndex !== undefined && useProviderIndex >= 0) {
        return this.walletProviders[useProviderIndex];
      }
    }
    return this.walletProviders[0];
  };

  getRpcProvider = async (index = 0): Promise<EIP1193LikeProvider | undefined> => {
    const { rpcs } = this.options;
    if (!this.rpcProvders) {
      this.rpcProvders = await Promise.all((rpcs || []).map((rpc) => rpc.create()));
    }
    if (!this.rpcProvders || this.rpcProvders.length <= index) {
      return undefined;
    }
    return this.rpcProvders[index];
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

  get wallets(): WalletMetadata[] {
    return this.options.wallets?.map((wallet) => wallet.metadata) || [];
  }

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

  getQrCodeLink = async (walletName: string): Promise<string> => {
    const wallet = this.options.wallets?.find((item) => item.metadata.name === walletName);
    if (!wallet) {
      throw new Error('No wallet provider found');
    }
    if (wallet.getQrCodeLink) {
      return wallet.getQrCodeLink();
    }
    throw new Error('No getQrCodeLink method found');
  };
}

export function createProvider(options: CreateProviderOptions): EthereumProvider {
  if (options?.chains?.length && options?.chains?.length > 1) {
    throw new Error('Not support multiple chains now.');
  }
  return new EthereumProvider(options);
}
