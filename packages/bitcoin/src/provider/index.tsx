import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import type { Locale, Wallet } from '@ant-design/web3-common';

import { type BitcoinWallet } from '../adapter';
import { BitcoinAdapterContext } from '../adapter/useBitcoinWallet';
import type { WalletFactory, WalletWithAdapter } from '../wallets/types';
import { BitcoinConfigProvider } from './config-provider';

export interface BitcoinWeb3ConfigProviderProps {
  wallets?: WalletFactory[];
  locale?: Locale;
  balance?: boolean;
}

export const BitcoinWeb3ConfigProvider: FC<PropsWithChildren<BitcoinWeb3ConfigProviderProps>> = ({
  children,
  wallets: initWallets = [],
  balance = false,
  locale,
}) => {
  const [adapter, setAdapter] = useState<BitcoinWallet>({} as BitcoinWallet);
  const [wallets, setWallets] = useState<WalletWithAdapter[]>([]);

  useEffect(() => {
    if (initWallets.length === 0) return;
    setWallets(initWallets.map((w) => w.create()));
  }, [initWallets]);

  const selectWallet = async (wallet?: Wallet | null) => {
    if (!wallet) {
      // disconnect
      if (!!adapter) setAdapter({} as BitcoinWallet);
      return;
    }
    const provider = wallets.find((w) => w.name === wallet.name)?.adapter;
    await provider?.connect();
    // @ts-ignore provider is not undefined
    setAdapter(provider);
  };

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
