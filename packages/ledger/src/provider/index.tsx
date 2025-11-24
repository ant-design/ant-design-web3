import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import type { Locale, Wallet } from '@ant-design/web3-common';

import { LedgerAdapterContext, useLedgerWallet } from '../adapter/useLedgerWallet';
import type { LedgerWallet, WalletFactory, WalletWithAdapter } from '../types';
import { useLatestWallet } from '../wallets/useLatestWallet';
import { LedgerConfigProvider } from './config-provider';

export interface LedgerWeb3ConfigProviderProps {
  wallet?: WalletFactory;
  locale?: Locale;
  // balance?: boolean;
  autoConnect?: boolean;
}

export const LedgerWeb3ConfigProvider: FC<PropsWithChildren<LedgerWeb3ConfigProviderProps>> = ({
  children,
  wallet: initWallet,
  // balance = false,
  locale,
  autoConnect,
}) => {
  const [adapter, setAdapter] = useState<LedgerWallet>({} as LedgerWallet);
  const [wallet, setWallet] = useState<WalletWithAdapter>();

  const { cacheSelectedWallet } = useLatestWallet();

  useEffect(() => {
    if (!initWallet) return;
    setWallet(initWallet.create());
  }, [initWallet]);

  const selectWallet = async (selectedWallet?: Wallet | null) => {
    if (!selectedWallet) {
      // disconnect
      if (adapter) setAdapter({} as LedgerWallet);
      cacheSelectedWallet();
      return;
    }

    const walletWithAdapter = wallet?.name === selectedWallet?.name ? wallet : null;
    const _adapter = walletWithAdapter?.adapter;
    await _adapter?.connect();
    if (_adapter) {
      setAdapter(_adapter);
      cacheSelectedWallet(wallet?.name);
    }
  };

  return (
    <LedgerAdapterContext.Provider value={adapter}>
      {wallet && (
        <LedgerConfigProvider
          selectWallet={selectWallet}
          wallet={wallet}
          // balance={balance}
          locale={locale}
          autoConnect={autoConnect}
        >
          {children}
        </LedgerConfigProvider>
      )}
    </LedgerAdapterContext.Provider>
  );
};
