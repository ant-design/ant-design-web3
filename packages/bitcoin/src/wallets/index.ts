/**
 * wallets 是将 adapter 与钱包静态信息一起封装
 */
import { metadata_Unisat, metadata_Xverse } from '@ant-design/web3-assets';

import { UnisatBitcoinWallet, XverseBitcoinWallet } from '../adapter';
import { WalletFactory } from './factory';

export const UnisatWallet = () =>
  WalletFactory(new UnisatBitcoinWallet(metadata_Unisat.name), metadata_Unisat);
export const XverseWallet = () =>
  WalletFactory(new XverseBitcoinWallet(metadata_Xverse.name), metadata_Xverse);
