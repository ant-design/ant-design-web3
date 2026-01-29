import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import { Account, Web3ConfigProvider, type Locale, type Wallet } from '@ant-design/web3-common';

import { Ledger } from '../ledger';
import { useLatestWallet } from './useLatestWallet';

export interface LedgerWeb3ConfigProviderProps {
  ledger?: Ledger;
  locale?: Locale;
  autoConnect?: boolean;
}

export const LedgerWeb3ConfigProvider: FC<PropsWithChildren<LedgerWeb3ConfigProviderProps>> = ({
  children,
  ledger = new Ledger(),
  locale,
  autoConnect = false,
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
    (async () => {
      if (
        autoConnect &&
        latestWalletNameRef.current &&
        ledger.wallet.name === latestWalletNameRef.current
      ) {
        await ledger.disconnect();
        await ledger.connect(true);
        setAccount(ledger.accounts[0]);
      }
    })();
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
