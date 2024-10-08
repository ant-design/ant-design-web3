import type { UniversalWeb3ProviderInterface } from '@ant-design/web3-common';

import useProvider from './useProvider';

export default function useAccount() {
  const { account } = useProvider() as UniversalWeb3ProviderInterface;

  return {
    account,
  };
}
