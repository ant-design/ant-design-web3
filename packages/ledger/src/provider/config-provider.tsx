import { useEffect, useMemo, useState, type FC, type PropsWithChildren } from 'react';
import type { Account, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';

import { useLedgerWallet } from '../adapter/useLedgerWallet';
import type { WalletWithAdapter } from '../types';
import { useLatestWallet } from '../wallets/useLatestWallet';

export interface LedgerConfigProviderProps {
  selectWallet: (wallet?: Wallet | null) => void;
  wallet: WalletWithAdapter;
  balance?: boolean;
  locale?: Locale;
  autoConnect?: boolean;
}

export const LedgerConfigProvider: FC<PropsWithChildren<LedgerConfigProviderProps>> = ({
  children,
  selectWallet,
  wallet,
  // balance: showBalance,
  locale,
  autoConnect,
}) => {
  const { latestWalletNameRef } = useLatestWallet();

  const adapter = useLedgerWallet();
  const [account, setAccount] = useState<Account | undefined>(undefined);

  const { devices } = wallet.adapter!.useLedgerHooks!();

  const disconnect = async () => {
    await adapter.disconnect?.();
    selectWallet(null);
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
  }, [adapter, wallet]);

  const availableWallets = useMemo(() => {
    if (wallet) {
      const _wallet = { ...wallet, hasWalletReady: async () => true };
      return [_wallet];
    }
    return [];
  }, [wallet]);

  useEffect(() => {
    // auto connect
    if (autoConnect && latestWalletNameRef.current && !adapter.name && devices.length > 0) {
      const _wallet = wallet?.name === latestWalletNameRef.current ? wallet : null;
      if (_wallet) {
        selectWallet(_wallet);
      }
    }
  }, [autoConnect, wallet, devices, latestWalletNameRef.current]);

  console.log('account', account);

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
