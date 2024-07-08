import React, { useEffect, type PropsWithChildren } from 'react';
import type { Locale, WalletMetadata } from '@ant-design/web3-common';
import type { Wallet } from '@tonconnect/sdk';

import { TonWalletFactory } from '../wallets/factory';
import { type TonBasicWallet } from '../wallets/type';
import TonConfigProvider from './config-provider';
import TonConnectSdk from './TonConnectSdk';

interface TonConnectorContextProps {
  tonConnectSdk: TonConnectSdk | null;
  tonSelectWallet: Wallet | null;
  setTonSelectWallet: (sdk: Wallet | null) => void;
}

export const TonConnectorContext = React.createContext<TonConnectorContextProps | null>(null);

export interface TonWeb3ConfigProviderProps {
  locale?: Locale;
  balance?: boolean;
  wallets?: WalletMetadata[];
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
  const [tonSelectWallet, setTonSelectWallet] = React.useState<Wallet | null>(null);
  const [tonWallets, setTonWallets] = React.useState<TonBasicWallet[]>([]);

  useEffect(() => {
    if (!tonConnectSdk) {
      const tonSdk = new TonConnectSdk(connectProps);
      tonSdk.restoreConnection();
      tonSdk.onStatusChange((s) => {
        setTonSelectWallet(s);
      });
      setTonConnectSdk(tonSdk);
    }
  }, [tonConnectSdk, connectProps]);

  React.useEffect(() => {
    if (tonConnectSdk && wallets?.length) {
      tonConnectSdk.getWallets().then((res) => {
        const availableWallets = res.filter(
          (t) => wallets.findIndex((w) => w.name === t.appName) >= 0,
        );
        setTonWallets(
          availableWallets.map((w) => {
            const tonBasicWallet = wallets.find((t) => t.name === w.appName);
            if (!tonBasicWallet) {
              throw new Error('Wallet not found');
            }
            return {
              ...w,
              ...tonBasicWallet,
            };
          }),
        );
      });
    }
  }, [wallets, tonConnectSdk]);

  return (
    <TonConnectorContext.Provider value={{ tonConnectSdk, tonSelectWallet, setTonSelectWallet }}>
      <TonConfigProvider
        wallets={tonWallets.map((w) => TonWalletFactory(w).create())}
        balance={balance}
        locale={locale}
      >
        {children}
      </TonConfigProvider>
    </TonConnectorContext.Provider>
  );
};
