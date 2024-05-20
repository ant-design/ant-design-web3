import { useEffect, useMemo, useState, type FC, type PropsWithChildren } from 'react';
import { Solana, SolanaDevnet, SolanaTestnet } from '@ant-design/web3-assets/solana';
import type { Locale, Wallet } from '@ant-design/web3-common';
import { WalletConnectionError } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
  type ConnectionProviderProps,
  type WalletProviderProps,
} from '@solana/wallet-adapter-react';
import { type UniversalProviderOpts } from '@walletconnect/universal-provider';

import { solana, type SolanaChainConfig } from '../chains';
import { isAdapterWallet, isWalletConnectWallet } from '../utils';
import { type WalletFactory } from '../wallets/types';
import { AntDesignWeb3ConfigProvider } from './config-provider';
import { useWalletConnectProvider } from './useWalletConnectProvider';

export interface SolanaWeb3ConfigProviderProps {
  locale?: Locale;
  chains?: SolanaChainConfig[];
  wallets: WalletFactory[];
  balance?: boolean;

  autoAddRegisteredWallets?: boolean;

  rpcProvider?: (chain?: SolanaChainConfig) => string;

  //#region Solana ConnectionProvider specific
  connectionConfig?: ConnectionProviderProps['config'];
  //#endregion

  //#region Solana WalletProvider specific
  autoConnect?: boolean;
  walletProviderProps?: Omit<WalletProviderProps, 'wallets' | 'autoConnect' | 'children'>;
  //#endregion

  walletConnect?: UniversalProviderOpts;
}

export const SolanaWeb3ConfigProvider: FC<PropsWithChildren<SolanaWeb3ConfigProviderProps>> = ({
  locale,
  chains = [solana],
  wallets: walletFactories,
  balance,
  rpcProvider,
  connectionConfig,
  autoConnect,
  walletConnect,
  autoAddRegisteredWallets,
  children,
  walletProviderProps,
}) => {
  const [currentChain, setCurrentChain] = useState<SolanaChainConfig | undefined>(chains[0]);
  const [connectionError, setConnectionError] = useState<WalletConnectionError>();
  const walletConnectProviderGetter = useWalletConnectProvider(walletConnect);

  const [walletInstances, setWalletInstances] = useState<Wallet[]>();

  const endpoint = useMemo(() => {
    if (typeof rpcProvider === 'function') {
      return rpcProvider(currentChain);
    }

    return (currentChain ?? solana).rpcUrls.default;
  }, [rpcProvider, currentChain]);

  useEffect(() => {
    const allWallets = walletFactories.map((factory) => factory.create());

    setWalletInstances(allWallets);
  }, [walletFactories]);

  const availableWalletAdapters = useMemo(() => {
    return walletInstances?.filter(isAdapterWallet).map((w) => {
      if (isWalletConnectWallet(w)) {
        w.adapter.setWalletConnectProviderGetter(walletConnectProviderGetter);
        w.adapter.setWalletConnectConfigGetter(() => ({
          walletConnect,
          currentChain,
          rpcEndpoint: endpoint,
        }));
      }

      return w.adapter!;
    });
  }, [currentChain, endpoint, walletConnect, walletConnectProviderGetter, walletInstances]);

  return (
    <ConnectionProvider endpoint={endpoint} config={connectionConfig}>
      {!!availableWalletAdapters && (
        <WalletProvider
          wallets={availableWalletAdapters}
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
            availableWallets={walletInstances}
            balance={balance}
            currentChain={currentChain}
            onCurrentChainChange={(chain) => setCurrentChain(chain)}
            availableChains={chains}
            connectionError={connectionError}
            autoAddRegisteredWallets={autoAddRegisteredWallets}
          >
            {children}
          </AntDesignWeb3ConfigProvider>
        </WalletProvider>
      )}
    </ConnectionProvider>
  );
};
