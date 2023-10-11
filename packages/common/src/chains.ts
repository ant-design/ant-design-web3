import type { Chain } from './types';

export const mainnet: Chain = {
  id: 1,
  name: 'Ethereum',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const polygon: Chain = {
  id: 137,
  name: 'Polygon',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
};

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'BNB' },
};

export const arbitrum: Chain = {
  id: 42_161,
  name: 'Arbitrum One',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const optimism: Chain = {
  id: 10,
  name: 'OP Mainnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};
