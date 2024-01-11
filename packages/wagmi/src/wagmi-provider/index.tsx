import React from 'react';
// Built in popular chains
import { Goerli, Mainnet } from '@ant-design/web3-assets';
import type { Chain, Locale } from '@ant-design/web3-common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Chain as WagmiChain } from 'viem';
import { WagmiProvider } from 'wagmi';
import type { Config } from 'wagmi';

import type { WalletFactory } from '../interface';
// MetaMask built-in
import { MetaMask } from '../wallets';
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
  const walletsWithDefault = [...wallets];
  if (
    !wallets.find((item) => {
      return (
        item.name === 'MetaMask' || (Array.isArray(item.name) && item.name.includes('MetaMask'))
      );
    })
  ) {
    // If user not set MetaMask, we will add it to the first
    walletsWithDefault.unshift(MetaMask);
  }

  const chainAssets = [...chains, Mainnet, Goerli];

  const mergedQueryClient = React.useMemo(() => {
    return queryClient ?? new QueryClient();
  }, [queryClient]);

  return (
    <WagmiProvider config={config} {...restProps}>
      <QueryClientProvider client={mergedQueryClient}>
        <AntDesignWeb3ConfigProvider
          locale={locale}
          chainAssets={chainAssets}
          walletFactorys={walletsWithDefault}
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
