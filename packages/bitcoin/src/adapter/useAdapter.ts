import React, { createContext, useContext } from 'react';
import type { Account, Balance } from '@ant-design/web3-common';

export interface Adapter {
  provider: any;
  account?: Account;
  balance?: Balance;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  signMessage: (message: string) => Promise<void>;
  sendBitcoin: (
    to: string,
    sats: number,
    options?: { feeRate: number },
  ) => Promise<string | undefined>;
}

export const BitcoinAdapterContext = createContext<Adapter>({} as Adapter);

export const useAdapter = () => {
  const adapter = useContext(BitcoinAdapterContext);
  return adapter;
};
