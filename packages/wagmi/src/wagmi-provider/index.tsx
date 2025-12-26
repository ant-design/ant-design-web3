import React from 'react';
import type { Locale } from '@ant-design/web3-common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Transport, Chain as WagmiChain } from 'viem';
import { createConfig, http, WagmiProvider } from 'wagmi';
import type { Config, State } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect as wagmiWalletConnect } from 'wagmi/connectors';
import type { WalletConnectParameters } from 'wagmi/connectors';

// Built in popular chains
import { Mainnet } from '../chains';
import type {
  ChainAssetWithWagmiChain,
  EIP6963Config,
  SIWEConfig,
  WalletFactory,
} from '../interface';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface WalletConnectOptions
  extends Pick<
    WalletConnectParameters,
    | 'disableProviderPing'
    | 'isNewChainsStale'
    | 'projectId'
    | 'metadata'
    | 'relayUrl'
    | 'storageOptions'
    | 'qrModalOptions'
  > {
  useWalletConnectOfficialModal?: boolean;
}

export interface WagmiWeb3ConfigProviderProps {
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
  walletConnect?: false | WalletConnectOptions;
  transports?: Record<number, Transport>;
  siwe?: SIWEConfig;
  /**
   * If true, this provider's configuration will be ignored when merging with parent context.
   * This is useful when you have multiple chain providers and want to switch between them
   * without causing page flickering. Only the active provider should not have this flag set.
   */
  ignoreConfig?: boolean;
}

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
  siwe,
  ignoreConfig,
  ...restProps
}: React.PropsWithChildren<WagmiWeb3ConfigProviderProps>): React.ReactElement {
  // When user custom config, add Mainnet by default
  // When user not provide config, auto generate config, chains use user provided chains
  const chainAssets: ChainAssetWithWagmiChain[] = config
    ? [Mainnet, ...chains]
    : chains?.length
      ? chains
      : [Mainnet];
  const generateConfigFlag = () => {
    return `${JSON.stringify(walletConnect)}-${chains.map((item) => item.id).join(',')}-${wallets.map((item) => item.name).join(',')}`;
  };

  const generateConfig = () => {
    // Auto generate config
    const connectors = [];
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    if (walletConnect && walletConnect.projectId) {
      connectors.push(
        wagmiWalletConnect({
          ...walletConnect,
          showQrModal: walletConnect.useWalletConnectOfficialModal ?? false,
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
      connectors,
    });
    return {
      flag: generateConfigFlag(),
      config: autoGenerateConfig,
    };
  };

  const [autoConfig, setAutoConfig] = React.useState<{
    flag?: string;
    config: Config;
  }>(() => {
    if (config) {
      return {
        config,
      };
    }
    return generateConfig();
  });

  const mergedQueryClient = React.useMemo(() => {
    return queryClient ?? new QueryClient();
  }, [queryClient]);

  React.useEffect(() => {
    if (config) {
      return;
    }
    const flag = generateConfigFlag();
    if (flag !== autoConfig.flag) {
      // Need recreate wagmi config
      setAutoConfig(generateConfig());
    }
  }, [config, wallets, chains, walletConnect]);

  const wagmiConfig = config || autoConfig.config;

  return (
    <WagmiProvider config={wagmiConfig} {...restProps}>
      <QueryClientProvider client={mergedQueryClient}>
        <AntDesignWeb3ConfigProvider
          locale={locale}
          siwe={siwe}
          chainAssets={chainAssets}
          walletFactories={wallets}
          ens={ens}
          balance={balance}
          eip6963={eip6963}
          wagimConfig={wagmiConfig}
          useWalletConnectOfficialModal={
            typeof walletConnect === 'object' && walletConnect?.useWalletConnectOfficialModal
          }
          ignoreConfig={ignoreConfig}
        >
          {children}
        </AntDesignWeb3ConfigProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
