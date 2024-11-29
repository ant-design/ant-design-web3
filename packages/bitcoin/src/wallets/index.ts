/* v8 ignore start */
import {
  metadata_OkxWallet,
  metadata_Phantom,
  metadata_Unisat,
  metadata_Xverse,
} from '@ant-design/web3-assets';

import {
  OkxBitcoinWallet,
  PhantomBitcoinWallet,
  UnisatBitcoinWallet,
  XverseBitcoinWallet,
} from '../adapter';
import { WalletFactory } from './factory';

export const UnisatWallet = () => WalletFactory(UnisatBitcoinWallet, metadata_Unisat);
export const XverseWallet = () => WalletFactory(XverseBitcoinWallet, metadata_Xverse);
export const OkxWallet = () => WalletFactory(OkxBitcoinWallet, metadata_OkxWallet);
export const PhantomWallet = () => WalletFactory(PhantomBitcoinWallet, metadata_Phantom);
