import { createContext, useContext } from 'react';

import type { LedgerWallet } from '../types';

export const LedgerAdapterContext = createContext<LedgerWallet>({} as LedgerWallet);

export const useLedgerWallet = (): LedgerWallet => {
  return useContext(LedgerAdapterContext);
};
