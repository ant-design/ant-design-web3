import type { Wallet } from '@ant-design/web3-common';
import { WalletReadyState } from '@solana/wallet-adapter-base';

import type {
  AdapterWallet,
  MetaMaskSnapWalletFactory as MetaMaskSnapWalletFactoryType,
  StandardWallet,
  WalletConnectWallet,
  WalletFactory as WalletFactoryType,
} from './wallets/types';

export const hasWalletReady = (readyState?: WalletReadyState) =>
  readyState === WalletReadyState.Installed || readyState === WalletReadyState.Loadable;

export const isMetaMaskSnapWalletFactory = (
  factory: WalletFactoryType,
): factory is MetaMaskSnapWalletFactoryType => {
  return (factory as MetaMaskSnapWalletFactoryType).isMetaMaskSnap === true;
};

export const isStandardWallet = (wallet: Wallet): wallet is StandardWallet => {
  return (wallet as StandardWallet).isStandardWallet === true;
};

export const isAdapterWallet = (wallet: Wallet): wallet is AdapterWallet => {
  return (wallet as AdapterWallet).adapter !== undefined;
};

export const isWalletConnectWallet = (wallet: Wallet): wallet is WalletConnectWallet => {
  return (wallet as WalletConnectWallet).isWalletConnect !== undefined;
};
