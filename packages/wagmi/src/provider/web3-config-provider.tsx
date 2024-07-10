import React from 'react';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import type { Transport } from 'viem';
import { createConfig, http, WagmiProvider } from 'wagmi';
import type { Config, CreateConnectorFn, Storage } from 'wagmi';
import { mainnet, type Chain } from 'wagmi/chains';
import {
  walletConnect as wagmiWalletConnect,
  type WalletConnectParameters,
} from 'wagmi/connectors';

import type { WagmiPureConfigProviderProps } from './pure-config-provider';
import { WagmiPureConfigProvider } from './pure-config-provider';

export interface WagmiWeb3ConfigProviderProps extends WagmiPureConfigProviderProps {
  // WagmiProvider params
  reconnectOnMount?: boolean;
  /** @deprecated */
  config?: Config;

  // Wagmi.createConfig params
  chains?: Chain[];
  connectors?: CreateConnectorFn[];
  multiInjectedProviderDiscovery?: boolean;
  storage?: Storage | null;
  syncConnectedChain?: boolean;
  transports?: Record<number, Transport>;

  // QueryClientProvider params
  queryClient?: QueryClient;

  // wallet connect
  walletConnect?: Omit<WalletConnectParameters, 'showQrModal'>;
}

export const WagmiWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<WagmiWeb3ConfigProviderProps>
> = ({
  children,
  reconnectOnMount = true,
  config: deprecatedConfig,
  queryClient = new QueryClient(),
  chains: availableChains,
  connectors: availableConnectors,
  multiInjectedProviderDiscovery = true,
  storage,
  syncConnectedChain = true,
  transports: availableTransports,
  walletConnect: walletConnectParams,
  ...pureProviderProps
}) => {
  const config = React.useMemo(() => {
    // Fallback to user provided config
    if (deprecatedConfig) return deprecatedConfig;

    // Combine the available chains with the mainnet chain
    const chains = (!availableChains?.length ? [mainnet] : availableChains) as readonly [
      Chain,
      ...Chain[],
    ];

    // Combine the available transports with the HTTP transport
    const transports = Object.assign(
      {},
      Object.fromEntries(chains.map((chain) => [chain.id, http()])),
      availableTransports,
    );

    // Combine the available connectors with wallet-connect
    const connectors = [...(availableConnectors ?? [])];
    if (walletConnectParams?.projectId) {
      connectors.push(wagmiWalletConnect({ ...walletConnectParams, showQrModal: false }));
    }

    // Return the wagmi config
    return createConfig({
      chains,
      transports,
      connectors,
      multiInjectedProviderDiscovery,
      storage,
      syncConnectedChain,
    });
  }, [
    availableChains,
    availableTransports,
    availableConnectors,
    multiInjectedProviderDiscovery,
    storage,
    syncConnectedChain,
    walletConnectParams,
    deprecatedConfig,
  ]);

  const element = (
    <WagmiProvider config={config} reconnectOnMount={reconnectOnMount}>
      <WagmiPureConfigProvider {...pureProviderProps}>{children}</WagmiPureConfigProvider>
    </WagmiProvider>
  );

  try {
    useQueryClient();
    return element;
  } catch (error) {
    return <QueryClientProvider client={queryClient!}>{element}</QueryClientProvider>;
  }
};
WagmiWeb3ConfigProvider.displayName = 'WagmiWeb3ConfigProvider';
