import { EIP1193LikeProvider, WalletProviderFactory } from '../types';

export class MetaMaskProviderFactory implements WalletProviderFactory {
  create = async (): Promise<EIP1193LikeProvider> => {
    // @ts-ignore
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }
    // @ts-ignore
    return window.ethereum;
  };
}
