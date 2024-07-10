import { metadata_MetaMask } from '@ant-design/web3-assets';
import type { Wallet, WalletMetadata } from '@ant-design/web3-common';

export const defineWallet = (callback: (metadata: WalletMetadata) => Wallet) => callback;

export const metaMask = defineWallet((m) => {
  return {
    ...metadata_MetaMask,
    ...m,
  };
});
