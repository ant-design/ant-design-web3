import useProvider from './useProvider';

export default function useCurrentAccount() {
  const { accounts } = useProvider();

  return {
    accounts,
    account: accounts?.[0],
  };
}
