import { useState } from 'react';

export const LATEST_WALLET_STORAGE_KEY = '@ant-design/web3-bitcoin:latest-wallet';

export const useLatestWallet = () => {
  const [latestWalletName, setLatestWalletName] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const latestWallet = window.localStorage.getItem(LATEST_WALLET_STORAGE_KEY);
      return latestWallet;
    }

    return undefined;
  });

  const cacheSelectedWallet = (walletName?: string) => {
    setLatestWalletName(walletName);

    if (typeof window !== 'undefined' && window.localStorage) {
      if (walletName) {
        window.localStorage.setItem(LATEST_WALLET_STORAGE_KEY, walletName);
      } else {
        window.localStorage.removeItem(LATEST_WALLET_STORAGE_KEY);
      }
    }
  };

  return {
    latestWalletName,
    cacheSelectedWallet,
  };
};
