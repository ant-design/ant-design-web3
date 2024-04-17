import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import {
  Web3ConfigProvider,
  type Balance,
  type Locale,
  type Wallet,
} from '@ant-design/web3-common';

import { useAdapter } from '../adapter';

export interface BitcoinConfigProviderProps {
  locale?: Locale;
  wallets: Wallet[];
  selectWallet: (wallet?: Wallet | null) => void;
  balance: boolean;
}

export const BitcoinConfigProvider: FC<PropsWithChildren<BitcoinConfigProviderProps>> = ({
  children,
  locale,
  wallets,
  selectWallet,
  balance: showBalance,
}) => {
  const { getBalance, account } = useAdapter();
  const [balance, setBalance] = useState<Balance>();

  useEffect(() => {
    if (!showBalance) return;
    getBalance?.().then((b) => setBalance(b));
  }, [showBalance, getBalance]);

  return (
    <Web3ConfigProvider
      addressPrefix={false}
      locale={locale}
      availableWallets={wallets}
      balance={balance}
      account={account}
      connect={async (wallet) => {
        selectWallet(wallet);
      }}
      disconnect={async () => {
        selectWallet(null);
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};
