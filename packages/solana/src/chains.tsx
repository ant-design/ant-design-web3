import { SolanaChainIds } from '@ant-design/web3-common';

export interface SolanaChainConfig {
  id: SolanaChainIds;
  name: string;
  network: string;
  rpcUrls: Record<string, string>;
}

export const solana: SolanaChainConfig = {
  id: SolanaChainIds.MainnetBeta,
  name: 'Solana',
  network: 'mainnet-beta',
  rpcUrls: {
    default: 'https://api.mainnet-beta.solana.com',
  },
};

export const solanaDevnet: SolanaChainConfig = {
  id: SolanaChainIds.Devnet,
  name: 'Solana Devnet',
  network: 'devnet',
  rpcUrls: {
    default: 'https://api.devnet.solana.com',
  },
};

export const solanaTestnet: SolanaChainConfig = {
  id: SolanaChainIds.Testnet,
  name: 'Solana Testnet',
  network: 'testnet',
  rpcUrls: {
    default: 'https://api.testnet.solana.com',
  },
};
