import { ChainIds } from '@ant-design/web3-common';

export const isSolanaChain = (chainId?: ChainIds) => {
  return (
    chainId && [ChainIds.Solana, ChainIds.SolanaDevnet, ChainIds.SolanaTestnet].includes(chainId)
  );
};
