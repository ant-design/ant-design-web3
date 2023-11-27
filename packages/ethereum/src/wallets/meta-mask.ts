import type { WalletMetadata } from '@ant-design/web3-common';
import { metadata_MetaMask } from '@ant-design/web3-assets';
import type { EthereumWallet, WalletProvider } from '../types';

export class MetaMaskProvider implements WalletProvider {
  metadata: WalletMetadata = metadata_MetaMask;

  create = async (): Promise<EthereumWallet> => {
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }
    return {
      provider: window.ethereum,
      ...this.metadata,
    };
  };

  hasBrowserExtensionInstalled = async (): Promise<boolean> => {
    return window.ethereum && window.ethereum?.isMetaMask ? true : false;
  };
}
