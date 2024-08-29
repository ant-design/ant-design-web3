import { metadata_OkxWallet } from '@ant-design/web3-assets';
import { injected } from 'wagmi/connectors';

import type { EthereumWallet } from '../interface';
import { UniversalWallet } from './universal-wallet';

export const OkxWallet: EthereumWallet = (metadata) => {
  return new UniversalWallet(
    {
      ...metadata_OkxWallet,
      ...metadata,
    },
    () =>
      injected({
        target: 'okxWallet',
      }),
  );
};
