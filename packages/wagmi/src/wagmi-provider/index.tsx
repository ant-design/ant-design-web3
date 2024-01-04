import React from 'react';
// Built in popular chains
import { Goerli, Mainnet } from '@ant-design/web3-assets';
import type { Chain, Locale } from '@ant-design/web3-common';
import { WagmiConfig } from 'wagmi';
import type { Config, PublicClient, Chain as WagmiChain, WebSocketPublicClient } from 'wagmi';

import type { WalletFactory } from '../interface';
// MetaMask built-in
import { MetaMask } from '../wallets';
import { AntDesignWeb3ConfigProvider } from './config-provider';

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

  const assetsWithDefault = [...assets, Mainnet, Goerli];
  if (
    !assets.find((item) => {
      return (
        item.name === 'MetaMask' || (Array.isArray(item.name) && item.name.includes('MetaMask'))
      );
    })
  ) {
    // If user not set MetaMask, we will add it to the first
    assetsWithDefault.unshift(MetaMask);
  }

  return (
    <WagmiConfig config={config} {...restProps}>
      <AntDesignWeb3ConfigProvider
        locale={locale}
        assets={assetsWithDefault}
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
