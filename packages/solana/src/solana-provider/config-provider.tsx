import React, { useEffect, useMemo, useState } from 'react';
import { Solana } from '@ant-design/web3-assets';
import type { Account, Chain, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import { Metaplex, PublicKey } from '@metaplex-foundation/js';
import type { Adapter, WalletName } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

export interface AntDesignWeb3ConfigProviderProps extends React.PropsWithChildren {
  locale?: Locale;
  assets?: Chain[];
  availableChains: Chain[];
  availableConnectors: Adapter[];
}

export const AntDesignWeb3ConfigProvider: React.FC<AntDesignWeb3ConfigProviderProps> = (props) => {
  const { publicKey, connected, connect, select: selectWallet, disconnect, wallet } = useWallet();
  const { connection } = useConnection();

  const [balance, setBalance] = useState<bigint>();
  const [account, setAccount] = useState<Account>();
  const [currentChain, setCurrentChain] = useState<Chain | undefined>(() => Solana);
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
    if (!(connection && publicKey)) {
      return;
    }

    const getBalance = async () => {
      const balanceVal = await connection.getBalance(publicKey);
      setBalance(BigInt(balanceVal));
    };

    getBalance();
  }, [connection, publicKey]);

  // connect/disconnect wallet
  useEffect(() => {
    if (wallet?.adapter.name && currentChain?.id === Solana.id) {
      connect();
    } else {
      disconnect();
    }
  }, [wallet?.adapter.name, currentChain?.id]);

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

  return (
    <Web3ConfigProvider
      locale={props.locale}
      account={account}
      chain={currentChain}
      balance={
        balance
          ? {
              symbol: 'SOL',
              decimals: 10,
              value: balance,
              icon: currentChain?.nativeCurrency?.icon,
            }
          : undefined
      }
      addressPrefix=""
      availableChains={props.availableChains}
      availableWallets={wallets}
      price={{ symbol: 'SOL', decimals: 10 }}
      switchWallet={async (_wallet) => {
        const walletName = (_wallet?.name as WalletName) ?? null;

        setCurrentWalletName(walletName);
        selectWallet(walletName);
      }}
      switchChain={async (_chain) => {
        setCurrentChain(_chain);
        selectWallet(currentWalletName);
      }}
      connect={async (_wallet) => {
        const walletName = (_wallet?.name as WalletName) ?? null;

        selectWallet(walletName);
        setCurrentWalletName(walletName);
        setCurrentChain(Solana);
      }}
      disconnect={async () => {
        setCurrentChain(undefined);
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
