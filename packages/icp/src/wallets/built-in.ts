/* v8 ignore start */
import { metadata_Plug } from '@ant-design/web3-assets';
import type { WalletMetadata } from '@ant-design/web3-common';

import { WalletFactory } from './factory';
import type { IcpWalletFactory } from './factory';
import { createPlugWallet } from './plug';

export const PlugWallet = (metadata?: Partial<WalletMetadata>): IcpWalletFactory =>
  WalletFactory(createPlugWallet, { ...metadata_Plug, ...metadata });
