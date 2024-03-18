import { useMemo, useState, type FC, type PropsWithChildren } from 'react';
import { Solana, SolanaDevnet, SolanaTestnet } from '@ant-design/web3-assets/solana';
import type { Locale } from '@ant-design/web3-common';
import { WalletConnectionError, type Adapter } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
  type ConnectionProviderProps,
} from '@solana/wallet-adapter-react';

import { solana, type SolanaChainConfig } from '../chains';
import type { WalletFactory } from '../wallets/types';
import { AntDesignWeb3ConfigProvider } from './config-provider';

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
}

export const SolanaWeb3ConfigProvider: FC<PropsWithChildren<SolanaWeb3ConfigProviderProps>> = ({
  locale,
  chains,
  wallets: walletFactorys = [],
  balance,
  rpcProvider,
  connectionConfig,
  autoConnect,
  children,
  walletProviderProps,
}) => {
  const [currentChain, setCurrentChain] = useState<SolanaChainConfig | undefined>(solana);
  const [connectionError, setConnectionError] = useState<WalletConnectionError>();

  const endpoint = useMemo(() => {
    if (typeof rpcProvider === 'function') {
      return rpcProvider(currentChain);
    }

    return (currentChain ?? solana).rpcUrls.default;
  }, [rpcProvider, currentChain]);

  const availableWallets = walletFactorys.map((factory) => factory.create());

  // Only filter out the wallets that have an adapter
  const walletAdapters = useMemo(
    () => walletFactorys.map((w) => w.adapter).filter((v): v is Adapter => !!v),
    [walletFactorys],
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
        >
          {children}
        </AntDesignWeb3ConfigProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
