import { SolanaChainIds } from '@ant-design/web3-common';

const isSolanaSymbol = Symbol.for('isSolana');

export interface SolanaChainConfig {
  id: SolanaChainIds;
  name: string;
  network: string;
  isSolana?: symbol;
  rpcUrls: Record<string, string>;
}

export const solana: SolanaChainConfig = {
  id: SolanaChainIds.MainnetBeta,
  name: 'Solana',
  network: 'mainnet-beta',
  isSolana: isSolanaSymbol,
  rpcUrls: {
    default: 'https://api.mainnet-beta.solana.com',
  },
};

export const solanaDevnet: SolanaChainConfig = {
  id: SolanaChainIds.Devnet,
  name: 'Solana Devnet',
  network: 'devnet',
  isSolana: isSolanaSymbol,
  rpcUrls: {
    default: 'https://api.devnet.solana.com',
  },
};

export const solanaTestnet: SolanaChainConfig = {
  id: SolanaChainIds.Testnet,
  name: 'Solana Testnet',
  network: 'testnet',
  isSolana: isSolanaSymbol,
  rpcUrls: {
    default: 'https://api.testnet.solana.com',
  },
};
