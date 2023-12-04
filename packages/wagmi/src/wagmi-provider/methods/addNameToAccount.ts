import type { Account } from '@ant-design/web3-common';
import { fetchEnsName } from '@wagmi/core';

export async function addNameToAccount(account: Account, chainId?: number): Promise<Account> {
  const name = await fetchEnsName({
    address: account.address as `0x${string}`,
    chainId,
  });
  return {
    ...account,
    name: name ?? undefined,
  };
}
