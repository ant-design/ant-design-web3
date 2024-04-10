import { useState, type FC, type PropsWithChildren } from 'react';
import type { Account, Balance, Locale, Wallet } from '@ant-design/web3-common';

import { BitcoinWalletContext } from '../adapter/useWallet';
import { UnisatWallet, XverseWallet, type Provider } from '../adapter/wallet';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface BitcoinWeb3ConfigProviderProps {
  // 钱包显式传入
  wallets: Wallet[];
  locale?: Locale;
}

export const BitcoinWeb3ConfigProvider: FC<PropsWithChildren<BitcoinWeb3ConfigProviderProps>> = ({
  children,
  wallets,
}) => {
  const [account, setAccount] = useState<Account>();
  const [balance, setBalance] = useState<Balance>();
  const [provider, setProvider] = useState<Provider>();

  const selectWallet = async (wallet?: Wallet | null) => {
    if (!wallet) {
      setAccount(undefined);
      setBalance(undefined);
      return;
    }
    let provider;
    switch (wallet.name) {
      case 'Xverse':
        provider = new XverseWallet();
        break;
      case 'Unisat':
        provider = new UnisatWallet();
        break;
      default:
        break;
    }
    if (!provider) return;
    await provider.connect();
    setProvider(provider);
    setAccount(provider.account);
    setBalance(provider.balance);
  };

  return (
    <BitcoinWalletContext.Provider
      value={{
        selectWallet,
        account,
        balance,
        signMessage: async (message) => {
          await provider?.signMessage(message);
        },
      }}
    >
      <AntDesignWeb3ConfigProvider wallets={wallets}>{children}</AntDesignWeb3ConfigProvider>
    </BitcoinWalletContext.Provider>
  );
};
