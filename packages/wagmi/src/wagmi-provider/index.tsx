import { WagmiConfig, mainnet } from 'wagmi';

import type { PublicClient, WebSocketPublicClient, Config, Chain as WagmiChain } from 'wagmi';
import { AntDesignWeb3ConfigProvider } from './config-provider';
import type { Chain } from '@ant-design/web3-common';
import type { WalletFactory } from '../interface';
// Built in popular chains
import { Mainnet, Polygon, BSC, Goerli } from '@ant-design/web3-assets';
// MetaMask and WalletConnect built-in
import { MetaMask, WalletConnect } from '../wallets';

export type WagmiWeb3ConfigProviderProps<
  TPublicClient extends PublicClient = PublicClient,
  TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient,
> = {
  config: Config<TPublicClient, TWebSocketPublicClient>;
  availableChains?: WagmiChain[];
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
  availableChains = [mainnet],
  ens,
  balance,
  ...restProps
}: React.PropsWithChildren<
  WagmiWeb3ConfigProviderProps<TPublicClient, TWebSocketPublicClient>
>): React.ReactElement {
  return (
    <WagmiConfig {...restProps}>
      <AntDesignWeb3ConfigProvider
        assets={[...assets, MetaMask, WalletConnect, Mainnet, Polygon, BSC, Goerli]}
        availableChains={availableChains}
        ens={ens}
        balance={balance}
      >
        {children}
      </AntDesignWeb3ConfigProvider>
    </WagmiConfig>
  );
}
