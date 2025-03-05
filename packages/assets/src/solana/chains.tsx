import { createGetBrowserLink, SolanaChainIds, type Chain } from '@ant-design/web3-common';
import { SolanaColorful } from '@ant-design/web3-icons';

export interface SolanaChain extends Chain {
  id: SolanaChainIds;
}

export const Solana: SolanaChain = {
  id: SolanaChainIds.MainnetBeta,
  name: 'Solana',
  icon: <SolanaColorful />,
  browser: {
    icon: <SolanaColorful />,
    getBrowserLink: createGetBrowserLink('https://explorer.solana.com'),
  },
  nativeCurrency: { name: 'Solana', symbol: 'SOL', decimals: 9 },
};

export const SolanaDevnet: SolanaChain = {
  id: SolanaChainIds.Devnet,
  name: 'Solana Devnet',
  icon: <SolanaColorful />,
  browser: {
    icon: <SolanaColorful />,
    getBrowserLink: (address, type) =>
      `${createGetBrowserLink('https://explorer.solana.com')(address, type)}?cluster=devnet`,
  },
  nativeCurrency: { name: 'Solana', symbol: 'SOL', decimals: 9 },
};

export const SolanaTestnet: SolanaChain = {
  id: SolanaChainIds.Testnet,
  name: 'Solana Testnet',
  icon: <SolanaColorful />,
  browser: {
    icon: <SolanaColorful />,
    getBrowserLink: (address, type) =>
      `${createGetBrowserLink('https://explorer.solana.com')(address, type)}?cluster=testnet`,
  },
  nativeCurrency: { name: 'Solana', symbol: 'SOL', decimals: 9 },
};
