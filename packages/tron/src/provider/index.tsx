import React, { useEffect, useState, type PropsWithChildren } from 'react';
import type { Locale, Wallet } from '@ant-design/web3-common';
import type { Adapter, WalletError } from '@tronweb3/tronwallet-abstract-adapter';
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
}

export const TronWeb3ConfigProvider: React.FC<PropsWithChildren<TronWeb3ConfigProviderProps>> = ({
  wallets,
  onError,
  locale,
  autoConnect,
  children,
  walletProviderProps,
}) => {
  const [connectionError, setConnectionError] = useState<WalletError>();
  const [adapters, setAdapters] = useState<Adapter[]>();

  useEffect(() => {
    const tronLinkAdapter = new TronLinkAdapter();
    const okxwalletAdapter = new OkxWalletAdapter();
    const bybitWalletAdapter = new BybitWalletAdapter();

    setAdapters([tronLinkAdapter, okxwalletAdapter, bybitWalletAdapter]);
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
      >
        {children}
      </AntDesignWeb3ConfigProvider>
    </WalletProvider>
  );
};
