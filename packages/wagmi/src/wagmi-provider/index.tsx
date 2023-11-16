import { WagmiConfig } from 'wagmi';

import type { PublicClient, WebSocketPublicClient, Config } from 'wagmi';
import { AntDesignWeb3ConfigProvider } from './config-provider';
import type { Chain } from '@ant-design/web3-common';
import type { WalletFactory } from '../interface';
// Built in popular chains
import { Mainnet, Polygon, BSC, Goerli } from '@ant-design/web3-assets';
// MetaMask and WallectConnect built-in
import { MetaMask, WallectConnect } from '../wallets';

export type WagmiWeb3ConfigProviderProps<
  TPublicClient extends PublicClient = PublicClient,
  TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient,
> = {
  config: Config<TPublicClient, TWebSocketPublicClient>;
  assets?: (Chain | WalletFactory)[];
};

export function WagmiWeb3ConfigProvider<
  TPublicClient extends PublicClient,
  TWebSocketPublicClient extends WebSocketPublicClient,
>({
  children,
  assets = [],
  ...restProps
}: React.PropsWithChildren<
  WagmiWeb3ConfigProviderProps<TPublicClient, TWebSocketPublicClient>
>): React.ReactElement {
  return (
    <WagmiConfig {...restProps}>
      <AntDesignWeb3ConfigProvider
        assets={[...assets, MetaMask, WallectConnect, Mainnet, Polygon, BSC, Goerli]}
      >
        {children}
      </AntDesignWeb3ConfigProvider>
    </WagmiConfig>
  );
}
