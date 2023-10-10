import { EIP1193LikeProvider, WalletProviderFactory } from '../types';

export class WalletConnectProviderFactory implements WalletProviderFactory {
  create = async (): Promise<EIP1193LikeProvider> => {
    throw new Error('Method not implemented.');
  };
}
