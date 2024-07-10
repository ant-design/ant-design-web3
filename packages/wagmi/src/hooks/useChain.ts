import type { Chain } from '@ant-design/web3-common';
import { useChainId } from 'wagmi';

import { useChains } from './useChains';

export type UseChainResult = Chain | undefined;

export const useChain = (): UseChainResult => {
  const connectedChainId = useChainId();
  const availableChains = useChains();
  const chain =
    availableChains.find((current) => current.id === connectedChainId) ?? availableChains?.[0];
  return chain;
};
