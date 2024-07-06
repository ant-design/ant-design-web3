import React, { useEffect, type PropsWithChildren } from 'react';
import type { Locale } from '@ant-design/web3-common';
import type { Wallet, WalletInfo } from '@tonconnect/sdk';

import { TonWalletFactory } from '../wallets/factory';
import { type TonBasicWallet } from '../wallets/type';
import TonConfigProvider from './config-provider';
import TonConnectSdk from './TonConnectSdk';

interface TonConnectorContextProps {
  tonConnectSdk: TonConnectSdk | null;
  tonSdkWallet: Wallet | null;
}

export const TonConnectorContext = React.createContext<TonConnectorContextProps | null>(null);

export interface TonWeb3ConfigProviderProps {
  locale?: Locale;
  balance?: boolean;
  wallets?: TonBasicWallet[];
  connectProps: {
    manifestUrl: string;
    reconnect?: boolean;
  };
}

export const TonWeb3ConfigProvider: React.FC<PropsWithChildren<TonWeb3ConfigProviderProps>> = ({
  children,
  balance,
  locale,
  wallets,
  connectProps,
}) => {
  const [tonConnectSdk, setTonConnectSdk] = React.useState<TonConnectSdk | null>(null);
  const [tonSdkWallet, setSdkWallet] = React.useState<Wallet | null>(null);
  const [tonWallets, setTonWallets] = React.useState<WalletInfo[]>([]);

  useEffect(() => {
    if (!tonConnectSdk) {
      const tonSdk = new TonConnectSdk(connectProps);
      tonSdk.restoreConnection();
      tonSdk.onStatusChange((s) => {
        setSdkWallet(s);
      });
      setTonConnectSdk(tonSdk);
    }
  }, [tonConnectSdk, connectProps]);

  React.useEffect(() => {
    if (tonConnectSdk && wallets?.length) {
      tonConnectSdk.getWallets().then((res) => {
        setTonWallets(res.filter((t) => wallets.findIndex((w) => w.appName === t.appName) >= 0));
      });
    }
  }, [wallets, tonConnectSdk]);

  return (
    <TonConnectorContext.Provider value={{ tonConnectSdk, tonSdkWallet }}>
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
