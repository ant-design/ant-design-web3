import { metadata_MetaMask } from '@ant-design/web3-assets';
import { injected } from 'wagmi/connectors';

import type { EthereumWallet } from '../interface';
import { UniversalWallet } from './universal-wallet';

export const MetaMask: EthereumWallet = (metadata) => {
  return new UniversalWallet(
    {
      ...metadata_MetaMask,
      ...metadata,
    },
    () =>
      injected({
        target: 'metaMask',
      }),
  );
};
