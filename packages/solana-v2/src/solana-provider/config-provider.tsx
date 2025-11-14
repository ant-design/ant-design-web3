import { useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import type { Account, Chain, Locale, Wallet } from '@ant-design/web3-common';
import { ConnectStatus, Web3ConfigProvider } from '@ant-design/web3-common';
import { address } from '@solana/kit';
import { useSignIn } from '@solana/react';
import { SOLANA_CHAINS } from '@solana/wallet-standard';
import { StandardConnect, StandardDisconnect, type IdentifierString } from '@wallet-standard/core';
import { useConnect, useDisconnect, useWallets, type UiWallet } from '@wallet-standard/react';

import type { SolanaChainConfig } from '../chains';
import { useRpc } from './rpc-provider';

interface ProviderCommonProps extends PropsWithChildren {
  locale?: Locale;
  chainAssets?: Chain[];
  availableChains: SolanaChainConfig[];
  currentChain?: SolanaChainConfig;
  balance?: boolean;
  onCurrentChainChange: (chain?: SolanaChainConfig) => void;
}

interface AntDesignWeb3ConfigProviderInnerProps extends ProviderCommonProps {
  uiWallet?: UiWallet;
}

export function AntDesignWeb3ConfigProviderInner(props: AntDesignWeb3ConfigProviderInnerProps) {
  const [uiWallet, setUiWallet] = useState<UiWallet>();

  const wallets = useWallets();

  const standardSolanaWallets = useMemo(
    () =>
      wallets.filter((w) => {
        return (
          // only include solana chains
          w.chains.some((c) => (SOLANA_CHAINS as unknown as IdentifierString[]).includes(c)) &&
          // only include standard:connect and standard:disconnect features
          w.features.includes(StandardConnect) &&
          w.features.includes(StandardDisconnect)
        );
      }),
    [wallets],
  );

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

  const availableWallets = useMemo(() => {
    return standardSolanaWallets.map<Wallet>((w) => {
      return {
        name: w.name,
        remark: w.name,
        icon: w.icon,
        hasExtensionInstalled: () => Promise.resolve(true),
        hasWalletReady: () => Promise.resolve(true),
      };
    });
  }, [standardSolanaWallets]);

  const adapter = useMemo(() => {
    if (uiWallet) {
      return (
        <AntDesignWeb3ConfigProviderWithWalletAdapter
          uiWallet={uiWallet}
          chainList={chainList}
          availableWallets={availableWallets}
          availableChains={props.availableChains}
          currentChain={props.currentChain}
          balance={props.balance}
          locale={props.locale}
          onCurrentChainChange={props.onCurrentChainChange}
        >
          {props.children}
        </AntDesignWeb3ConfigProviderWithWalletAdapter>
      );
    } else {
      return (
        <AntDesignWeb3ConfigProviderWithoutWalletAdapter
          chainList={chainList}
          availableWallets={availableWallets}
          availableChains={props.availableChains}
          onCurrentChainChange={props.onCurrentChainChange}
          onConnectWallet={(wallet) => {
            const foundUiWallet = wallets.find((w) => w.name === wallet?.name);

            setUiWallet(foundUiWallet);
          }}
        >
          {props.children}
        </AntDesignWeb3ConfigProviderWithoutWalletAdapter>
      );
    }
  }, [availableWallets, chainList, props.availableChains, props.children, uiWallet, wallets]);

  return adapter;
}

interface AntDesignWeb3ConfigProviderWithWalletAdapterProps extends ProviderCommonProps {
  chainList: (Chain & SolanaChainConfig)[];
  availableWallets: Wallet[];
  uiWallet: UiWallet;
}

function AntDesignWeb3ConfigProviderWithWalletAdapter(
  props: AntDesignWeb3ConfigProviderWithWalletAdapterProps,
) {
  const { uiWallet, ...othersProps } = props;

  const { rpc } = useRpc();

  const [account, setAccount] = useState<Account>();
  const [balance, setBalance] = useState<bigint>();

  const signIn = useSignIn(uiWallet);
  const [isConnecting, connect] = useConnect(uiWallet);
  const [isDisconnecting, disconnect] = useDisconnect(uiWallet);

  const handleConnectWallet = async () => {
    const result = await connect();

    if (result.length > 0) {
      const defaultAccount = result[0];
      setAccount({
        address: defaultAccount.address,
        name: defaultAccount.label,
        avatar: defaultAccount.icon,
        status: ConnectStatus.Connected,
      });
    }
    console.log('connect result', result);
  };

  // get balance
  useEffect(() => {
    if (!(account && othersProps.balance)) {
      return;
    }

    const getBalance = async () => {
      const { value: balanceVal } = await rpc.getBalance(address(account.address)).send();

      setBalance(balanceVal);
    };
    getBalance();
  }, [account, othersProps.balance, rpc]);

  useEffect(() => {
    handleConnectWallet();
  }, [uiWallet]);

  const currentChain = useMemo(() => {
    return othersProps.chainList.find((c) => c.id === othersProps.currentChain?.id);
  }, [othersProps.chainList, othersProps.currentChain]);

  const currency = currentChain?.nativeCurrency;

  return (
    <Web3ConfigProvider
      locale={othersProps.locale}
      account={account}
      balance={
        othersProps.balance
          ? {
              value: balance,
              icon: currency?.icon,
              symbol: currency?.symbol,
              decimals: currency?.decimals,
            }
          : undefined
      }
      chain={othersProps.currentChain}
      addressPrefix={false}
      availableChains={othersProps.chainList}
      availableWallets={othersProps.availableWallets}
      switchChain={async (_chain) => {
        console.log('[TODO] with_wallet switchChain', _chain);
        const foundChain = othersProps.chainList.find((c) => c.id === _chain.id);
        othersProps.onCurrentChainChange(foundChain);
      }}
      connect={async (_wallet) => {
        console.log('[TODO] with_wallet connect', _wallet);
        // othersProps.onConnectWallet(_wallet);
      }}
      disconnect={async () => {
        console.log('[TODO] with_wallet disconnect');
      }}
    >
      {othersProps.children}
    </Web3ConfigProvider>
  );
}

interface AntDesignWeb3ConfigProviderWithoutWalletAdapterProps extends ProviderCommonProps {
  chainList: (Chain & SolanaChainConfig)[];
  availableWallets?: Wallet[];
  onConnectWallet: (wallet?: Wallet) => void;
}

function AntDesignWeb3ConfigProviderWithoutWalletAdapter(
  props: AntDesignWeb3ConfigProviderWithoutWalletAdapterProps,
) {
  return (
    <Web3ConfigProvider
      locale={props.locale}
      account={undefined}
      balance={undefined}
      chain={props.currentChain}
      addressPrefix={false}
      availableChains={props.chainList}
      availableWallets={props.availableWallets}
      switchChain={async (_chain) => {
        console.log('[TODO] without_wallet switchChain', _chain);
        const foundChain = props.chainList.find((c) => c.id === _chain.id);
        props.onCurrentChainChange(foundChain);
      }}
      connect={async (_wallet) => {
        console.log('[TODO] without_wallet connect', _wallet);
        props.onConnectWallet(_wallet);
      }}
      disconnect={async () => {
        console.log('[TODO] without_wallet disconnect');
      }}
    >
      {props.children}
    </Web3ConfigProvider>
  );
}
