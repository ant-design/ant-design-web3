import React, { useEffect, type PropsWithChildren } from 'react';
import {
  Web3ConfigProvider,
  type Account,
  type Balance,
  type Wallet,
} from '@ant-design/web3-common';
import { toUserFriendlyAddress } from '@tonconnect/sdk';

import useTonConnector from '../hooks/useTonConnector';
import { type TonWeb3ConfigProviderProps } from './TonWeb3ConfigProvider';

interface TonConfigProviderProps
  extends Omit<TonWeb3ConfigProviderProps, 'wallets' | 'connectProps'> {
  wallets?: Wallet[];
}

const TonConfigProvider: React.FC<PropsWithChildren<TonConfigProviderProps>> = ({
  children,
  locale,
  balance: showBalance,
  wallets,
}) => {
  const { connector, tonSelectWallet, setTonConnectSdk } = useTonConnector();
  const [balance, setBalance] = React.useState<Balance>();
  const [account, setAccount] = React.useState<Account>();

  useEffect(() => {
    if (!showBalance || !connector) return;
    connector?.getBalance().then((res) => {
      setBalance({
        value: BigInt(res),
      });
    });
  }, [connector, showBalance]);

  useEffect(() => {
    if (tonSelectWallet) {
      setAccount({
        address: toUserFriendlyAddress(tonSelectWallet.account.address),
      });
    } else {
      setAccount(undefined);
    }
  }, [tonSelectWallet]);

  return (
    <Web3ConfigProvider
      addressPrefix={false}
      locale={locale}
      availableWallets={wallets}
      balance={balance}
      account={account}
      connect={async (wallet) => {
        const tonWallets = await connector?.getWallets();
        const selectWallet = tonWallets?.find((w) => w.appName === wallet?.name);
        if (!selectWallet) return;
        connector?.connect(selectWallet);
      }}
      disconnect={async () => {
        await connector?.disconnect();
        if (!connector?.connected) {
          setTonConnectSdk?.(null);
        }
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};

export default TonConfigProvider;
