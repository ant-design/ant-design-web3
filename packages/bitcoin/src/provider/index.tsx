import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import type { Locale, Wallet } from '@ant-design/web3-common';

import { type Adapter } from '../adapter';
import { BitcoinAdapterContext } from '../adapter/useAdapter';
import { BitcoinWallet, WalletFactory } from '../wallets/types';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface BitcoinWeb3ConfigProviderProps {
  // 钱包显式传入
  wallets?: WalletFactory[];
  locale?: Locale;
}

export const BitcoinWeb3ConfigProvider: FC<PropsWithChildren<BitcoinWeb3ConfigProviderProps>> = ({
  children,
  wallets: initWallets = [],
}) => {
  const [adapter, setAdapter] = useState<Adapter>({} as Adapter);
  const [wallets, setWallets] = useState<BitcoinWallet[]>([]);

  useEffect(() => {
    if (initWallets.length === 0) return;
    setWallets(initWallets.map((w) => w.create()));
  }, [initWallets]);

  const selectWallet = async (wallet?: Wallet | null) => {
    if (!wallet) {
      // disconnect
      if (!!adapter) setAdapter({} as Adapter);
      return;
    }
    const provider = wallets.find((w) => w.name === wallet.name)?.adapter;
    await provider?.connect();
    // @ts-ignore provider is not undefined
    setAdapter(provider);
  };

  return (
    <BitcoinAdapterContext.Provider value={adapter}>
      <AntDesignWeb3ConfigProvider selectWallet={selectWallet} wallets={wallets}>
        {children}
      </AntDesignWeb3ConfigProvider>
    </BitcoinAdapterContext.Provider>
  );
};
