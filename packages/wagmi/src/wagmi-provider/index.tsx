import React from 'react';
import { WagmiConfig } from 'wagmi';

import type { PublicClient, WebSocketPublicClient, Config, Chain as WagmiChain } from 'wagmi';
import { AntDesignWeb3ConfigProvider } from './config-provider';
import type { Chain, Locale } from '@ant-design/web3-common';
import type { WalletFactory } from '../interface';
// Built in popular chains
import { Mainnet, Goerli } from '@ant-design/web3-assets';
// MetaMask built-in
import { MetaMask } from '../wallets';

export type WagmiWeb3ConfigProviderProps<
  TPublicClient extends PublicClient = PublicClient,
  TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient,
> = {
  config: Config<TPublicClient, TWebSocketPublicClient>;
  locale?: Locale;
  assets?: (Chain | WalletFactory)[];
  ens?: boolean;
  balance?: boolean;
};

export function WagmiWeb3ConfigProvider<
  TPublicClient extends PublicClient,
  TWebSocketPublicClient extends WebSocketPublicClient,
>({
  children,
  assets = [],
  ens,
  locale,
  balance,
  config,
  ...restProps
}: React.PropsWithChildren<
  WagmiWeb3ConfigProviderProps<TPublicClient, TWebSocketPublicClient>
>): React.ReactElement {
  const availableChains: WagmiChain[] = React.useMemo(() => {
    // merge all available chains fro user select
    const chains: WagmiChain[] = [];

    for (const connector of config.connectors) {
      connector.chains.forEach((chain) => {
        if (chains.find((c) => c.id === chain.id)) return;
        chains.push(chain);
      });
    }

    config.publicClient.chains?.forEach((chain) => {
      if (chains.find((c) => c.id === chain.id)) return;
      chains.push(chain);
    });
    return chains;
  }, [config]);

  return (
    <WagmiConfig config={config} {...restProps}>
      <AntDesignWeb3ConfigProvider
        locale={locale}
        assets={[...assets, MetaMask, Mainnet, Goerli]}
        availableChains={availableChains}
        availableConnectors={config.connectors || []}
        ens={ens}
        balance={balance}
      >
        {children}
      </AntDesignWeb3ConfigProvider>
    </WagmiConfig>
  );
}
