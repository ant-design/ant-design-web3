import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import { Web3ConfigProvider, type Balance, type Wallet } from '@ant-design/web3-common';

import { useBitcoinWallet } from '../adapter';
import { getInscriptionContentById } from '../helpers';
import type { BitcoinWeb3ConfigProviderProps } from '../index';

export interface BitcoinConfigProviderProps
  extends Omit<BitcoinWeb3ConfigProviderProps, 'wallets'> {
  wallets: Wallet[];
  selectWallet: (wallet?: Wallet | null) => void;
}

export const BitcoinConfigProvider: FC<PropsWithChildren<BitcoinConfigProviderProps>> = ({
  children,
  locale,
  wallets,
  selectWallet,
  balance: showBalance,
}) => {
  const { getBalance, account } = useBitcoinWallet();
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
      getNFTMetadata={async ({ address }) => {
        const image = await getInscriptionContentById(address);
        return {
          image,
        };
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};
