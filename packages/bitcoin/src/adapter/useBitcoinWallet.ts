import React from 'react';
import type { Account, Balance } from '@ant-design/web3-common';

import type { SignPsbtParams, SignPsbtResult, TransferParams } from '../types';

export interface BitcoinWallet {
  name: string;
  provider: any;
  account?: Account;
  getBalance: () => Promise<Balance>;
  connect: () => Promise<void>;
  signMessage: (message: string) => Promise<string>;
  sendTransfer: (prams: TransferParams) => Promise<string>;
  signPsbt: (params: SignPsbtParams) => Promise<SignPsbtResult>;
}

export const BitcoinAdapterContext = React.createContext<BitcoinWallet>({} as BitcoinWallet);

export const useBitcoinWallet = () => {
  const adapter = React.useContext(BitcoinAdapterContext);
  return adapter;
};
