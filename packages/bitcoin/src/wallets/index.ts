import { metadata_Leather, metadata_Unisat, metadata_Xverse } from '@ant-design/web3-assets';
import type { Wallet } from '@ant-design/web3-common';
import { getProviders } from 'sats-connect';

export const UnisatWallet: () => Wallet = () => {
  return {
    ...metadata_Unisat,
    // @ts-ignore
    hasExtensionInstalled: () => Promise.resolve(!!window.unisat),
    hasWalletReady: () => Promise.resolve(true),
  };
};

export const XverseWallet: () => Wallet = () => {
  const providers = getProviders();
  // 可能有其他钱包，暂不考虑
  const xverseProvider = providers.find(({ id }) => id === 'XverseProviders.BitcoinProvider');
  return {
    ...metadata_Xverse,
    hasExtensionInstalled: () => Promise.resolve(!!xverseProvider),
    hasWalletReady: () => Promise.resolve(true),
  };
};

export const LeatherWallet: () => Wallet = () => {
  return {
    ...metadata_Leather,
    // @ts-ignore
    hasExtensionInstalled: () => Promise.resolve(!!window.LeatherProvider),
    hasWalletReady: () => Promise.resolve(true),
  };
};
