import {
  metadata_CoinbaseWallet,
  metadata_imToken,
  metadata_MetaMask,
  metadata_OkxWallet,
  metadata_Phantom,
  metadata_Safeheron,
  metadata_TokenPocket,
} from '@ant-design/web3-assets';
import type { WalletMetadata } from '@ant-design/web3-common';

import { UniversalWallet } from './universal-wallet';

export const MetaMask = (metadata?: WalletMetadata) => {
  const wallet = new UniversalWallet({
    ...metadata_MetaMask,
    ...metadata,
  });
  return wallet;
};

export const OkxWallet = (metadata?: WalletMetadata) => {
  const wallet = new UniversalWallet({
    ...metadata_OkxWallet,
    ...metadata,
  });
  return wallet;
};

export const CoinbaseWallet = (metadata?: WalletMetadata) => {
  const wallet = new UniversalWallet({
    ...metadata_CoinbaseWallet,
    ...metadata,
  });
  return wallet;
};

export const ImTokenWallet = (metadata?: WalletMetadata) => {
  const wallet = new UniversalWallet({
    ...metadata_imToken,
    ...metadata,
  });
  return wallet;
};

export const PhantomWallet = (metadata?: WalletMetadata) => {
  const wallet = new UniversalWallet({
    ...metadata_Phantom,
    ...metadata,
  });
  return wallet;
};

export const SafeheronWallet = (metadata?: WalletMetadata) => {
  const wallet = new UniversalWallet({
    ...metadata_Safeheron,
    ...metadata,
  });
  return wallet;
};

export const TokenPocketWallet = (metadata?: WalletMetadata) => {
  const wallet = new UniversalWallet({
    ...metadata_TokenPocket,
    ...metadata,
  });
  return wallet;
};
