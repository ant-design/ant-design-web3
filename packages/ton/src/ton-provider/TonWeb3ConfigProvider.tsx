import React, { useEffect, type PropsWithChildren } from 'react';
import type { Locale } from '@ant-design/web3-common';
import { WalletInfo } from '@tonconnect/sdk';

import { TonWalletFactory } from '../wallets/factory';
import { TonWalletMetadata, type TonBasicWallet } from '../wallets/type';
import TonConfigProvider from './config-provider';
import TonConnectSdk from './TonConnectSdk';

export const TonConnectorContext = React.createContext<TonConnectSdk | null>(null);

export interface TonWeb3ConfigProviderProps {
  locale?: Locale;
  balance?: boolean;
  wallets?: TonBasicWallet[];
}

export const TonWeb3ConfigProvider: React.FC<PropsWithChildren<TonWeb3ConfigProviderProps>> = ({
  children,
  balance,
  locale,
  wallets,
}) => {
  const [tonConnectSdk, setTonConnectSdk] = React.useState<TonConnectSdk | null>(null);

  const [tonWallets, setTonWallets] = React.useState<WalletInfo[]>([]);

  useEffect(() => {
    if (!tonConnectSdk) {
      setTonConnectSdk(new TonConnectSdk());
    }
  }, [tonConnectSdk]);

  React.useEffect(() => {
    if (tonConnectSdk && wallets?.length) {
      tonConnectSdk.getWallets().then((res) => {
        setTonWallets(res.filter((t) => wallets.findIndex((w) => w.appName === t.appName) >= 0));
      });
    }
  }, [wallets, tonConnectSdk]);

  return (
    <TonConnectorContext.Provider value={tonConnectSdk}>
      <TonConfigProvider
        wallets={tonWallets?.map((w) => TonWalletFactory(w).create())}
        balance={balance}
        locale={locale}
      >
        {children}
      </TonConfigProvider>
    </TonConnectorContext.Provider>
  );
};
