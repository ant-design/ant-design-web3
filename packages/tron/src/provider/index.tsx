import React, { useMemo, useState, type PropsWithChildren } from 'react';
import type { Locale, Wallet } from '@ant-design/web3-common';
import type { WalletError } from '@tronweb3/tronwallet-abstract-adapter';
import { BybitWalletAdapter } from '@tronweb3/tronwallet-adapter-bybit';
import { LedgerAdapter } from '@tronweb3/tronwallet-adapter-ledger';
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

  const adapters = useMemo(() => {
    const tronLinkAdapter = new TronLinkAdapter();
    const okxWalletAdapter = new OkxWalletAdapter();
    const bybitWalletAdapter = new BybitWalletAdapter();
    const ledgerAdapter = new LedgerAdapter();

    return [okxWalletAdapter, tronLinkAdapter, bybitWalletAdapter, ledgerAdapter];
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
