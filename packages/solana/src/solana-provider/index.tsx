import { useMemo, useState, type FC, type PropsWithChildren } from 'react';
import { Solana, SolanaDevnet, SolanaTestnet } from '@ant-design/web3-assets/solana';
import type { Chain, Locale } from '@ant-design/web3-common';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { type ConnectionConfig } from '@solana/web3.js';

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
  connectionConfig?: ConnectionConfig;
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

  const endpoint = useMemo(() => {
    if (typeof rpcProvider === 'function') {
      return rpcProvider(currentChain);
    }

    return (currentChain ?? solana).rpcUrls.default;
  }, [rpcProvider, currentChain]);

  const availableWallets = walletFactorys.map((factory) => factory.create());
  const adapters = walletFactorys.map((w) => w.adapter);

  return (
    <ConnectionProvider endpoint={endpoint} config={connectionConfig}>
      <WalletProvider wallets={adapters} autoConnect={autoConnect} {...walletProviderProps}>
        <AntDesignWeb3ConfigProvider
          locale={locale}
          chainAssets={[Solana, SolanaDevnet, SolanaTestnet]}
          availableWallets={availableWallets}
          balance={balance}
          currentChain={currentChain}
          onCurrentChainChange={(chain) => setCurrentChain(chain)}
          availableChains={chains || [solana]}
        >
          {children}
        </AntDesignWeb3ConfigProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
