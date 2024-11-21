import React, { useMemo, useState, type PropsWithChildren } from 'react';
import type { Locale, Wallet } from '@ant-design/web3-common';
import { WalletError } from '@tronweb3/tronwallet-abstract-adapter';
import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import {
  BitKeepAdapter,
  BybitWalletAdapter,
  LedgerAdapter,
  OkxWalletAdapter,
  TronLinkAdapter,
} from '@tronweb3/tronwallet-adapters';

import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface TronWeb3ConfigProviderProps {
  wallets?: Wallet[];
  onError?: (error: Error) => void;
  autoConnect?: boolean;
  locale?: Locale;
}

export const TronWeb3ConfigProvider: React.FC<PropsWithChildren<TronWeb3ConfigProviderProps>> = ({
  wallets,
  onError,
  locale,
  autoConnect,
  children,
}) => {
  const [connectionError, setConnectionError] = useState<WalletError>();
  const adapters = useMemo(function () {
    const tronLinkAdapter = new TronLinkAdapter();
    const ledger = new LedgerAdapter({
      accountNumber: 2,
    });
    const bitKeepAdapter = new BitKeepAdapter();
    const okxwalletAdapter = new OkxWalletAdapter();
    const bybitWalletAdapter = new BybitWalletAdapter();
    return [tronLinkAdapter, bitKeepAdapter, okxwalletAdapter, bybitWalletAdapter, ledger];
  }, []);

  return (
    <WalletProvider
      onError={(error) => {
        setConnectionError(error);
        onError?.(error);
      }}
      adapters={adapters}
      autoConnect={autoConnect}
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
