import { type FC, type PropsWithChildren } from 'react';
import { Web3ConfigProvider, type Locale, type Wallet } from '@ant-design/web3-common';

import { useWallet } from '../adapter';

export interface BitcoinWeb3ConfigProviderProps {
  locale?: Locale;
  wallets: Wallet[];
}

export const AntDesignWeb3ConfigProvider: FC<PropsWithChildren<BitcoinWeb3ConfigProviderProps>> = ({
  children,
  locale,
  wallets,
}) => {
  const { selectWallet, balance, account } = useWallet();

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
