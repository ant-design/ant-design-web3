import React, { useCallback, useMemo } from 'react';
import type { Account, Locale, UniversalWeb3ProviderInterface } from '@ant-design/web3-common';
import { Web3ConfigProvider, type Wallet } from '@ant-design/web3-common';
import { SuiColorful } from '@ant-design/web3-icons';
import {
  useConnectWallet,
  useCurrentAccount,
  useDisconnectWallet,
  useResolveSuiNSName,
  useSuiClientMutation,
  useSuiClientQuery,
  useWallets,
} from '@mysten/dapp-kit';

import '@mysten/sui.js/client';

import { SUI_DECIMALS } from '@mysten/sui.js/utils';

import type { SuiChain } from '../chain';

type GetNFTMetadata = Exclude<UniversalWeb3ProviderInterface['getNFTMetadata'], undefined>;

export interface AntDesignWeb3ConfigProviderProps {
  balance?: boolean;
  locale?: Locale;
  availableChains?: SuiChain[];
  currentChain?: SuiChain;
  sns?: boolean;
  onCurrentChainChange: (network: string) => void;
}

export const AntDesignWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<AntDesignWeb3ConfigProviderProps>
> = ({
  balance: showBalance,
  locale,
  availableChains,
  currentChain,
  sns,
  onCurrentChainChange,
  children,
}) => {
  const wallets = useWallets();
  const account = useCurrentAccount();
  const { mutateAsync: connectAsync } = useConnectWallet();
  const { mutateAsync: disconnectAsync } = useDisconnectWallet();
  const { data: snsData } = useResolveSuiNSName(sns ? account?.address : undefined);
  const { mutateAsync: fetchNFTMetadata } = useSuiClientMutation('getObject', {});

  const { data: balanceData } = useSuiClientQuery(
    'getBalance',
    {
      owner: account?.address ?? '',
    },
    {
      select(data) {
        return BigInt(data.totalBalance);
      },
    },
  );

  const accountData: Account | undefined = account
    ? {
        address: account.address,
        name: sns && snsData ? snsData : undefined,
      }
    : undefined;

  const availableWallets = useMemo<Wallet[]>(() => {
    return wallets.map((w) => {
      return {
        name: w.name,
        icon: w.icon,
        remark: w.name,
        async hasExtensionInstalled() {
          return true;
        },
        async hasWalletReady() {
          return true;
        },
      };
    });
  }, [wallets]);

  const getNFTMetadataFunc = useCallback<GetNFTMetadata>(async ({ address, tokenId }) => {
    const { data: nftData } = await fetchNFTMetadata({
      id: address,
      options: {
        showContent: true,
        showDisplay: true,
      },
    });

    const displayData = nftData?.display?.data;
    const objectFields: Record<string, any> | undefined =
      nftData?.content?.dataType === 'moveObject' ? nftData.content.fields : undefined;

    return {
      image: displayData?.image_url,
      date: objectFields?.birthdate,
      attributes: objectFields?.attributes,
      description: displayData?.description,
      edition: nftData?.version,
    };
  }, []);

  return (
    <Web3ConfigProvider
      availableChains={availableChains}
      availableWallets={availableWallets}
      locale={locale}
      account={accountData}
      chain={currentChain}
      balance={
        showBalance
          ? {
              symbol: 'SUI',
              decimals: SUI_DECIMALS,
              value: balanceData,
              icon: <SuiColorful />,
            }
          : undefined
      }
      connect={async (wallet) => {
        if (!wallet) return;

        await connectAsync({ wallet: wallets.find((w) => w.name === wallet.name)! });
      }}
      disconnect={async () => {
        await disconnectAsync();
      }}
      switchChain={async (chain) => {
        const network = availableChains?.find((item) => item.id === chain.id)?.network;

        if (network) {
          onCurrentChainChange(network);
        }
      }}
      getNFTMetadata={getNFTMetadataFunc}
    >
      {children}
    </Web3ConfigProvider>
  );
};
