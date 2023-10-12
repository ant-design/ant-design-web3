import React, { useEffect } from 'react';
import { Account, UniversalWeb3ProviderEventType } from '../types';
import { ConfigContext, Web3ConfigProviderProps, ConfigConsumerProps } from './context';

const ProviderChildren: React.FC<ConfigConsumerProps & { children?: React.ReactNode }> = (
  props,
) => {
  const { children, ...rest } = props;
  return <ConfigContext.Provider value={rest}>{children}</ConfigContext.Provider>;
};

const Web3ConfigProvider: React.FC<Web3ConfigProviderProps> = (props) => {
  const [accounts, setAccounts] = React.useState<Account[]>([]);
  const { provider } = props;
  useEffect(() => {
    const handleAccountsChanged = async (accounts: Account[]) => {
      setAccounts(accounts);
    };
    provider.on(UniversalWeb3ProviderEventType.AccountsChanged, handleAccountsChanged);
    return () => {
      provider.off(UniversalWeb3ProviderEventType.AccountsChanged, handleAccountsChanged);
    };
  }, [provider]);
  return <ProviderChildren accounts={accounts} {...props} />;
};

export { Web3ConfigProvider };

export * from './context';
