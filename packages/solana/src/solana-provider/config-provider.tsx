import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { Account, Chain, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import { Metaplex, PublicKey } from '@metaplex-foundation/js';
import { type WalletConnectionError, type WalletName } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

import type { SolanaChainConfig } from '../chains';
import { hasWalletReady } from '../utils';

interface ConnectAsync {
  promise: Promise<void>;
  resolve: () => void;
  reject: (reason: any) => void;
}

export interface AntDesignWeb3ConfigProviderProps {
  locale?: Locale;
  chainAssets?: Chain[];
  availableChains: SolanaChainConfig[];
  balance?: boolean;
  currentChain?: SolanaChainConfig;
  availableWallets: Wallet[];
  connectionError?: WalletConnectionError;
  onCurrentChainChange?: (chain?: SolanaChainConfig) => void;
}

export const AntDesignWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<AntDesignWeb3ConfigProviderProps>
> = (props) => {
  const { publicKey, connected, connect, select: selectWallet, disconnect, wallet } = useWallet();

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

  useEffect(() => {
    if (!connectAsyncRef.current) {
      return;
    }

    if (connected) {
      connectAsyncRef.current.resolve();
      connectAsyncRef.current = undefined;
    }
  }, [connected]);

  useEffect(() => {
    if (props.connectionError) {
      connectAsyncRef.current?.reject(props.connectionError);
      connectAsyncRef.current = undefined;
    }
  }, [props.connectionError]);

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
    if (wallet?.adapter?.name) {
      // if wallet is not ready, need clear selected wallet
      if (!hasWalletReady(wallet.adapter)) {
        selectWallet(null);
      }

      connect();
    } else {
      if (connected) {
        disconnect();
      }
    }
  }, [
    wallet,
    wallet?.adapter?.name,
    props.currentChain,
    connect,
    disconnect,
    connected,
    selectWallet,
  ]);

  const chainList = useMemo(() => {
    return props.availableChains
      .map((item) => {
        const c = props.chainAssets?.find((asset) => {
          return asset.id === item.id;
        }) as Chain;

        if (c?.id) {
          return {
            ...item,
            ...c,
            id: c.id,
            name: c.name,
            icon: c.icon,
          };
        }
        console.error(
          `Can not find chain ${item.id}, SolanaWeb3ConfigProvider only support Solana`,
        );
        return null;
      })
      .filter((item) => item !== null) as (Chain & SolanaChainConfig)[];
  }, [props.availableChains, props.chainAssets]);

  const currentChain = useMemo(() => {
    return chainList.find((c) => c.id === props.currentChain?.id);
  }, [props.currentChain, chainList]);

  const currency = currentChain?.nativeCurrency;

  return (
    <Web3ConfigProvider
      locale={props.locale}
      account={account}
      chain={currentChain}
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
      switchChain={async (_chain) => {
        const foundChain = chainList.find((c) => c.id === _chain.id);
        props.onCurrentChainChange?.(foundChain ?? chainList[0]);
        selectWallet(currentWalletName);
      }}
      connect={async (_wallet) => {
        let resolve: any;
        let reject: any;

        const promise = new Promise<void>((res, rej) => {
          resolve = res;
          reject = rej;
        });

        connectAsyncRef.current?.resolve();
        connectAsyncRef.current = { promise, resolve, reject };

        const walletName = (_wallet?.name as WalletName) ?? null;
        selectWallet(walletName);
        setCurrentWalletName(walletName);

        return promise;
      }}
      disconnect={async () => {
        disconnect();
      }}
      getNFTMetadata={async ({ address }) => {
        // TODO: cache metadatas
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
