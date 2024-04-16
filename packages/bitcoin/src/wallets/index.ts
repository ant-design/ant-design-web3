/**
 * wallets 是将 adapter 与钱包静态信息一起封装
 */
import { metadata_Unisat, metadata_Xverse } from '@ant-design/web3-assets';

import { UnisatAdapter, XverseAdapter } from '../adapter';
import { WalletFactory } from './factory';

export const UnisatWallet = () =>
  WalletFactory(new UnisatAdapter(metadata_Unisat.name), metadata_Unisat);
export const XverseWallet = () =>
  WalletFactory(new XverseAdapter(metadata_Xverse.name), metadata_Xverse);
