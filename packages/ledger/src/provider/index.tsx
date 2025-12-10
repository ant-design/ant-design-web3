import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import { Account, Web3ConfigProvider, type Locale, type Wallet } from '@ant-design/web3-common';

import { Ledger } from '../ledger';
import { LedgerConfigProvider } from './config-provider';
import { useLatestWallet } from './useLatestWallet';

export interface LedgerWeb3ConfigProviderProps {
  ledger: Ledger;
  locale?: Locale;
  // balance?: boolean;
  autoConnect?: boolean;
}

export const LedgerWeb3ConfigProvider: FC<PropsWithChildren<LedgerWeb3ConfigProviderProps>> = ({
  children,
  ledger,
  // balance = false,
  locale,
  autoConnect,
}) => {
  const [account, setAccount] = useState<Account | undefined>(undefined);
  const { cacheSelectedWallet, latestWalletNameRef } = useLatestWallet();

  const connect = async (selected?: Wallet) => {
    if (!selected) {
      return;
    }
    if (selected.name === ledger.wallet.name) {
      await ledger.disconnect();
      await ledger.connect();
      cacheSelectedWallet(selected.name);
      setAccount(ledger.accounts[0]);
    }
  };

  const disconnect = async () => {
    await ledger.disconnect();
    cacheSelectedWallet();
    setAccount(undefined);
  };

  useEffect(() => {
    // auto connect
    if (
      autoConnect &&
      latestWalletNameRef.current &&
      ledger.wallet.name === latestWalletNameRef.current
    ) {
      connect(ledger.wallet);
    }
  }, [autoConnect]);

  return (
    <Web3ConfigProvider
      locale={locale}
      account={account}
      connect={connect}
      disconnect={disconnect}
      availableWallets={[ledger.wallet]}
    >
      {children}
    </Web3ConfigProvider>
  );
};
