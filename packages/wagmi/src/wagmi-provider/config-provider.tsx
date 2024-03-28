import React from 'react';
import {
  fillAddressWith0x,
  Web3ConfigProvider,
  type Account,
  type Chain,
  type Locale,
  type Wallet,
} from '@ant-design/web3-common';
import {
  signTypedData,
  signMessage as wagmiSignMessage,
  type SignTypedDataParameters,
} from '@wagmi/core';
import type { Chain as WagmiChain } from 'viem';
import {
  useAccount,
  useBalance,
  useConfig,
  useConnect,
  useDisconnect,
  useSwitchChain,
  type Connector as WagmiConnector,
} from 'wagmi';

import type { EIP6963Config, WalletFactory, WalletUseInWagmiAdapter } from '../interface';
import { isEIP6963Connector } from '../utils';
import { EIP6963Wallet } from '../wallets/eip6963';
import { addNameToAccount, getNFTMetadata } from './methods';

export interface AntDesignWeb3ConfigProviderProps {
  chainAssets: Chain[];
  walletFactorys: WalletFactory[];
  locale?: Locale;
  children?: React.ReactNode;
  ens?: boolean;
  balance?: boolean;
  eip6963?: EIP6963Config;
  readonly availableChains: readonly WagmiChain[];
  readonly availableConnectors: readonly WagmiConnector[];
}

export const AntDesignWeb3ConfigProvider: React.FC<AntDesignWeb3ConfigProviderProps> = (props) => {
  const {
    children,
    chainAssets,
    walletFactorys,
    availableChains,
    availableConnectors,
    ens,
    balance,
    locale,
    eip6963,
  } = props;
  const { address, isDisconnected, chain } = useAccount();
  const config = useConfig();
  const [account, setAccount] = React.useState<Account | undefined>();
  const { connectAsync } = useConnect();
  const { switchChain } = useSwitchChain();
  const { disconnectAsync } = useDisconnect();
  const [currentChain, setCurrentChain] = React.useState<Chain | undefined>(undefined);
  const { data: balanceData } = useBalance({
    address: balance && account ? fillAddressWith0x(account.address) : undefined,
  });

  React.useEffect(() => {
    if (!address || isDisconnected) {
      setAccount(undefined);
      return;
    }
    const updateAccounts = async () => {
      const a = {
        address,
      };
      setAccount(a);
      if (ens) {
        setAccount(await addNameToAccount(config, a));
      }
    };
    updateAccounts();
  }, [address, isDisconnected, chain, ens]);

  const findConnectorByName = (name: string): WagmiConnector | undefined => {
    const commonConnector = availableConnectors.find(
      (item) => item.name === name && !isEIP6963Connector(item),
    );
    if (!eip6963) {
      return commonConnector;
    }
    const eip6963Connector = availableConnectors.find(
      (item) => item.name === name && isEIP6963Connector(item),
    );
    return eip6963Connector || commonConnector;
  };

  const wallets: Wallet[] = React.useMemo(() => {
    const autoAddEIP6963Wallets: Wallet[] = [];

    availableConnectors.forEach((connector) => {
      if (isEIP6963Connector(connector)) {
        // check is need auto add eip6963 wallet
        if (
          typeof eip6963 === 'object' &&
          eip6963?.autoAddInjectedWallets &&
          !walletFactorys.find((item) => item.connectors.includes(connector.name))
        ) {
          // not config wallet and find the wallet in connectors, auto add it
          autoAddEIP6963Wallets.push(EIP6963Wallet().create([connector]));
        }
        // Do not need check eip6963 wallet
        return;
      }

      const walletFactory = walletFactorys.find((factory) =>
        factory.connectors.includes(connector.name),
      );

      if (!walletFactory?.create) {
        // check user wallets config and console.error for alert
        console.error(
          `Can not find wallet factory for ${connector.name}, you should config it in WagmiWeb3ConfigProvider 'wallets'.`,
        );
      }
    });

    // Generate Wallet for @ant-design/web3
    const supportWallets = walletFactorys
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
        return factory.create(connectors);
      })
      .filter((item) => item !== null) as Wallet[];

    return [...supportWallets, ...autoAddEIP6963Wallets];
  }, [availableConnectors, walletFactorys, eip6963]);

  const chainList: Chain[] = React.useMemo(() => {
    return availableChains
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
  }, [availableChains, chainAssets]);

  React.useEffect(() => {
    if (!chain && currentChain) {
      // not connected any chain, keep current chain
      return;
    }
    const currentWagmiChain = chain ?? availableChains[0];
    if (!currentWagmiChain) {
      return;
    }
    let c = chainAssets?.find((item) => (item as Chain).id === currentWagmiChain?.id) as Chain;
    if (!c?.id) {
      c = {
        id: currentWagmiChain.id,
        name: currentWagmiChain.name,
      };
    }
    setCurrentChain(c);
    return;
  }, [chain, chainAssets, availableChains, currentChain]);

  const currency = currentChain?.nativeCurrency;

  return (
    <Web3ConfigProvider
      locale={locale}
      availableChains={chainList}
      chain={currentChain}
      account={account}
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
        await connectAsync({
          connector,
          chainId: currentChain?.id,
        });
      }}
      disconnect={async () => {
        await disconnectAsync();
      }}
      switchChain={async (c: Chain) => {
        if (!chain) {
          // hava not connected any chain
          setCurrentChain(c);
          return;
        }
        switchChain?.({
          chainId: c.id,
        });
      }}
      getNFTMetadata={async ({ address: contractAddress, tokenId }) =>
        getNFTMetadata(config, contractAddress, tokenId, chain?.id)
      }
      signMessage={async (message) => {
        let signature: string;
        if (typeof message === 'string') {
          signature = await wagmiSignMessage(config, { message });
        } else if (message?.raw && message.raw instanceof Uint8Array) {
          signature = await wagmiSignMessage(config, {
            account: account?.address as `0x${string}`,
            message: { raw: message.raw },
          });
        } else {
          // ERC712 spec the typed data must be an object and contains types and message
          // See: https://eips.ethereum.org/EIPS/eip-712
          // Here should do some validation for the typed data.
          const typedData = message as SignTypedDataParameters;

          if (!typedData?.types || !typedData?.message) {
            throw new Error("The 'message' and 'types' is required for signTypedData");
          }
          signature = await signTypedData(config, typedData);
        }
        return { signature };
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};
