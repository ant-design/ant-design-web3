import React, { useEffect, useRef } from 'react';

export const LATEST_WALLET_STORAGE_KEY = '@ant-design/web3-bitcoin:latest-wallet';

type UseLatestWalletResult = {
  latestWalletNameRef: React.MutableRefObject<string | undefined>;
  cacheSelectedWallet: (walletName?: string) => void;
};

export const useLatestWallet = (): UseLatestWalletResult => {
  const latestWalletNameRef = useRef<string>();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      latestWalletNameRef.current =
        window.localStorage.getItem(LATEST_WALLET_STORAGE_KEY) ?? undefined;
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
    latestWalletNameRef,
    cacheSelectedWallet,
  };
};
