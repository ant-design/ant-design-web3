import { ChainIds, type Chain } from '@ant-design/web3-common';
import { SolanaColorful } from '@ant-design/web3-icons';

export interface SolanaChain extends Chain {
  id: ChainIds;
  network: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: Record<string, { http: string[]; webSocket?: string[] }>;
}

export const solana: SolanaChain = {
  id: ChainIds.Solana,
  name: 'Solana',
  network: 'mainnet-beta',
  icon: <SolanaColorful />,
  nativeCurrency: { name: 'Sol', symbol: 'SOL', decimals: 10 },
  rpcUrls: {
    default: {
      http: ['https://api.mainnet-beta.solana.com'],
    },
    public: {
      http: ['https://api.mainnet-beta.solana.com'],
    },
    helius: {
      http: ['https://mainnet.helius-rpc.com'],
    },
  },
};

export const solanaDevnet: SolanaChain = {
  id: ChainIds.SolanaDevnet,
  name: 'Solana Devnet',
  network: 'devnet',
  icon: <SolanaColorful />,
  nativeCurrency: { name: 'Sol', symbol: 'SOL', decimals: 10 },
  rpcUrls: {
    default: {
      http: ['https://api.devnet.solana.com'],
    },
    public: {
      http: ['https://api.devnet.solana.com'],
    },
    helius: {
      http: ['https://devnet.helius-rpc.com'],
    },
  },
};

export const solanaTestnet: SolanaChain = {
  id: ChainIds.SolanaTestnet,
  name: 'Solana Testnet',
  network: 'testnet',
  icon: <SolanaColorful />,
  nativeCurrency: { name: 'Sol', symbol: 'SOL', decimals: 10 },
  rpcUrls: {
    default: {
      http: ['https://api.testnet.solana.com'],
    },
    public: {
      http: ['https://api.testnet.solana.com'],
    },
  },
};
