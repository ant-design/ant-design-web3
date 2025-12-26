import React, { useEffect, type PropsWithChildren } from 'react';
import type { Locale } from '@ant-design/web3-common';
import type { CHAIN, TonConnectOptions, Wallet } from '@tonconnect/sdk';

import { TonWalletFactory } from '../wallets/factory';
import type { TonBasicWallet, TonWalletMetadata } from '../wallets/type';
import TonConfigProvider from './config-provider';
import TonConnectSdk, { type TonConnectSdkConfigType } from './TonConnectSdk';

interface TonConnectorContextProps {
  tonConnectSdk: TonConnectSdk | null;
  tonSelectWallet: Wallet | null;
  setTonSelectWallet: (sdk: Wallet | null) => void;
  connectConfig: TonConnectSdkConfigType;
}

export const TonConnectorContext = React.createContext<TonConnectorContextProps | null>(null);

export interface TonWeb3ConfigProviderProps extends TonConnectOptions {
  locale?: Locale;
  balance?: boolean;
  wallets: TonWalletMetadata[];
  chain?: CHAIN;
  reconnect?: boolean;
  /**
   * If true, this provider's configuration will be ignored when merging with parent context.
   * This is useful when you have multiple chain providers and want to switch between them
   * without causing page flickering. Only the active provider should not have this flag set.
   */
  ignoreConfig?: boolean;
}

export const TonWeb3ConfigProvider: React.FC<PropsWithChildren<TonWeb3ConfigProviderProps>> = ({
  children,
  ...restProps
}) => {
  const { balance, locale, wallets, chain, reconnect = true, ignoreConfig } = restProps;

  const [tonConnectSdk, setTonConnectSdk] = React.useState<TonConnectSdk | null>(null);
  const [tonSelectWallet, setTonSelectWallet] = React.useState<Wallet | null>(null);
  const [tonWallets, setTonWallets] = React.useState<TonBasicWallet[]>([]);

  useEffect(() => {
    if (!tonConnectSdk) {
      const tonSdk = new TonConnectSdk({ ...restProps, chain });
      if (reconnect) {
        tonSdk.restoreConnection();
      }
      tonSdk.onStatusChange((s) => {
        setTonSelectWallet(s);
      });
      setTonConnectSdk(tonSdk);
    }
  }, [tonConnectSdk, restProps, reconnect, chain]);

  React.useEffect(() => {
    if (tonConnectSdk && wallets?.length) {
      tonConnectSdk.getWallets().then((res) => {
        const availableWallets = wallets.filter(
          (w) => res.findIndex((t) => t.appName === w.key) >= 0,
        );
        setTonWallets(
          availableWallets.map((w) => {
            const tonBasicWallet = res.find((t) => t.appName === w.key)!;
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
      value={{ tonConnectSdk, tonSelectWallet, setTonSelectWallet, connectConfig: restProps }}
    >
      <TonConfigProvider
        wallets={tonWallets.map((w) => TonWalletFactory(w).create())}
        balance={balance}
        locale={locale}
        ignoreConfig={ignoreConfig}
      >
        {children}
      </TonConfigProvider>
    </TonConnectorContext.Provider>
  );
};
