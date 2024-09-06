import { metadata_imToken } from '@ant-design/web3-assets';
import { injected } from 'wagmi/connectors';

import type { EthereumWallet } from '../interface';
import { UniversalWallet } from './universal-wallet';

export const ImToken: EthereumWallet = (metadata) => {
  return new UniversalWallet(
    {
      ...metadata_imToken,
      ...metadata,
    },
    () =>
      injected({
        target: 'imToken',
      }),
  );
};
