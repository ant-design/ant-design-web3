import type { ConfigConsumerProps } from '@ant-design/web3-common';

import useProvider from './useProvider';

export default function useAccount(): Pick<ConfigConsumerProps, 'account'> {
  const { account } = useProvider();

  return {
    account,
  };
}
