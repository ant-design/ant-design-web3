import React from 'react';
import type { Locale } from '@ant-design/web3-common';
import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import type { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

import type { SuiChain } from '../chain';
import { SuiDevnet, SuiLocalnet, SuiMainnet, SuiTestnet } from '../chain';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface SuiWeb3ConfigProviderProps {
  balance?: boolean;
  locale?: Locale;
  autoConnect?: boolean;
  networkConfig?: ReturnType<typeof createNetworkConfig>['networkConfig'];
  sns?: boolean;
  defaultNetwork?: string;
  queryClient: QueryClient;
}

export const SuiWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<SuiWeb3ConfigProviderProps>
> = ({
  autoConnect,
  balance,
  locale,
  networkConfig,
  defaultNetwork = 'mainnet',
  queryClient,
  sns,
  children,
}) => {
  const [network, setNetwork] = React.useState(defaultNetwork);

  const realNetworkConfig = React.useMemo<NonNullable<typeof networkConfig>>(() => {
    return (
      networkConfig ??
      createNetworkConfig({
        mainnet: { url: getFullnodeUrl('mainnet') },
      }).networkConfig
    );
  }, [networkConfig]);

  const networks = React.useMemo(() => {
    const networkConfigKeys = Object.keys(realNetworkConfig);
    const networkConfigs = [SuiMainnet, SuiTestnet, SuiDevnet, SuiLocalnet];

    return networkConfigKeys
      .map((networkKey) => networkConfigs.find((item) => item.network === networkKey))
      .filter((item): item is SuiChain => !!item);
  }, [realNetworkConfig]);

  const currentNetwork = React.useMemo(() => {
    return networks?.find((item) => item.network === network);
  }, [network, networks]);

  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={realNetworkConfig} network={network}>
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
