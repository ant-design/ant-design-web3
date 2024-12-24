import type { ConfigConsumerProps } from '@ant-design/web3-common';

import useProvider from './useProvider';

export default function useConnection(): Pick<ConfigConsumerProps, 'connect' | 'disconnect'> {
  const { connect, disconnect } = useProvider();

  return {
    connect,
    disconnect,
  };
}
