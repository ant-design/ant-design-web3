import React from 'react';
// Built in popular chains
import { Mainnet } from '@ant-design/web3-assets';
import type { Chain, Locale } from '@ant-design/web3-common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import type { Config } from 'wagmi';

import type { WalletFactory } from '../interface';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export type WagmiWeb3ConfigProviderProps = {
  config: Config;
  locale?: Locale;
  wallets?: WalletFactory[];
  chains?: Chain[];
  ens?: boolean;
  queryClient?: QueryClient;
  balance?: boolean;
};

export function WagmiWeb3ConfigProvider({
  children,
  wallets = [],
  chains = [],
  ens,
  locale,
  balance,
  config,
  queryClient,
  ...restProps
}: React.PropsWithChildren<WagmiWeb3ConfigProviderProps>): React.ReactElement {
  const chainAssets = [...chains, Mainnet];

  const mergedQueryClient = React.useMemo(() => {
    return queryClient ?? new QueryClient();
  }, [queryClient]);

  return (
    <WagmiProvider config={config} {...restProps}>
      <QueryClientProvider client={mergedQueryClient}>
        <AntDesignWeb3ConfigProvider
          locale={locale}
          chainAssets={chainAssets}
          walletFactorys={wallets}
          availableChains={config.chains}
          availableConnectors={config.connectors}
          ens={ens}
          balance={balance}
        >
          {children}
        </AntDesignWeb3ConfigProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
