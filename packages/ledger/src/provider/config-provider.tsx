import { useEffect, useMemo, useState, type FC, type PropsWithChildren } from 'react';
import type { Account, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';

import { Ledger } from '../ledger';
import { useLatestWallet } from './useLatestWallet';

export interface LedgerConfigProviderProps {
  selectWallet: (wallet: Wallet | null) => void;
  ledger: Ledger;
  balance?: boolean;
  locale?: Locale;
  autoConnect?: boolean;
}

export const LedgerConfigProvider: FC<PropsWithChildren<LedgerConfigProviderProps>> = ({
  children,
  selectWallet,
  ledger,
  // balance: showBalance,
  locale,
  autoConnect,
}) => {
  const { latestWalletNameRef } = useLatestWallet();

  const [account, setAccount] = useState<Account | undefined>(undefined);

  const disconnect = async () => {
    await ledger.disconnect();
    selectWallet(null);
  };

  const connect = async (wallet?: Wallet) => {
    if (!wallet) {
      return;
    }

    await selectWallet(wallet);
  };

  useEffect(() => {
    if (ledger.accounts?.length > 0) {
      setAccount(ledger.accounts[0]);
    } else {
      setAccount(undefined);
    }
  }, [ledger]);

  const availableWallets = useMemo(() => {
    if (ledger) {
      const _wallet = { ...ledger.wallet, hasWalletReady: async () => true };
      return [_wallet];
    }
    return [];
  }, [ledger]);

  useEffect(() => {
    // auto connect
    if (
      autoConnect &&
      latestWalletNameRef.current &&
      !ledger.wallet.name &&
      ledger.availableDevices.devices.length > 0
    ) {
      if (ledger.wallet.name === latestWalletNameRef.current) {
        selectWallet(ledger.wallet);
      }
    }
  }, [
    autoConnect,
    ledger.wallet.name,
    ledger.availableDevices.devices.length,
    latestWalletNameRef.current,
  ]);

  return (
    <Web3ConfigProvider
      locale={locale}
      account={account}
      connect={connect}
      disconnect={disconnect}
      availableWallets={availableWallets}
    >
      {children}
    </Web3ConfigProvider>
  );
};
