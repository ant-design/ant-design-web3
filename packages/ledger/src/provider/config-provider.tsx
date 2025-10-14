import { useEffect, useMemo, useState, type FC, type PropsWithChildren } from 'react';
import type { Account, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';

import { useLedgerWallet } from '../adapter/useLedgerWallet';
import type { WalletWithAdapter } from '../types';

export interface LedgerConfigProviderProps {
  selectWallet: (wallet?: Wallet | null) => void;
  wallets?: WalletWithAdapter[];
  balance?: boolean;
  locale?: Locale;
}

export const LedgerConfigProvider: FC<PropsWithChildren<LedgerConfigProviderProps>> = ({
  children,
  selectWallet,
  wallets,
  balance: showBalance,
  locale,
}) => {
  const adapter = useLedgerWallet();
  const [account, setAccount] = useState<Account | undefined>(undefined);

  const disconnect = async () => {
    await adapter.disconnect?.();
    setAccount(undefined);
  };

  const connect = async (wallet?: Wallet) => {
    if (!wallet) {
      return;
    }

    await selectWallet(wallet);
  };

  useEffect(() => {
    if (adapter.name && adapter.accounts?.length > 0) {
      setAccount(adapter.accounts[0]);
    } else {
      setAccount(undefined);
    }
  }, [adapter, wallets]);

  const availableWallets = useMemo(() => {
    return wallets?.map((wallet) => {
      return {
        name: wallet.name,
        icon: wallet.icon,
        group: wallet.group,
        remark: wallet.remark,
        extensions: wallet.extensions,
      } as Wallet;
    });
  }, [wallets]);

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
