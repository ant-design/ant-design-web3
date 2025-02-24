import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import type { Locale, Wallet } from '@ant-design/web3-common';

import { type BitcoinWallet } from '../adapter';
import { BitcoinAdapterContext, useBitcoinWallet } from '../adapter/useBitcoinWallet';
import type { WalletFactory, WalletWithAdapter } from '../wallets/types';
import { useLatestWallet } from '../wallets/useLatestWallet';
import { BitcoinConfigProvider } from './config-provider';

export interface BitcoinWeb3ConfigProviderProps {
  wallets?: WalletFactory[];
  locale?: Locale;
  balance?: boolean;
  autoConnect?: boolean;
}

export const BitcoinWeb3ConfigProvider: FC<PropsWithChildren<BitcoinWeb3ConfigProviderProps>> = ({
  children,
  wallets: initWallets = [],
  balance = false,
  locale,
  autoConnect,
}) => {
  const [adapter, setAdapter] = useState<BitcoinWallet>({} as BitcoinWallet);
  const [wallets, setWallets] = useState<WalletWithAdapter[]>([]);
  const { name: adapterName } = useBitcoinWallet();

  const { latestWalletNameRef, cacheSelectedWallet } = useLatestWallet();

  useEffect(() => {
    if (initWallets.length === 0) return;
    setWallets(initWallets.map((w) => w.create()));
  }, [initWallets]);

  const selectWallet = async (wallet?: Wallet | null) => {
    if (!wallet) {
      // disconnect
      if (adapter) setAdapter({} as BitcoinWallet);
      cacheSelectedWallet();
      return;
    }

    const provider = wallets.find((w) => w.name === wallet.name)?.adapter;
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
    <BitcoinAdapterContext.Provider value={adapter}>
      <BitcoinConfigProvider
        selectWallet={selectWallet}
        wallets={wallets}
        balance={balance}
        locale={locale}
      >
        {children}
      </BitcoinConfigProvider>
    </BitcoinAdapterContext.Provider>
  );
};
