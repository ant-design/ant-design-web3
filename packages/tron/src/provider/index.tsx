import React, { useMemo, useState, type PropsWithChildren } from 'react';
import type { Locale, Wallet } from '@ant-design/web3-common';
import type { WalletError } from '@tronweb3/tronwallet-abstract-adapter';
import { BybitWalletAdapter } from '@tronweb3/tronwallet-adapter-bybit';
import { OkxWalletAdapter } from '@tronweb3/tronwallet-adapter-okxwallet';
import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { TronLinkAdapter } from '@tronweb3/tronwallet-adapter-tronlink';

import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface TronWeb3ConfigProviderProps {
  wallets?: Wallet[];
  onError?: (error: Error) => void;
  autoConnect?: boolean;
  locale?: Locale;
  walletProviderProps?: Omit<React.PropsWithChildren<TronWeb3ConfigProviderProps>, 'children'>;
  /**
   * If true, this provider's configuration will be ignored when merging with parent context.
   * This is useful when you have multiple chain providers and want to switch between them
   * without causing page flickering. Only the active provider should not have this flag set.
   */
  ignoreConfig?: boolean;
}

export const TronWeb3ConfigProvider: React.FC<PropsWithChildren<TronWeb3ConfigProviderProps>> = ({
  wallets,
  onError,
  locale,
  autoConnect,
  ignoreConfig,
  children,
  walletProviderProps,
}) => {
  const [connectionError, setConnectionError] = useState<WalletError>();

  const adapters = useMemo(() => {
    const tronLinkAdapter = new TronLinkAdapter();
    const okxWalletAdapter = new OkxWalletAdapter();
    const bybitWalletAdapter = new BybitWalletAdapter();

    return [okxWalletAdapter, tronLinkAdapter, bybitWalletAdapter];
  }, []);

  return (
    <WalletProvider
      onError={(error) => {
        setConnectionError(error);
        onError?.(error);
      }}
      adapters={adapters}
      autoConnect={autoConnect}
      {...walletProviderProps}
    >
      <AntDesignWeb3ConfigProvider
        locale={locale}
        connectionError={connectionError}
        availableWallets={wallets}
        ignoreConfig={ignoreConfig}
      >
        {children}
      </AntDesignWeb3ConfigProvider>
    </WalletProvider>
  );
};
