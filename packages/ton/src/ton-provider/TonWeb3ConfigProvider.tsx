import React, { useEffect, type PropsWithChildren } from 'react';
import type { Locale, WalletMetadata } from '@ant-design/web3-common';
import type { Wallet } from '@tonconnect/sdk';

import { TonWalletFactory } from '../wallets/factory';
import type { TonBasicWallet } from '../wallets/type';
import TonConfigProvider from './config-provider';
import TonConnectSdk, { type TonConnectSdkConfigType } from './TonConnectSdk';

interface TonConnectorContextProps {
  tonConnectSdk: TonConnectSdk | null;
  tonSelectWallet: Wallet | null;
  setTonSelectWallet: (sdk: Wallet | null) => void;
  connectConfig: TonConnectSdkConfigType;
}

export const TonConnectorContext = React.createContext<TonConnectorContextProps | null>(null);

export interface TonWeb3ConfigProviderProps {
  locale?: Locale;
  balance?: boolean;
  wallets: WalletMetadata[];
  chains?: string[];
  connectConfig: TonConnectSdkConfigType;
}

export const TonWeb3ConfigProvider: React.FC<PropsWithChildren<TonWeb3ConfigProviderProps>> = ({
  children,
  balance,
  locale,
  wallets,
  connectConfig,
}) => {
  const [tonConnectSdk, setTonConnectSdk] = React.useState<TonConnectSdk | null>(null);
  const [tonSelectWallet, setTonSelectWallet] = React.useState<Wallet | null>(null);
  const [tonWallets, setTonWallets] = React.useState<TonBasicWallet[]>([]);

  useEffect(() => {
    if (!tonConnectSdk) {
      const tonSdk = new TonConnectSdk(connectConfig);
      if (connectConfig.reconnect) {
        tonSdk.restoreConnection();
      }
      tonSdk.onStatusChange((s) => {
        setTonSelectWallet(s);
      });
      setTonConnectSdk(tonSdk);
    }
  }, [tonConnectSdk, connectConfig]);

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
    <TonConnectorContext.Provider
      value={{ tonConnectSdk, tonSelectWallet, setTonSelectWallet, connectConfig }}
    >
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
