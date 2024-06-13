import { useState } from 'react';

export const LATEST_WALLET_STORAGE_KEY = '@ant-design/web3-bitcoin:latest-wallet';

export const useLatestWallet = () => {
  const latestWalletNameRef = React.useRef<string | undefined>();
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      latestWalletNameRef.current = window.localStorage.getItem(LATEST_WALLET_STORAGE_KEY);
    }
  }, []);

  const cacheSelectedWallet = (walletName?: string) => {
   latestWalletNameRef.current = walletName;

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
