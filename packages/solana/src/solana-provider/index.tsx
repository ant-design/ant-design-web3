import { useCallback, useEffect, useMemo, useState, type FC, type PropsWithChildren } from 'react';
import { Solana, SolanaDevnet, SolanaTestnet } from '@ant-design/web3-assets/solana';
import type { Locale } from '@ant-design/web3-common';
import { WalletConnectionError } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
  type ConnectionProviderProps,
} from '@solana/wallet-adapter-react';
import { type UniversalProviderOpts } from '@walletconnect/universal-provider';

import { solana, type SolanaChainConfig } from '../chains';
import { isWalletConnnectFactory } from '../wallets/factory';
import { isAdapterWalletFactory, type WalletFactory } from '../wallets/types';
import { AntDesignWeb3ConfigProvider } from './config-provider';
import { useWalletConnectProvider } from './useWalletConnectProvider';

export interface SolanaWeb3ConfigProviderProps {
  locale?: Locale;
  chains?: SolanaChainConfig[];
  wallets?: WalletFactory[];
  balance?: boolean;

  rpcProvider?: (chain?: SolanaChainConfig) => string;

  //#region Solana ConnectionProvider specific
  connectionConfig?: ConnectionProviderProps['config'];
  //#endregion

  //#region Solana WalletProvider specific
  autoConnect?: boolean;
  walletProviderProps?: React.ComponentProps<typeof WalletProvider>;
  //#endregion

  walletConnect?: UniversalProviderOpts;
}

export const SolanaWeb3ConfigProvider: FC<PropsWithChildren<SolanaWeb3ConfigProviderProps>> = ({
  locale,
  chains,
  wallets: walletFactorys = [],
  balance,
  rpcProvider,
  connectionConfig,
  autoConnect,
  walletConnect,
  children,
  walletProviderProps,
}) => {
  const [currentChain, setCurrentChain] = useState<SolanaChainConfig | undefined>(solana);
  const [connectionError, setConnectionError] = useState<WalletConnectionError>();
  const walletConnectProviderGetter = useWalletConnectProvider(walletConnect);

  const obtainWalletConnectProvider = useCallback(async () => {
    return walletConnectProviderGetter();
  }, [walletConnectProviderGetter]);

  const endpoint = useMemo(() => {
    if (typeof rpcProvider === 'function') {
      return rpcProvider(currentChain);
    }

    return (currentChain ?? solana).rpcUrls.default;
  }, [rpcProvider, currentChain]);

  const availableWallets = walletFactorys.map((factory) =>
    factory.create(walletConnectProviderGetter),
  );

  // Only filter out the wallets that have an adapter
  const walletAdapters = useMemo(
    () =>
      walletFactorys.filter(isAdapterWalletFactory).map((w) => {
        if (isWalletConnnectFactory(w)) {
          w.adapter.setWalletConnectProviderGetter(walletConnectProviderGetter);
          w.adapter.setWalletConnectConfigGetter(() => ({
            walletConnect,
            currentChain,
          }));
        }

        return w.adapter;
      }),
    [currentChain, walletConnect, walletConnectProviderGetter, walletFactorys],
  );

  return (
    <ConnectionProvider endpoint={endpoint} config={connectionConfig}>
      <WalletProvider
        wallets={walletAdapters}
        autoConnect={autoConnect}
        {...walletProviderProps}
        onError={(error, adapter) => {
          if (error instanceof WalletConnectionError) {
            setConnectionError(error);
          }

          walletProviderProps?.onError?.(error, adapter);
        }}
      >
        <AntDesignWeb3ConfigProvider
          locale={locale}
          chainAssets={[Solana, SolanaDevnet, SolanaTestnet]}
          availableWallets={availableWallets}
          balance={balance}
          currentChain={currentChain}
          onCurrentChainChange={(chain) => setCurrentChain(chain)}
          availableChains={chains || [solana]}
          connectionError={connectionError}
          obtainWalletConnectProvider={obtainWalletConnectProvider}
        >
          {children}
        </AntDesignWeb3ConfigProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
