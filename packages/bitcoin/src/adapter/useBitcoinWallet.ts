import React from 'react';
import type { Account, Balance } from '@ant-design/web3-common';

import * as Types from '../types';

export interface BitcoinWallet {
  name: string;
  provider: any;
  account?: Account;
  getBalance: () => Promise<Balance | undefined>;
  connect: () => Promise<void>;
  signMessage: (message: string) => Promise<string | undefined>;
  sendTransfer: (
    to: string,
    sats: number,
    options?: { feeRate: number },
  ) => Promise<string | undefined>;
  signPsbt: (params: Types.SignPsbtParams) => Promise<Types.SignPsbtResult | undefined>;
}

export const BitcoinAdapterContext = React.createContext<BitcoinWallet>({} as BitcoinWallet);

export const useBitcoinWallet = () => {
  const adapter = React.useContext(BitcoinAdapterContext);
  return adapter;
};
