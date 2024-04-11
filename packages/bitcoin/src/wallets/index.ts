/**
 * wallets 是将 adapter 与钱包静态信息一起封装
 */
import { metadata_Leather, metadata_Unisat, metadata_Xverse } from '@ant-design/web3-assets';

import { LeatherAdapter, UnisatAdapter, XverseAdapter } from '../adapter';
import { WalletFactory } from './factory';

export const UnisatWallet = () => WalletFactory(new UnisatAdapter(), metadata_Unisat);
export const XverseWallet = () => WalletFactory(new XverseAdapter(), metadata_Xverse);
export const LeatherWallet = () => WalletFactory(new LeatherAdapter(), metadata_Leather);
