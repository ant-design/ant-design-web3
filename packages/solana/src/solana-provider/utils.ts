import type { SolanaChainConfig } from '../chains';

export const isSolanaChain = (chain?: SolanaChainConfig) => {
  return !!chain?.isSolana;
};
