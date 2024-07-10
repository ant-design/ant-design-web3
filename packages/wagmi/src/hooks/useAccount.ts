import React from 'react';
import type { Account } from '@ant-design/web3-common';
import { useEnsAvatar, useEnsName, useAccount as useWagmiAccount } from 'wagmi';

export interface UseAccountOptions {
  showENS?: boolean;
  showAvatar?: boolean;
}

export type UseAccountResult = Account | undefined;

export const useAccount = (options?: UseAccountOptions): UseAccountResult => {
  const showENS = options?.showENS ?? true;
  const showAvatar = options?.showAvatar ?? true;
  const { address, isDisconnected } = useWagmiAccount();
  const { data: ensName } = useEnsName({ address: showENS ? address : undefined });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName && showAvatar ? ensName : undefined });

  const account = React.useMemo<UseAccountResult>(() => {
    if (!address || isDisconnected) return undefined;
    return {
      address,
      name: ensName ?? undefined,
      avatar: ensAvatar ?? undefined,
    };
  }, [address, ensAvatar, ensName, isDisconnected]);

  return account;
};
