import useProvider from './useProvider';

export default function useAccounts() {
  const { accounts = [] } = useProvider();

  return {
    accounts,
    currentAccount: accounts?.[0],
  };
}
