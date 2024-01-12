import { metadata_TokenPocket } from '@ant-design/web3-assets';

import { EthereumWallet } from '../interface';
import { UniversalWallet } from './universal-wallet';

export const TokenPocket: EthereumWallet = (metadata) => {
  return new UniversalWallet({
    ...metadata_TokenPocket,
    ...metadata,
  });
};
