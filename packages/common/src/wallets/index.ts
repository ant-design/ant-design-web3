export * from './meta-mask';
import { Wallets, WalletProviderFactory } from '../types';
import { MetaMaskProviderFactory } from './meta-mask';
import { WalletConnectProviderFactory } from './wallet-connect';

export * from './meta-mask';
export * from './wallet-connect';

export function getWalletProviderFactory(wallet: Wallets): WalletProviderFactory {
  if (wallet === Wallets.MetaMask) {
    return new MetaMaskProviderFactory();
  }
  if (wallet === Wallets.WalletConnect) {
    return new WalletConnectProviderFactory();
  }
  throw new Error(`Wallet ${wallet} is not supported`);
}
