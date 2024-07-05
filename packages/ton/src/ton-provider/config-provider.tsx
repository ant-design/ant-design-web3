import React, { useEffect, type PropsWithChildren } from 'react';
import { Web3ConfigProvider, type Balance, type Wallet } from '@ant-design/web3-common';

import useTonConnector from '../hooks/useTonConnector';
import { type TonWeb3ConfigProviderProps } from './TonWeb3ConfigProvider';

interface TonConfigProviderProps extends Omit<TonWeb3ConfigProviderProps, 'wallets'> {
  wallets?: Wallet[];
}

const TonConfigProvider: React.FC<PropsWithChildren<TonConfigProviderProps>> = ({
  children,
  locale,
  balance: showBalance,
  wallets,
}) => {
  const connector = useTonConnector();
  const [balance, setBalance] = React.useState<Balance>();

  useEffect(() => {
    if (!showBalance) return;
    connector?.getBalance().then((res) => {
      setBalance({
        value: BigInt(res),
      });
    });
  }, [connector, showBalance]);

  return (
    <Web3ConfigProvider
      addressPrefix={false}
      locale={locale}
      availableWallets={wallets}
      balance={balance}
      account={{ address: connector?.account?.address ?? '' }}
      connect={async (wallet) => {
        console.log(wallet);
      }}
      disconnect={async () => {
        connector?.disconnect();
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};

export default TonConfigProvider;
