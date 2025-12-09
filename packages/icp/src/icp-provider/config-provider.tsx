import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { IcpChain } from '@ant-design/web3-assets/icp';
import type { Account, Chain, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';

import type { IcpWallet } from '../wallets/types';

interface ConnectAsync {
  promise: Promise<Account>;
  resolve: (account?: Account) => void;
  reject: (reason: any) => void;
}

export interface AntDesignWeb3ConfigProviderProps {
  locale?: Locale;
  chainAssets?: Chain[];
  availableChains: IcpChain[];
  balance?: boolean;
  currentChain?: IcpChain;
  availableWallets: Wallet[];
  onCurrentChainChange?: (chain?: IcpChain) => void;
  wallet: IcpWallet;
  principal: string | null;
  connecting: boolean;
  onConnect: () => Promise<void>;
  onDisconnect: () => Promise<void>;
}

export const AntDesignWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<AntDesignWeb3ConfigProviderProps>
> = (props) => {
  const {
    wallet,
    principal,
    connecting,
    onConnect,
    onDisconnect,
    availableChains,
    chainAssets,
    currentChain,
    availableWallets,
    balance,
    locale,
    onCurrentChainChange,
  } = props;

  const connectAsyncRef = useRef<ConnectAsync>();
  const [account, setAccount] = useState<Account>();
  const [balanceData, setBalanceData] = useState<bigint>();

  // get account address
  useEffect(() => {
    if (!principal) {
      setAccount(undefined);
      return;
    }

    setAccount({
      address: principal,
    });
  }, [principal]);

  // connect/disconnect wallet
  useEffect(() => {
    if (connecting && connectAsyncRef.current) {
      // connecting in progress
      return;
    }

    if (principal && connectAsyncRef.current) {
      connectAsyncRef.current.resolve({ address: principal });
      connectAsyncRef.current = undefined;
    }
  }, [principal, connecting]);

  const chainList = useMemo(() => {
    return availableChains
      .map((item) => {
        const c = chainAssets?.find((asset) => {
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
        return item;
      })
      .filter((item) => item !== null) as (Chain & IcpChain)[];
  }, [availableChains, chainAssets]);

  const currentChainData = useMemo(() => {
    return chainList.find((c) => c.id === currentChain?.id);
  }, [currentChain, chainList]);

  const currency = currentChainData?.nativeCurrency;

  return (
    <Web3ConfigProvider
      locale={locale}
      account={account}
      chain={currentChainData}
      balance={
        balance
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
      availableWallets={availableWallets}
      switchChain={async (_chain) => {
        const foundChain = chainList.find((c) => c.id === _chain.id);
        onCurrentChainChange?.(foundChain ?? chainList[0]);
      }}
      connect={async (_wallet, options) => {
        let resolve: any;
        let reject: any;

        const promise = new Promise<Account>((res, rej) => {
          resolve = res;
          reject = rej;
        });

        connectAsyncRef.current = { promise, resolve, reject };

        try {
          await onConnect();
        } catch (error) {
          connectAsyncRef.current.reject(error);
          connectAsyncRef.current = undefined;
          throw error;
        }

        return promise;
      }}
      disconnect={async () => {
        await onDisconnect();
      }}
    >
      {props.children}
    </Web3ConfigProvider>
  );
};
