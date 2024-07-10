import React from 'react';
import type { Balance } from '@ant-design/web3-common';
import { useAccount, useBalance as useWagmiBalance } from 'wagmi';

import { useChain } from './useChain';

export interface UseBalanceOptions {
  showBalance?: boolean;
}

export type UseBalanceResult = Balance | undefined;

export const useBalance = (options?: UseBalanceOptions): UseBalanceResult => {
  const showBalance = options?.showBalance ?? true;
  const { address } = useAccount();
  const { data: balanceData } = useWagmiBalance({
    address: address && showBalance ? address : undefined,
  });
  const chain = useChain();
  const balance = React.useMemo<UseBalanceResult>(() => {
    if (!balanceData) return undefined;
    return {
      symbol: balanceData?.symbol,
      value: balanceData?.value,
      decimals: balanceData?.decimals,
      icon: chain?.nativeCurrency?.icon,
    };
  }, [balanceData, chain]);
  return balance;
};
