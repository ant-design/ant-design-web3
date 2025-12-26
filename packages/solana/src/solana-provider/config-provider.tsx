import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { Account, Chain, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import { Metaplex, PublicKey } from '@metaplex-foundation/js';
import {
  WalletReadyState,
  type WalletConnectionError,
  type WalletName,
} from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

import type { SolanaChainConfig } from '../chains';
import { hasWalletReady } from '../utils';
import { WalletConnectWalletAdapter } from '../wallet-connect-adapter';

interface ConnectAsync {
  promise: Promise<Account>;
  resolve: (account?: Account) => void;
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
  autoAddRegisteredWallets?: boolean;
  onCurrentChainChange?: (chain?: SolanaChainConfig) => void;
  /**
   * If true, this provider's configuration will be ignored when merging with parent context.
   * This is useful when you have multiple chain providers and want to switch between them
   * without causing page flickering. Only the active provider should not have this flag set.
   */
  ignoreConfig?: boolean;
}

export const MWA_WALLET_NAME = 'Mobile Wallet Adapter';

export const AntDesignWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<AntDesignWeb3ConfigProviderProps>
> = (props) => {
  const mountRef = useRef(false);

  const {
    publicKey,
    connected,
    connect,
    select: selectWallet,
    disconnect,
    wallet,
    wallets,
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

  useEffect(() => {
    if (!connectAsyncRef.current) {
      return;
    }

    if (connected) {
      connectAsyncRef.current.resolve({ address: publicKey!.toBase58() });
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
    // 初始化时跳过，避免与 wallet-adapter 的自动连接逻辑冲突
    if (!mountRef.current) {
      return;
    }

    if (wallet?.adapter?.name) {
      // if wallet is not ready, need clear selected wallet
      if (!hasWalletReady(wallet.adapter.readyState)) {
        selectWallet(null);
        return;
      }

      connect();
    } else {
      if (connected) {
        disconnect();
      }
    }
  }, [wallet?.adapter?.name, connected]);

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
    }
  }, []);

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

  const availableWallets = useMemo<Wallet[]>(() => {
    const providedWallets = props.availableWallets.map<Wallet>((w) => {
      const adapter = wallets?.find((item) => item.adapter.name === w.name)?.adapter;
      const isWalletConnectAdapter = adapter instanceof WalletConnectWalletAdapter;

      return {
        ...w,

        hasExtensionInstalled: isWalletConnectAdapter
          ? undefined
          : async () => {
              return adapter?.readyState === WalletReadyState.Installed;
            },

        hasWalletReady: async () => {
          return hasWalletReady(adapter?.readyState);
        },
      };
    });

    if (!props.autoAddRegisteredWallets) {
      return providedWallets;
    }

    const providedWalletNames = providedWallets.map((w) => w.name);

    // standard wallets
    const autoRegisteredWallets = wallets
      .filter((w) => !providedWalletNames.includes(w.adapter.name))
      .map<Wallet>((w) => {
        const adapter = w.adapter;

        // MWA is a special case, it's always ready
        if (adapter.name === MWA_WALLET_NAME) {
          return {
            name: adapter.name,
            icon: adapter.icon,
            remark: adapter.name,
            _isMobileWallet: true,
            _standardWallet: adapter,

            hasWalletReady: async () => {
              return true;
            },
          };
        }

        return {
          name: adapter.name,
          icon: adapter.icon,
          remark: adapter.name,
          _standardWallet: adapter,

          hasExtensionInstalled: async () => {
            return adapter.readyState === WalletReadyState.Installed;
          },
          hasWalletReady: async () => {
            return hasWalletReady(adapter.readyState);
          },
        };
      });

    return [...providedWallets, ...autoRegisteredWallets];
  }, [props.availableWallets, wallets, props.autoAddRegisteredWallets]);

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
      availableWallets={availableWallets}
      switchChain={async (_chain) => {
        const foundChain = chainList.find((c) => c.id === _chain.id);
        props.onCurrentChainChange?.(foundChain ?? chainList[0]);
        selectWallet(currentWalletName);
      }}
      connect={async (_wallet, options) => {
        // if the wallet is MWA, just call `connect`, it will pop up the mobile wallet immediately
        if (_wallet?.name === MWA_WALLET_NAME) {
          _wallet._standardWallet?.connect();
          return;
        }

        let resolve: any;
        let reject: any;

        // when use qrCode to connect, need clear selected wallet first.
        if (options?.connectType === 'qrCode') {
          selectWallet(null);
        }

        const promise = new Promise<Account>((res, rej) => {
          resolve = res;
          reject = rej;
        });

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
        // TODO: cache metadata
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
      ignoreConfig={props.ignoreConfig}
    >
      {props.children}
    </Web3ConfigProvider>
  );
};
