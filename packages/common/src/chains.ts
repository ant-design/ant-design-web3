import { Chain, ChainIds } from './types';

export const mainnet: Chain = {
  id: ChainIds.Mainnet,
  name: 'Ethereum',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const polygon: Chain = {
  id: ChainIds.Polygon,
  name: 'Polygon',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
};

export const bsc: Chain = {
  id: ChainIds.BSC,
  name: 'BNB Smart Chain',
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'BNB' },
};

export const arbitrum: Chain = {
  id: ChainIds.Arbitrum,
  name: 'Arbitrum One',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const optimism: Chain = {
  id: ChainIds.Optimism,
  name: 'OP Mainnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};
