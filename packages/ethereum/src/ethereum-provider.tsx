import React from 'react';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import type { Account, Wallet } from '@ant-design/web3-common';
import { EthereumEIP1193LikeProvider, type CreateProviderOptions } from './eip1193-provider';
import { UniversalProvider, UniversalWeb3ProviderEventType } from './universal-provider';

export interface Web3ProviderProps {
  provider: EthereumEIP1193LikeProvider;
  children?: React.ReactNode;
}

export const EthereumProvider: React.FC<Web3ProviderProps> = (props) => {
  const [accounts, setAccounts] = React.useState<Account[]>([]);
  const [wallets, setWallets] = React.useState<Wallet[]>([]);
  const { children, provider: eip1193Provider } = props;

  const provider = React.useMemo(() => {
    return new UniversalProvider(eip1193Provider);
  }, [eip1193Provider]);

  React.useEffect(() => {
    const getAvaliableWallets = async () => {
      const avaliableWallets = await provider.getAvaliableWallets();
      setWallets(avaliableWallets);
    };
    getAvaliableWallets();
  }, [provider]);

  React.useEffect(() => {
    const handleAccountsChanged = (newAccounts: Account[]) => {
      setAccounts(newAccounts);
    };
    provider.on(UniversalWeb3ProviderEventType.AccountsChanged, handleAccountsChanged);
    return () => {
      provider.off(UniversalWeb3ProviderEventType.AccountsChanged, handleAccountsChanged);
    };
  }, [provider]);

  return (
    <Web3ConfigProvider accounts={accounts} wallets={wallets} {...provider}>
      {children}
    </Web3ConfigProvider>
  );
};

export function createProvider(options: CreateProviderOptions): EthereumEIP1193LikeProvider {
  if (options?.chains?.length && options?.chains?.length > 1) {
    throw new Error('Not support multiple chains now.');
  }
  return new EthereumEIP1193LikeProvider(options);
}
