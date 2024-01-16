import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { Account, Chain, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import { Metaplex, PublicKey } from '@metaplex-foundation/js';
import type { WalletName } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

import { isSolanaChain } from './utils';

interface ConnectAsync {
  promise: Promise<void>;
  resolve: () => void;
}

export interface AntDesignWeb3ConfigProviderProps {
  locale?: Locale;
  chainAssets?: Chain[];
  availableChains: Chain[];
  balance?: boolean;
  currentChain?: Chain;
  availableWallets: Wallet[];
  onCurrentChainChange?: (chain?: Chain) => void;
}

export const AntDesignWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<AntDesignWeb3ConfigProviderProps>
> = (props) => {
  const {
    publicKey,
    connected,
    connect,
    select: selectWallet,
    disconnect,
    wallet,
    connecting,
  } = useWallet();

  const { connection } = useConnection();

  const connectAsyncRef = useRef<ConnectAsync>();

  const [balanceData, setBalanceData] = useState<bigint>();
  const [account, setAccount] = useState<Account>();
  const [currentWalletName, setCurrentWalletName] = useState(() => wallet?.adapter?.name ?? null);

  // get account address
  useEffect(() => {
    if (!(publicKey && connected)) {
      setAccount(undefined);
      return;
    }

    setAccount({
      address: publicKey.toBase58(),
    });
  }, [publicKey, connected, wallet?.adapter?.name]);

  useEffect(() => {}, [connecting]);

  useEffect(() => {
    if (!connectAsyncRef.current) {
      return;
    }

    if (connected) {
      connectAsyncRef.current.resolve();
      connectAsyncRef.current = undefined;
    }
  }, [connected]);

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
    if (wallet?.adapter?.name && isSolanaChain(props.currentChain?.id)) {
      connect();
    } else {
      if (connected) {
        disconnect();
      }
    }
  }, [wallet, wallet?.adapter?.name, props.currentChain?.id, connect, disconnect, connected]);

  const chainList = useMemo(() => {
    return props.availableChains
      .map((item) => {
        const c = props.chainAssets?.find((asset) => {
          return asset.id === item.id;
        }) as Chain;

        if (c?.id) {
          return {
            ...item,
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
  }, [props.availableChains, props.chainAssets]);

  const shownCurrentChain = props.currentChain ?? chainList[0];
  const currency = props.currentChain?.nativeCurrency;

  return (
    <Web3ConfigProvider
      locale={props.locale}
      account={account}
      chain={shownCurrentChain}
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
      addressPrefix={false}
      availableChains={chainList}
      availableWallets={props.availableWallets}
      price={{ symbol: currency?.symbol, decimals: currency?.decimals }}
      switchWallet={async (_wallet) => {
        const walletName = (_wallet?.name as WalletName) ?? null;

        setCurrentWalletName(walletName);
        selectWallet(walletName);
      }}
      switchChain={async (_chain) => {
        if (!isSolanaChain(_chain.id)) {
          throw new Error('SolanaWeb3ConfigProvider only support Solana chain.');
        }

        const foundChain = chainList.find((c) => c.id === _chain.id);
        props.onCurrentChainChange?.(foundChain ?? chainList[0]);
        selectWallet(currentWalletName);
      }}
      connect={async (_wallet) => {
        if (!isSolanaChain(props.currentChain?.id)) {
          console.warn('SolanaWeb3ConfigProvider only support Solana chain.');
        }

        let resolve: any;
        const promise = new Promise<void>((res) => {
          resolve = res;
        });

        connectAsyncRef.current?.resolve();
        connectAsyncRef.current = {
          promise,
          resolve,
        };

        const walletName = (_wallet?.name as WalletName) ?? null;
        selectWallet(walletName);
        setCurrentWalletName(walletName);

        return promise;
      }}
      disconnect={async () => {
        disconnect();
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
