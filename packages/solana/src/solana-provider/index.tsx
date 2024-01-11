import { useMemo, useState, type FC, type PropsWithChildren } from 'react';
import { Solana, SolanaDevnet, SolanaTestnet } from '@ant-design/web3-assets';
import type { Chain, Locale } from '@ant-design/web3-common';
import type { Adapter } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { type ConnectionConfig } from '@solana/web3.js';

import { solana, type SolanaChain } from '../chains';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface SolanaWeb3ConfigProviderProps {
  locale?: Locale;
  chains?: Chain[];
  assets?: Chain[];
  balance?: boolean;

  rpcProvider?: string | ((chain?: Chain) => string);

  //#region Solana ConnectionProvider specific
  connectionConfig?: ConnectionConfig;
  //#endregion

  //#region Solana WalletProvider specific
  wallets?: Adapter[];
  autoConnect?: boolean;
  //#endregion
}

export const SolanaWeb3ConfigProvider: FC<PropsWithChildren<SolanaWeb3ConfigProviderProps>> = ({
  locale,
  chains,
  assets,
  balance,
  rpcProvider,
  connectionConfig,
  wallets,
  autoConnect,
  children,
}) => {
  const [currentChain, setCurrentChain] = useState<SolanaChain | undefined>(solana);

  const endpoint = useMemo(() => {
    if (typeof rpcProvider === 'function') {
      return rpcProvider(currentChain);
    }

    if (!currentChain) {
      return '';
    }

    return currentChain.rpcUrls[rpcProvider ?? 'default'].http[0];
  }, [rpcProvider, currentChain]);

  return (
    <ConnectionProvider endpoint={endpoint ?? ''} config={connectionConfig}>
      <WalletProvider wallets={wallets || []} autoConnect={autoConnect}>
        <AntDesignWeb3ConfigProvider
          locale={locale}
          assets={assets ?? [Solana, SolanaDevnet, SolanaTestnet]}
          balance={balance}
          currentChain={currentChain}
          onCurrentChainChange={(chain) => setCurrentChain(chain as SolanaChain)}
          availableChains={chains || []}
          availableConnectors={wallets || []}
        >
          {children}
        </AntDesignWeb3ConfigProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
