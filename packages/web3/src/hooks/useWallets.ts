import useProvider from './useProvider';

export default function useWallets() {
  const { availableWallets = [] } = useProvider();

  return {
    wallets: availableWallets,
  };
}
