import React, { createContext, useContext } from 'react';
import type { Account, Balance, Wallet } from '@ant-design/web3-common';

export interface BitcoinWalletContextState {
  // 选择钱包
  selectWallet: (wallet?: Wallet | null) => Promise<void>;
  // 账户地址
  account?: Account;
  // 钱包余额
  balance?: Balance;
  // 签名
  signMessage?: (message: string) => Promise<void>;
}

export const BitcoinWalletContext = createContext<BitcoinWalletContextState>(
  {} as BitcoinWalletContextState,
);

export const useWallet = () => {
  return useContext(BitcoinWalletContext);
};
