import React, { useEffect, type PropsWithChildren } from 'react';
import { Web3ConfigProvider, type Account, type Balance } from '@ant-design/web3-common';
import { TonCircleColorful } from '@ant-design/web3-icons';
import { toUserFriendlyAddress } from '@tonconnect/sdk';

import { useTonConnector } from '../hooks';
import type { TonWallet } from '../wallets/type';
import type { TonWeb3ConfigProviderProps } from './TonWeb3ConfigProvider';

interface TonConfigProviderProps
  extends Omit<TonWeb3ConfigProviderProps, 'wallets' | 'connectConfig'> {
  wallets?: TonWallet[];
  /**
   * If true, this provider's configuration will be ignored when merging with parent context.
   * This is useful when you have multiple chain providers and want to switch between them
   * without causing page flickering. Only the active provider should not have this flag set.
   */
  ignoreConfig?: boolean;
}

const TonConfigProvider: React.FC<PropsWithChildren<TonConfigProviderProps>> = ({
  children,
  locale,
  balance: showBalance,
  wallets,
  ignoreConfig,
}) => {
  const { connector, tonSelectWallet, setTonSelectWallet } = useTonConnector();
  const [balance, setBalance] = React.useState<Balance>();
  const [account, setAccount] = React.useState<Account>();

  useEffect(() => {
    if (!showBalance || !connector) return;
    connector?.getBalance().then((res) => {
      setBalance({
        value: BigInt(res),
      });
    });
  }, [connector, showBalance, tonSelectWallet]);

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
      balance={
        balance
          ? { ...balance, decimals: 9, icon: <TonCircleColorful />, symbol: 'TON' }
          : undefined
      }
      account={account}
      connect={async (wallet) => {
        const walletInfo = wallets?.find((w) => w.appName === wallet?.key);
        connector?.connect(walletInfo!);
      }}
      disconnect={async () => {
        await connector?.disconnect();
        if (!connector?.connected) {
          setTonSelectWallet?.(null);
        }
      }}
      ignoreConfig={ignoreConfig}
    >
      {children}
    </Web3ConfigProvider>
  );
};

export default TonConfigProvider;
