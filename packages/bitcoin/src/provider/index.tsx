import { useState, type FC, type PropsWithChildren } from 'react';
import {
  Web3ConfigProvider,
  type Account,
  type Balance,
  type Locale,
} from '@ant-design/web3-common';
import { message } from 'antd';
import * as Wallet from 'sats-connect';

import { getBalance } from '../helpers';
import useWallets from '../useXverseWallets';

export interface BitcoinWeb3ConfigProviderProps {
  locale?: Locale;
}

export const BitcoinWeb3ConfigProvider: FC<PropsWithChildren<BitcoinWeb3ConfigProviderProps>> = ({
  children,
  locale,
}) => {
  const [account, setAccount] = useState<Account>();
  const [balance, setBalance] = useState<Balance>();
  const { wallets } = useWallets();

  if (!wallets) return null;

  return (
    <Web3ConfigProvider
      locale={locale}
      balance={balance}
      addressPrefix={false}
      account={account}
      availableWallets={wallets}
      connect={async () => {
        const response = await Wallet.request('getAccounts', {
          purposes: [Wallet.AddressPurpose.Ordinals, Wallet.AddressPurpose.Payment],
        });
        if (response.status === 'error') {
          message.error(response.error.message);
          return;
        }
        const [ordinals, payment] = response.result;
        setAccount({ address: ordinals.address });
        const balance = await getBalance(payment.address);
        setBalance(balance);
      }}
      disconnect={async () => {
        setAccount(undefined);
        return;
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};
