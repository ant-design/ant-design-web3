import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import type { Locale, Wallet } from '@ant-design/web3-common';

import { LedgerAdapterContext, useLedgerWallet } from '../adapter/useLedgerWallet';
import type { LedgerWallet, WalletFactory, WalletWithAdapter } from '../types';
import { useLatestWallet } from '../wallets/useLatestWallet';
import { LedgerConfigProvider } from './config-provider';

export interface LedgerWeb3ConfigProviderProps {
  wallets?: WalletFactory[];
  locale?: Locale;
  balance?: boolean;
  autoConnect?: boolean;
}

export const LedgerWeb3ConfigProvider: FC<PropsWithChildren<LedgerWeb3ConfigProviderProps>> = ({
  children,
  wallets: initWallets = [],
  balance = false,
  locale,
  autoConnect,
}) => {
  const [adapter, setAdapter] = useState<LedgerWallet>({} as LedgerWallet);
  const [wallets, setWallets] = useState<WalletWithAdapter[]>([]);
  const { name: adapterName } = useLedgerWallet();

  const { latestWalletNameRef, cacheSelectedWallet } = useLatestWallet();

  useEffect(() => {
    if (initWallets.length === 0) return;
    setWallets(initWallets.map((w) => w.create()));
  }, [initWallets]);

  const selectWallet = async (wallet?: Wallet | null) => {
    if (!wallet) {
      // disconnect
      if (adapter) setAdapter({} as LedgerWallet);
      cacheSelectedWallet();
      return;
    }

    const walletWithAdapter = wallets.find((w) => w.name === wallet.name);
    const provider = walletWithAdapter?.adapter;
    await provider?.connect();
    // @ts-ignore provider is not undefined
    setAdapter(provider);
    cacheSelectedWallet(wallet.name);
  };

  // auto connect
  useEffect(() => {
    if (autoConnect && latestWalletNameRef.current && !adapterName) {
      const wallet = wallets.find((w) => w.name === latestWalletNameRef.current);
      if (wallet) {
        selectWallet(wallet);
      }
    }
  }, [wallets]);

  return (
    <LedgerAdapterContext.Provider value={adapter}>
      <LedgerConfigProvider
        selectWallet={selectWallet}
        wallets={wallets}
        balance={balance}
        locale={locale}
      >
        {children}
      </LedgerConfigProvider>
    </LedgerAdapterContext.Provider>
  );
};
