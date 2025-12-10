import { useEffect, useRef } from 'react';

const LATEST_WALLET_STORAGE_KEY = 'ANT_DESIGN_WEB3_LEDGER_LATEST_WALLET';

export const useLatestWallet = () => {
  const latestWalletNameRef = useRef<string>();

  useEffect(() => {
    const latestWallet = localStorage.getItem(LATEST_WALLET_STORAGE_KEY);
    if (latestWallet) {
      latestWalletNameRef.current = latestWallet;
    }
  }, []);

  const cacheSelectedWallet = (walletName?: string) => {
    if (walletName) {
      localStorage.setItem(LATEST_WALLET_STORAGE_KEY, walletName);
      latestWalletNameRef.current = walletName;
    } else {
      localStorage.removeItem(LATEST_WALLET_STORAGE_KEY);
      latestWalletNameRef.current = undefined;
    }
  };

  return {
    latestWalletNameRef,
    cacheSelectedWallet,
  };
};
