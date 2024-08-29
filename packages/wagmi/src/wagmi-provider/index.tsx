import React from 'react';
import type { Locale } from '@ant-design/web3-common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Transport, Chain as WagmiChain } from 'viem';
import { createConfig, http, WagmiProvider } from 'wagmi';
import type { Config, State } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect as wagmiWalletConnect } from 'wagmi/connectors';

// Built in popular chains
import { Mainnet } from '../chains';
import type { ChainAssetWithWagmiChain, EIP6963Config, WalletFactory } from '../interface';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export type WagmiWeb3ConfigProviderProps = {
  config?: Config;
  locale?: Locale;
  wallets?: WalletFactory[];
  chains?: ChainAssetWithWagmiChain[];
  ens?: boolean;
  queryClient?: QueryClient;
  balance?: boolean;
  eip6963?: EIP6963Config;
  initialState?: State;
  reconnectOnMount?: boolean;
  walletConnect?: {
    projectId: string;
  };
  transports?: Record<number, Transport>;
};

export function WagmiWeb3ConfigProvider({
  children,
  config,
  locale,
  wallets = [],
  chains = [],
  ens,
  queryClient,
  balance,
  eip6963,
  walletConnect,
  transports,
  ...restProps
}: React.PropsWithChildren<WagmiWeb3ConfigProviderProps>): React.ReactElement {
  const chainAssets: ChainAssetWithWagmiChain[] = chains.length ? chains : [Mainnet];

  const generateConfig = () => {
    if (config) {
      return config;
    }
    // Auto generate config
    const connectors = [];
    if (walletConnect) {
      connectors.push(
        wagmiWalletConnect({
          showQrModal: false,
          projectId: walletConnect.projectId,
        }),
      );
    }
    wallets.forEach((wallet) => {
      const connector = wallet.createWagmiConnector?.();
      if (connector) {
        connectors.push(connector);
      }
    });
    const autoGenerateConfig = createConfig({
      chains: chainAssets.map((chain) => chain.wagmiChain) as [WagmiChain, ...WagmiChain[]],
      transports: transports ?? {
        [mainnet.id]: http(),
      },
      connectors: [],
    });
    return autoGenerateConfig;
  };

  const [wagmiConfig, setWagmiConfig] = React.useState<Config>(() => {
    return config || generateConfig();
  });

  const mergedQueryClient = React.useMemo(() => {
    return queryClient ?? new QueryClient();
  }, [queryClient]);

  React.useEffect(() => {
    setWagmiConfig(generateConfig());
  }, [config, chains, wallets]);

  return (
    <WagmiProvider config={wagmiConfig} {...restProps}>
      <QueryClientProvider client={mergedQueryClient}>
        <AntDesignWeb3ConfigProvider
          locale={locale}
          chainAssets={chainAssets}
          walletFactories={wallets}
          ens={ens}
          balance={balance}
          eip6963={eip6963}
          wagimConfig={wagmiConfig}
        >
          {children}
        </AntDesignWeb3ConfigProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
