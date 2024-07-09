import React from 'react';
import type { Locale } from '@ant-design/web3-common';
import type { createNetworkConfig } from '@mysten/dapp-kit';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import type { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

import type { SuiChain } from '../chain';
import { SuiDevnet, SuiLocalnet, SuiMainnet, SuiTestnet } from '../chain';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface SuiWeb3ConfigProviderProps {
  balance?: boolean;
  locale?: Locale;
  autoConnect?: boolean;
  networkConfig: ReturnType<typeof createNetworkConfig>;
  sns?: boolean;
  defaultNetwork?: string;
  queryClient: QueryClient;
  chains?: SuiChain[];
}

export const SuiWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<SuiWeb3ConfigProviderProps>
> = ({
  autoConnect,
  balance,
  locale,
  networkConfig: networkConfigs,
  defaultNetwork = 'mainnet',
  queryClient,
  sns,
  children,
}) => {
  const [network, setNetwork] = React.useState(defaultNetwork);

  const networks = React.useMemo(() => {
    const networkKeys = Object.keys(networkConfigs.networkConfig);
    const configs = [SuiMainnet, SuiTestnet, SuiDevnet, SuiLocalnet];
    return networkKeys
      .map((networkKey) => {
        const networkConfig = configs.find((item) => item.network === networkKey);
        return networkConfig;
      })
      .filter((item): item is SuiChain => !!item);
  }, [networkConfigs]);

  const currentNetwork = React.useMemo(() => {
    return networks?.find((item) => item.network === network);
  }, [network, networks]);

  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfigs.networkConfig as any} network={network}>
        <WalletProvider autoConnect={autoConnect}>
          <AntDesignWeb3ConfigProvider
            locale={locale}
            availableChains={networks}
            currentChain={currentNetwork}
            balance={balance}
            sns={sns}
            onCurrentChainChange={setNetwork}
          >
            {children}
          </AntDesignWeb3ConfigProvider>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};
