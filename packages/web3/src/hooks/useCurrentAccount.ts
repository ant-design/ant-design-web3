import React from 'react';
import { Account } from '@ant-design/web3';
import useProvider from './useProvider';

export default function useCurrentAccount() {
  const { provider } = useProvider();
  const [currentAccount, setCurrentAccount] = React.useState<Account | undefined>();
  const refresh = async () => {
    const account = await provider?.getCurrentAccount();
    setCurrentAccount(account);
  };
  React.useEffect(() => {
    refresh();
  });
  return {
    account: currentAccount,
    refresh,
  };
}
