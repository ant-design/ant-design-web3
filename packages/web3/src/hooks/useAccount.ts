import useProvider from './useProvider';

export default function useAccount() {
  const { account } = useProvider();

  return {
    account,
  };
}
