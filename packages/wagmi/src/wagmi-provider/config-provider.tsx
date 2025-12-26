import React from 'react';
import {
  ConnectStatus,
  Web3ConfigProvider,
  type Account,
  type Chain,
  type Locale,
  type Wallet,
} from '@ant-design/web3-common';
import type { Config as WagmiConfig } from 'wagmi';
import {
  useAccount,
  useBalance,
  useConfig,
  useConnect,
  useEnsAvatar,
  useEnsName,
  useSignMessage,
  useSwitchChain,
  type Connector as WagmiConnector,
} from 'wagmi';
import { disconnect, getAccount } from 'wagmi/actions';

import { Mainnet } from '../chains';
import type {
  EIP6963Config,
  SIWEConfig,
  WalletFactory,
  WalletUseInWagmiAdapter,
} from '../interface';
import { isEIP6963Connector } from '../utils';
import { EIP6963Wallet } from '../wallets/eip6963';
import { getNFTMetadata } from './methods';

export interface AntDesignWeb3ConfigProviderProps {
  chainAssets: Chain[];
  walletFactories: WalletFactory[];
  locale?: Locale;
  children?: React.ReactNode;
  ens?: boolean;
  balance?: boolean;
  eip6963?: EIP6963Config;
  wagimConfig: WagmiConfig;
  useWalletConnectOfficialModal?: boolean;
  siwe?: SIWEConfig;
  /**
   * If true, this provider's configuration will be ignored when merging with parent context.
   * This is useful when you have multiple chain providers and want to switch between them
   * without causing page flickering. Only the active provider should not have this flag set.
   */
  ignoreConfig?: boolean;
}

export const AntDesignWeb3ConfigProvider: React.FC<AntDesignWeb3ConfigProviderProps> = (props) => {
  const {
    children,
    chainAssets,
    walletFactories,
    ens = true,
    balance,
    locale,
    eip6963,
    wagimConfig,
    useWalletConnectOfficialModal,
    siwe,
    ignoreConfig,
  } = props;
  const { address, isDisconnected, chain, addresses } = useAccount();
  const config = useConfig();
  const { connectAsync } = useConnect();
  const { switchChain } = useSwitchChain();
  const { data: balanceData } = useBalance({ address });
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName ?? undefined });
  const { signMessageAsync } = useSignMessage();

  const [status, setStatus] = React.useState<ConnectStatus>(ConnectStatus.Disconnected);

  React.useEffect(() => {
    setStatus(isDisconnected ? ConnectStatus.Disconnected : ConnectStatus.Connected);
  }, [isDisconnected]);

  const account: Account | undefined =
    address && !isDisconnected
      ? {
          address,
          name: ensName && ens ? ensName : undefined,
          avatar: ensAvatar ?? undefined,
          addresses,
          status: status,
        }
      : undefined;

  const isConnectorNameMatch = (aName: string, bName: string) => {
    // match connector name like okxWallet, Okx Wallet, OKX Wallet
    return aName.replace(/ /g, '').toLowerCase() === bName.replace(/ /g, '').toLowerCase();
  };

  const findConnectorByName = (name: string): WagmiConnector | undefined => {
    const commonConnector = wagimConfig.connectors.find(
      (item) => isConnectorNameMatch(item.name, name) && !isEIP6963Connector(item),
    );
    if (!eip6963) {
      return commonConnector;
    }
    const eip6963Connector = wagimConfig.connectors.find(
      (item) => item.name === name && isEIP6963Connector(item),
    );
    return eip6963Connector || commonConnector;
  };

  const wallets: Wallet[] = React.useMemo(() => {
    const autoAddEIP6963Wallets: Wallet[] = [];
    wagimConfig.connectors.forEach((connector) => {
      if (isEIP6963Connector(connector)) {
        // check is need auto add eip6963 wallet
        if (
          typeof eip6963 === 'object' &&
          eip6963?.autoAddInjectedWallets &&
          !walletFactories.find((item) =>
            item.connectors.some((aName) => isConnectorNameMatch(aName, connector.name)),
          )
        ) {
          // not config wallet and find the wallet in connectors, auto add it
          autoAddEIP6963Wallets.push(
            EIP6963Wallet().create([connector], {
              useWalletConnectOfficialModal,
            }),
          );
        }
        // Do not need check eip6963 wallet
        return;
      }

      const walletFactory = walletFactories.find((factory) =>
        factory.connectors.some((aName) => isConnectorNameMatch(aName, connector.name)),
      );

      if (!walletFactory?.create) {
        // check user wallets config and console.error for alert
        console.error(
          `Can not find wallet factory for ${connector.name}, you should config it in WagmiWeb3ConfigProvider 'wallets'.`,
        );
      }
    });

    // Generate Wallet for @ant-design/web3
    const supportWallets = walletFactories
      .map((factory) => {
        const connectors = factory.connectors
          .map(findConnectorByName)
          .filter((item) => !!item) as WagmiConnector[];

        if (connectors.length === 0 && !eip6963) {
          // Not config connector for this wallet factory and not use eip6963, ignore it.
          console.error(
            `Can not find connector for ${factory.connectors.join(
              ',',
            )}, ignore the wallet. Please config connectors or add eip6963 config in WagmiWeb3ConfigProvider.`,
          );
          return null;
        }
        return factory.create(connectors, {
          useWalletConnectOfficialModal,
        });
      })
      .filter((item) => item !== null) as Wallet[];

    return [...supportWallets, ...autoAddEIP6963Wallets];
  }, [wagimConfig.connectors, walletFactories, eip6963]);

  const chainList: Chain[] = React.useMemo(() => {
    return wagimConfig.chains
      .map((item) => {
        const c = chainAssets?.find((asset) => {
          return asset.id === item.id;
        });
        if (c?.id) {
          return {
            id: c.id,
            name: c.name,
            icon: c.icon,
          };
        }
        console.error(
          `Can not find chain ${item.id}, you should config it in WagmiWeb3ConfigProvider 'chains'.`,
        );
        return null;
      })
      .filter((item) => item !== null) as Chain[];
  }, [wagimConfig.chains, chainAssets]);

  const chainId = chain?.id || wagimConfig.chains?.[0]?.id;
  const chainName = chain?.name || wagimConfig.chains?.[0]?.name;
  const [currentChain, setCurrentChain] = React.useState<Chain | undefined>(undefined);

  React.useEffect(() => {
    setCurrentChain((prevChain) => {
      // not connected any chain, keep current chain
      let newChain = chainAssets?.find((item) => item?.id === chainId);
      if (!newChain && chainId) {
        newChain = { id: chainId, name: chainName };
      }

      /* v8 ignore next */
      return newChain || prevChain;
    });
  }, [chainAssets, wagimConfig.chains, chainId, chainName]);

  const currency = currentChain?.nativeCurrency;

  const getNFTMetadataFunc = React.useCallback(
    async ({ address: contractAddress, tokenId }: { address: string; tokenId?: bigint }) =>
      getNFTMetadata(config, contractAddress, tokenId!, chain?.id),
    [chain?.id],
  );

  const signIn = React.useCallback(
    async (signAddress: string) => {
      const { getNonce, createMessage, verifyMessage } = siwe!;
      let msg: string;
      let signature: `0x${string}`;

      try {
        // get nonce
        const nonce = await getNonce(signAddress);
        msg = createMessage({
          domain: window?.location ? window.location.hostname : '',
          address: signAddress as `0x${string}`,
          uri: window?.location ? window.location.origin : '',
          nonce,
          // Default config
          version: '1',
          chainId: currentChain?.id ?? Mainnet.id,
        });
        if (signMessageAsync) {
          signature = await signMessageAsync?.({ message: msg });
          await verifyMessage(msg!, signature!);
          setStatus(ConnectStatus.Signed);
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    [siwe, currentChain, signMessageAsync],
  );

  return (
    <Web3ConfigProvider
      locale={locale}
      availableChains={chainList}
      chain={currentChain}
      account={account}
      sign={
        siwe && {
          signIn,
        }
      }
      balance={
        balance
          ? {
              symbol: balanceData?.symbol,
              value: balanceData?.value,
              decimals: balanceData?.decimals,
              icon: currency?.icon,
            }
          : undefined
      }
      availableWallets={wallets}
      addressPrefix="0x"
      connect={async (wallet, options) => {
        let connector = await (wallet as WalletUseInWagmiAdapter)?.getWagmiConnector?.(options);
        if (!connector && wallet) {
          connector = findConnectorByName(wallet.name);
        }
        if (!connector) {
          throw new Error(`Can not find connector for ${wallet?.name}`);
        }
        const { accounts } = await connectAsync({
          connector,
          chainId: currentChain?.id,
        });
        return {
          address: accounts?.[0],
          addresses: accounts,
        };
      }}
      disconnect={async () => {
        // await disconnectAsync();
        // TODO@jeasonstudio: wagmi useDisconnect hook 在处理多实例（config）共存时，
        // 存在一些状态处理的 bug，暂时用更低阶 API 代替。
        const { connector } = getAccount(config);
        await disconnect(config, { connector });
      }}
      switchChain={async (newChain: Chain) => {
        if (!chain) {
          // hava not connected any chain
          setCurrentChain(newChain);
        } else {
          switchChain?.({ chainId: newChain.id });
        }
      }}
      getNFTMetadata={getNFTMetadataFunc}
      ignoreConfig={ignoreConfig}
    >
      {children}
    </Web3ConfigProvider>
  );
};
