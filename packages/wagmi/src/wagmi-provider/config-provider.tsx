import React from 'react';
import {
  fillAddressWith0x,
  Web3ConfigProvider,
  type Account,
  type Chain,
  type Locale,
  type Wallet,
} from '@ant-design/web3-common';
import { Chain as WagmiChain } from 'viem';
import {
  useAccount,
  useBalance,
  useConfig,
  useConnect,
  useDisconnect,
  useSwitchChain,
  type Connector as WagmiConnector,
} from 'wagmi';

import type { WalletFactory, WalletUseInWagmiAdapter } from '../interface';
import { addNameToAccount, getNFTMetadata } from './methods';

export interface AntDesignWeb3ConfigProviderProps {
  chainAssets: Chain[];
  walletFactorys: WalletFactory[];
  locale?: Locale;
  children?: React.ReactNode;
  ens?: boolean;
  balance?: boolean;
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
      setAccount(ens ? await addNameToAccount(config, a) : a);
    };
    updateAccounts();
  }, [address, isDisconnected, chain, ens]);

  const wallets: Wallet[] = React.useMemo(() => {
    availableConnectors.forEach((connector) => {
      // check use assets config and console.error for alert
      const walletFactory = walletFactorys?.find(
        (item) => item.connectors?.includes(connector.name),
      );
      if (!walletFactory?.create) {
        console.error(
          `Can not find wallet factory for ${connector.name}, you should config it in WagmiWeb3ConfigProvider 'wallets'.`,
        );
      }
    });

    // Generate Wallet for @ant-design/web3
    const allWallet = walletFactorys
      ?.map((factory) => {
        const connectors = factory.connectors
          .map((name) => availableConnectors.find((item) => item.name === name))
          .filter((item) => !!item) as WagmiConnector[];

        if (connectors.length === 0) {
          // Not config connector for this wallet factory, ignore it.
          return null;
        }
        return factory.create(connectors);
      })
      .filter((item) => item !== null) as Wallet[];

    return allWallet;
  }, [availableConnectors, walletFactorys]);

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
        } else {
          console.error(
            `Can not find chain ${item.id}, you should config it in WagmiWeb3ConfigProvider 'assets'.`,
          );
          return null;
        }
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
              icon: currentChain?.nativeCurrency?.icon,
            }
          : undefined
      }
      availableWallets={wallets}
      connect={async (wallet) => {
        let connector = await (wallet as WalletUseInWagmiAdapter)?.getWagmiConnector?.();
        if (!connector) {
          connector = availableConnectors.find((item) => item.name === wallet?.name);
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
        } else {
          switchChain?.({
            chainId: c.id,
          });
        }
      }}
      getNFTMetadata={async ({ address: contractAddress, tokenId }) =>
        getNFTMetadata(config, contractAddress, tokenId, chain?.id)
      }
    >
      {children}
    </Web3ConfigProvider>
  );
};
