import React from 'react';
import { Mainnet } from '@ant-design/web3-assets';
import type { Chain, Locale } from '@ant-design/web3-common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { EthersEIP6963Config } from '../interface';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface EthersWeb3ConfigProviderProps {
  // config: Config;
  // wallets?: WalletFactory[];
  locale?: Locale;
  chains?: Chain[];
  ens?: boolean;
  balance?: boolean;
  queryClient?: QueryClient;
  eip6963?: EthersEIP6963Config;
}

export const EthersWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<EthersWeb3ConfigProviderProps>
> = ({ children, chains = [], ens, balance, locale, eip6963, queryClient }) => {
  const chainAssets = [...chains, Mainnet];

  const mergedQueryClient = React.useMemo(() => {
    return queryClient ?? new QueryClient();
  }, [queryClient]);

  return (
    <QueryClientProvider client={mergedQueryClient}>
      <AntDesignWeb3ConfigProvider
        locale={locale}
        chainAssets={chainAssets}
        // walletFactorys={wallets}
        // availableChains={config.chains}
        // availableConnectors={config.connectors}
        ens={ens}
        balance={balance}
        eip6963={eip6963}
      >
        {children}
      </AntDesignWeb3ConfigProvider>
    </QueryClientProvider>
  );
};
