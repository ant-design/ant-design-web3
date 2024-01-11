import React, { useEffect, useMemo, useState } from 'react';
import type { Account, Chain, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import { Metaplex, PublicKey } from '@metaplex-foundation/js';
import type { Adapter, WalletName } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

import { solana } from '../chains';
import { isSolanaChain } from './utils';

export interface AntDesignWeb3ConfigProviderProps extends React.PropsWithChildren {
  locale?: Locale;
  assets?: Chain[];
  availableChains: Chain[];
  availableConnectors: Adapter[];
  balance?: boolean;
  currentChain?: Chain;
  onCurrentChainChange?: (chain?: Chain) => void;
}

export const AntDesignWeb3ConfigProvider: React.FC<AntDesignWeb3ConfigProviderProps> = (props) => {
  const { publicKey, connected, connect, select: selectWallet, disconnect, wallet } = useWallet();
  const { connection } = useConnection();

  const [balanceData, setBalanceData] = useState<bigint>();
  const [account, setAccount] = useState<Account>();
  const [currentWalletName, setCurrentWalletName] = useState(() => wallet?.adapter.name ?? null);

  // get account address
  useEffect(() => {
    if (!(publicKey && connected)) {
      setAccount(undefined);
      return;
    }

    setAccount({
      address: publicKey.toBase58(),
    });
  }, [publicKey, connected]);

  // get balance
  useEffect(() => {
    if (!(props.balance && connection && publicKey)) {
      return;
    }

    const getBalance = async () => {
      const balanceVal = await connection.getBalance(publicKey);
      setBalanceData(BigInt(balanceVal));
    };

    getBalance();
  }, [connection, publicKey, props.balance]);

  // connect/disconnect wallet
  useEffect(() => {
    if (wallet?.adapter.name && isSolanaChain(props.currentChain?.id)) {
      connect();
    } else {
      disconnect();
    }
  }, [wallet?.adapter.name, props.currentChain?.id]);

  const wallets: Wallet[] = useMemo(() => {
    return props.availableConnectors
      .map((connector) => {
        const walletFactory = props.assets
          // TODO: fix `as any` here
          ?.find((item) => item.name === connector.name) as any;

        if (!walletFactory?.create) {
          console.error(
            `Can not find wallet factory for ${connector.name}, you should config it in SolanaWeb3ConfigProvider 'assets'.`,
          );
          return null;
        }

        return walletFactory.create(connector);
      })
      .filter((item) => !!item) as Wallet[];
  }, [props.availableConnectors, props.assets]);

  const chainList = useMemo(() => {
    return props.availableChains
      .map((item) => {
        const c = props.assets?.find((asset) => {
          return asset.id === item.id;
        }) as Chain;

        if (c?.id) {
          return {
            id: c.id,
            name: c.name,
            icon: c.icon,
          };
        } else {
          console.error(
            `Can not find chain ${item.id}, you should config it in SolanaWeb3ConfigProvider 'assets'.`,
          );
          return null;
        }
      })
      .filter((item) => item !== null) as Chain[];
  }, [props.availableChains, props.assets]);

  const currency = props.currentChain?.nativeCurrency;

  return (
    <Web3ConfigProvider
      locale={props.locale}
      account={account}
      chain={props.currentChain}
      balance={
        props.balance
          ? {
              symbol: currency?.symbol,
              decimals: currency?.decimals,
              value: balanceData,
              icon: currency?.icon,
            }
          : undefined
      }
      addressPrefix=""
      availableChains={chainList}
      availableWallets={wallets}
      price={{ symbol: currency?.symbol, decimals: currency?.decimals }}
      switchWallet={async (_wallet) => {
        const walletName = (_wallet?.name as WalletName) ?? null;

        setCurrentWalletName(walletName);
        selectWallet(walletName);
      }}
      switchChain={async (_chain) => {
        const foundChain = props.availableChains.find((c) => c.id === _chain.id);
        props.onCurrentChainChange?.(foundChain ?? solana);
        selectWallet(currentWalletName);
      }}
      connect={async (_wallet) => {
        if (!isSolanaChain(props.currentChain?.id)) {
          console.warn('SolanaWeb3ConfigProvider only support solana chain.');
        }

        const walletName = (_wallet?.name as WalletName) ?? null;
        selectWallet(walletName);
        setCurrentWalletName(walletName);
      }}
      disconnect={async () => {
        props.onCurrentChainChange?.();
      }}
      getNFTMetadata={async ({ address }) => {
        const mx = new Metaplex(connection);
        const nftClient = mx.nfts();
        const mintAddress = new PublicKey(address);
        const metadata = await nftClient.findByMint({ mintAddress });

        return {
          name: metadata.json?.name,
          image: metadata.json?.image,
          description: metadata.json?.description,
          attributes: metadata.json?.attributes,
        };
      }}
    >
      {props.children}
    </Web3ConfigProvider>
  );
};
