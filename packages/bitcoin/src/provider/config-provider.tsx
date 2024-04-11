import { type FC, type PropsWithChildren } from 'react';
import { Web3ConfigProvider, type Locale, type Wallet } from '@ant-design/web3-common';

import { useAdapter } from '../adapter';

export interface BitcoinWeb3ConfigProviderProps {
  locale?: Locale;
  wallets: Wallet[];
  selectWallet: (wallet?: Wallet | null) => void;
}

export const AntDesignWeb3ConfigProvider: FC<PropsWithChildren<BitcoinWeb3ConfigProviderProps>> = ({
  children,
  locale,
  wallets,
  selectWallet,
}) => {
  const { balance, account } = useAdapter();

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
