import * as chainAssets from '@ant-design/web3-assets';
import type { Chain } from '@ant-design/web3-common';
import { merge } from 'lodash-es';
import { useChains as useWagmiChains } from 'wagmi';

const chainIdMap: Record<number, Chain> = Object.fromEntries(
  Object.values(chainAssets).map((chainItem: any) => [chainItem?.id, chainItem]),
);

export type UseChainsResult = Chain[];

export const useChains = (): UseChainsResult => {
  const chains = useWagmiChains();

  // Merge with chainAssets
  const availableChains = chains.map<Chain>((current) => {
    if (chainIdMap[current.id]?.id === current.id) {
      return merge(chainIdMap[current.id], current);
    }
    return current;
  });
  return availableChains;
};
