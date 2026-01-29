import { useMemo, useState, type FC, type PropsWithChildren } from 'react';
import { Solana, SolanaDevnet, SolanaTestnet } from '@ant-design/web3-assets/solana';
import type { Locale } from '@ant-design/web3-common';
import { WalletConnectionError } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
  type ConnectionProviderProps,
  type WalletProviderProps,
} from '@solana/wallet-adapter-react';
import type { UniversalProviderOpts } from '@walletconnect/universal-provider';

import { solana, type SolanaChainConfig } from '../chains';
import { isAdapterWalletFactory, isWalletConnectFactory } from '../utils';
import type { WalletFactory } from '../wallets/types';
import { AntDesignWeb3ConfigProvider } from './config-provider';
import { useWalletConnectProvider } from './useWalletConnectProvider';

export interface SolanaWeb3ConfigProviderProps {
  locale?: Locale;
  chains?: SolanaChainConfig[];
  wallets?: WalletFactory[];
  balance?: boolean;

  autoAddRegisteredWallets?: boolean;

  rpcProvider?: (chain?: SolanaChainConfig) => string;

  //#region Solana ConnectionProvider specific
  connectionConfig?: ConnectionProviderProps['config'];
  //#endregion

  //#region Solana WalletProvider specific
  autoConnect?: WalletProviderProps['autoConnect'];
  walletProviderProps?: Omit<WalletProviderProps, 'wallets' | 'autoConnect' | 'children'>;
  //#endregion

  walletConnect?: UniversalProviderOpts;
  /**
   * If true, this provider's configuration will be ignored when merging with parent context.
   * This is useful when you have multiple chain providers and want to switch between them
   * without causing page flickering. Only the active provider should not have this flag set.
   */
  ignoreConfig?: boolean;
}

export const SolanaWeb3ConfigProvider: FC<PropsWithChildren<SolanaWeb3ConfigProviderProps>> = ({
  locale,
  chains = [solana],
  wallets: walletFactories = [],
  balance,
  rpcProvider,
  connectionConfig,
  autoConnect,
  walletConnect,
  autoAddRegisteredWallets,
  ignoreConfig,
  children,
  walletProviderProps,
}) => {
  const [currentChain, setCurrentChain] = useState<SolanaChainConfig | undefined>(chains[0]);
  const [connectionError, setConnectionError] = useState<WalletConnectionError>();
  const walletConnectProviderGetter = useWalletConnectProvider(walletConnect);

  const endpoint = useMemo(() => {
    if (typeof rpcProvider === 'function') {
      return rpcProvider(currentChain);
    }

    return (currentChain ?? solana).rpcUrls.default;
  }, [rpcProvider, currentChain]);

  const availableWallets = walletFactories.map((factory) =>
    factory.create(walletConnectProviderGetter),
  );

  // Only filter out the wallets that have an adapter
  const walletAdapters = useMemo(
    () =>
      walletFactories
        .filter(isAdapterWalletFactory)

        .map((w) => {
          if (isWalletConnectFactory(w)) {
            w.adapter.setWalletConnectProviderGetter(walletConnectProviderGetter);
            w.adapter.setWalletConnectConfigGetter(() => ({
              walletConnect,
              currentChain,
              rpcEndpoint: endpoint,
            }));
          }

          return w.adapter;
        }),
    [currentChain, endpoint, walletConnect, walletConnectProviderGetter, walletFactories],
  );

  const connectionProviderProps = useMemo(() => {
    return {
      endpoint,
      config: connectionConfig ?? { commitment: 'confirmed' },
    } as ConnectionProviderProps;
  }, [endpoint, connectionConfig]);

  return (
    <ConnectionProvider {...connectionProviderProps}>
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
          availableChains={chains}
          connectionError={connectionError}
          autoAddRegisteredWallets={autoAddRegisteredWallets}
          ignoreConfig={ignoreConfig}
        >
          {children}
        </AntDesignWeb3ConfigProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
