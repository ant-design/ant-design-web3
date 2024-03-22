import type { WalletMetadata } from '@ant-design/web3-common';

import type { EthersWallet, EthersWalletFactory } from '../interface';

export class UniversalWallet implements EthersWalletFactory {
  constructor(private readonly wallet: WalletMetadata) {}
  create = (): EthersWallet => {
    throw new Error('Method not implemented.');
  };
}
