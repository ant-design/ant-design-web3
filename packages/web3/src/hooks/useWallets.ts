import useProvider from './useProvider';

export default function useWallets() {
  const { wallets = [] } = useProvider();

  return {
    wallets,
  };
}
