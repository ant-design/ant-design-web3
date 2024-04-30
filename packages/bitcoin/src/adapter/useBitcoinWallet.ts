import { createContext, useContext } from 'react';
import type { Account, Balance } from '@ant-design/web3-common';

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
}

export const BitcoinAdapterContext = createContext<BitcoinWallet>({} as BitcoinWallet);

export const useBitcoinWallet = () => {
  const adapter = useContext(BitcoinAdapterContext);
  return adapter;
};
