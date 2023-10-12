import { EIP1193LikeProvider, WalletProvider } from '../types';

export class MetaMaskProvider implements WalletProvider {
  create = async (): Promise<EIP1193LikeProvider> => {
    // @ts-ignore
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }
    // @ts-ignore
    return window.ethereum;
  };
}
