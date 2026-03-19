import React, { useCallback, useMemo } from 'react';
import { SUI } from '@ant-design/web3-assets/tokens';
import type { Account, Locale, UniversalWeb3ProviderInterface } from '@ant-design/web3-common';
import { Web3ConfigProvider, type Wallet } from '@ant-design/web3-common';
import { SuiColorful } from '@ant-design/web3-icons';
import {
  useConnectWallet,
  useCurrentAccount,
  useDisconnectWallet,
  useResolveSuiNSName,
  useSuiClient,
  useSuiClientQuery,
  useWallets,
} from '@mysten/dapp-kit';

import type { SuiChain } from '../chain';
import type { WalletFactory } from '../wallets/types';

type GetNFTMetadata = NonNullable<UniversalWeb3ProviderInterface['getNFTMetadata']>;

export interface AntDesignWeb3ConfigProviderProps {
  balance?: boolean;
  locale?: Locale;
  availableChains?: SuiChain[];
  availableWallets?: WalletFactory[];
  currentChain?: SuiChain;
  sns?: boolean;
  onCurrentChainChange: (network: string) => void;
  /**
   * If true, this provider's configuration will be ignored when merging with parent context.
   * This is useful when you have multiple chain providers and want to switch between them
   * without causing page flickering. Only the active provider should not have this flag set.
   */
  ignoreConfig?: boolean;
}

export const AntDesignWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<AntDesignWeb3ConfigProviderProps>
> = ({
  balance: showBalance,
  locale,
  availableChains,
  availableWallets,
  currentChain,
  sns,
  onCurrentChainChange,
  ignoreConfig,
  children,
}) => {
  const account = useCurrentAccount();
  const standardWallets = useWallets();
  const { mutateAsync: connectAsync } = useConnectWallet();
  const { mutateAsync: disconnectAsync } = useDisconnectWallet();
  const { data: snsData } = useResolveSuiNSName(sns ? account?.address : undefined);
  const client = useSuiClient();

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

  const allWallets = useMemo<Wallet[]>(() => {
    const standardWalletNames = standardWallets.map((w) => w.name);

    const fixedWallets = availableWallets
      ?.map((factory) => factory.create())
      ?.filter((w) => !standardWalletNames.includes(w.name));

    const injectedWalletAssets = standardWallets.map<Wallet>((w) => {
      return {
        name: w.name,
        icon: w.icon,
        remark: w.name,
        _standardWallet: w,
        async hasExtensionInstalled() {
          return true;
        },
        async hasWalletReady() {
          return true;
        },
      };
    });

    return fixedWallets ? fixedWallets.concat(injectedWalletAssets) : injectedWalletAssets;
  }, [availableWallets, standardWallets]);

  const getNFTMetadataFunc = useCallback<GetNFTMetadata>(
    async ({ address }) => {
      const { data: nftData } = await client.getObject({
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
    },
    [client],
  );

  return (
    <Web3ConfigProvider
      availableChains={availableChains}
      availableWallets={allWallets}
      locale={locale}
      account={accountData}
      chain={currentChain}
      balance={
        showBalance
          ? {
              symbol: SUI.symbol,
              decimals: SUI.decimal,
              value: balanceData,
              icon: <SuiColorful />,
            }
          : undefined
      }
      connect={async (wallet) => {
        const foundWallet = wallet?._standardWallet;

        if (!foundWallet) {
          throw new Error(`Can not find wallet ${wallet?.name}`);
        }

        const { accounts } = await connectAsync({ wallet: foundWallet });
        const defaultAccount = accounts[0];
        const addresses = accounts.map((item) => item.address) as unknown as Account['addresses'];

        return {
          address: defaultAccount.address,
          addresses: addresses,
        };
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
      ignoreConfig={ignoreConfig}
    >
      {children}
    </Web3ConfigProvider>
  );
};
