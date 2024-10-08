import type { UniversalWeb3ProviderInterface } from '@ant-design/web3-common';

import useProvider from './useProvider';

export default function useConnection() {
  const { connect, disconnect } = useProvider() as UniversalWeb3ProviderInterface;

  return {
    connect,
    disconnect,
  };
}
