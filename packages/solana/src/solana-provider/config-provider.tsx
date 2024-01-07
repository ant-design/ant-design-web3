import React, { useEffect, useMemo, useState } from 'react';

import type { Chain, Locale, Wallet, Account } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import type { WalletName } from '@solana/wallet-adapter-base';
import { type Adapter } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Metaplex, PublicKey } from '@metaplex-foundation/js';

export interface AntDesignWeb3ConfigProviderProps extends React.PropsWithChildren {
  locale?: Locale;
  assets?: Chain[];
  availableChains: Chain[];
  availableConnectors: Adapter[];
}

export const AntDesignWeb3ConfigProvider: React.FC<AntDesignWeb3ConfigProviderProps> = (props) => {
  const { publicKey, connected, connect, select, disconnect } = useWallet();
  const { connection } = useConnection();

  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    if (!(publicKey && connected)) {
      setAccount(undefined);
      return;
    }

    setAccount({
      address: publicKey.toBase58(),
    });
  }, [publicKey, connected]);

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
      addressPrefix=""
      availableChains={props.availableChains}
      availableWallets={wallets}
      price={{ symbol: 'SOL', decimals: 10 }}
      switchWallet={async (wallet) => select((wallet?.name as WalletName) ?? null)}
      connect={() => connect()}
      disconnect={() => disconnect()}
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
