import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { Account, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import {
  WalletReadyState,
  type AdapterName,
  type WalletError,
} from '@tronweb3/tronwallet-abstract-adapter';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';

import { hasWalletReady } from '../utils';

interface AntDesignWeb3ConfigProviderProps {
  availableWallets?: Wallet[];
  locale?: Locale;
  connectionError?: WalletError;
  /**
   * If true, this provider's configuration will be ignored when merging with parent context.
   * This is useful when you have multiple chain providers and want to switch between them
   * without causing page flickering. Only the active provider should not have this flag set.
   */
  ignoreConfig?: boolean;
}

interface ConnectAsync {
  promise: Promise<Account>;
  resolve: (account?: Account) => void;
  reject: (reason: any) => void;
}

export const AntDesignWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<AntDesignWeb3ConfigProviderProps>
> = ({ availableWallets, locale, connectionError, ignoreConfig, children }) => {
  const { address, wallet, wallets, connected, connect, disconnect, select } = useWallet();
  const connectAsyncRef = useRef<ConnectAsync>();

  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    if (address) {
      setAccount({
        address,
      });
    }
  }, [address]);

  const allWallets = useMemo<Wallet[]>(() => {
    const providedWallets = availableWallets?.map<Wallet>((w) => {
      const adapter = wallets?.find((item) => item.adapter.name === w.name)?.adapter;

      return {
        ...w,
        adapter,
        hasExtensionInstalled: async () => {
          return adapter?.readyState === WalletReadyState.Found;
        },

        hasWalletReady: async () => {
          return (
            adapter?.readyState === WalletReadyState.Found ||
            adapter?.readyState === WalletReadyState.Loading
          );
        },
      };
    });
    return providedWallets || [];
  }, [availableWallets, wallets]);

  useEffect(() => {
    if (connectionError) {
      connectAsyncRef.current?.reject(connectionError);
      connectAsyncRef.current = undefined;
    }
  }, [connectionError]);

  // get account address
  useEffect(() => {
    if (!(address && connected)) {
      setAccount(undefined);
      return;
    }

    setAccount({
      address: address,
    });
  }, [address, connected, wallet?.adapter?.name]);

  useEffect(() => {
    if (!connectAsyncRef.current) {
      return;
    }

    if (connected) {
      connectAsyncRef.current.resolve({ address: address! });
      connectAsyncRef.current = undefined;
    }
  }, [connected]);

  // connect/disconnect wallet
  useEffect(() => {
    if (wallet?.adapter?.name) {
      // if wallet is not ready, need clear selected wallet
      if (!hasWalletReady(wallet.adapter.readyState)) {
        select(null as any);
        return;
      }

      connect();
    } else {
      if (connected) {
        disconnect();
      }
    }
  }, [wallet?.adapter?.name, connected]);

  return (
    <Web3ConfigProvider
      account={account}
      addressPrefix=""
      availableWallets={allWallets}
      locale={locale}
      connect={async (_wallet) => {
        let resolve: any;
        let reject: any;

        const promise = new Promise<Account>((res, rej) => {
          resolve = res;
          reject = rej;
        });

        connectAsyncRef.current = { promise, resolve, reject };

        const walletName = (_wallet?.name as AdapterName) ?? null;
        select(walletName);

        return promise;
      }}
      disconnect={async () => {
        try {
          await disconnect();
        } catch (error) {
          console.error(error);
        }
      }}
      ignoreConfig={ignoreConfig}
    >
      {children}
    </Web3ConfigProvider>
  );
};
