import React, { createContext, useContext } from 'react';
import type { Account, Balance } from '@ant-design/web3-common';

export interface Adapter {
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
}

export const BitcoinAdapterContext = createContext<Adapter>({} as Adapter);

export const useAdapter = () => {
  const adapter = useContext(BitcoinAdapterContext);
  return adapter;
};
