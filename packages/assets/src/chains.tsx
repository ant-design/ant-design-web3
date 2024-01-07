import { ChainIds, createGetBrowserLink, type Chain } from '@ant-design/web3-common';
import {
  ArbitrumCircleColorful,
  AvalancheCircleColorful,
  BSCCircleColorful,
  EthereumCircleColorful,
  EthereumFilled,
  EtherscanCircleColorful,
  OptimismCircleColorful,
  BSCCircleColorful,
  ArbitrumCircleColorful,
  PolygonCircleColorful,
  EtherscanCircleColorful,
  EthereumFilled,
  AvalancheCircleColorful,
} from '@ant-design/web3-icons';

export const Mainnet: Chain = {
  id: ChainIdToken.fromValue(ChainIds.Mainnet),
  name: 'Ethereum',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EtherscanCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://etherscan.io'),
  },
  nativeCurrency: { icon: <EthereumFilled />, name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Goerli: Chain = {
  id: ChainIdToken.fromValue(ChainIds.Goerli),
  name: 'Goerli',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EthereumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://goerli.etherscan.io'),
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Polygon: Chain = {
  id: ChainIdToken.fromValue(ChainIds.Polygon),
  name: 'Polygon',
  icon: <PolygonCircleColorful />,
  browser: {
    icon: <PolygonCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://polygonscan.com'),
  },
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
};

export const BSC: Chain = {
  id: ChainIdToken.fromValue(ChainIds.BSC),
  name: 'BNB Smart Chain',
  icon: <BSCCircleColorful />,
  browser: {
    icon: <BSCCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://bscscan.com'),
  },
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'BNB' },
};

export const Arbitrum: Chain = {
  id: ChainIdToken.fromValue(ChainIds.Arbitrum),
  name: 'Arbitrum One',
  icon: <ArbitrumCircleColorful />,
  browser: {
    icon: <ArbitrumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://arbiscan.io'),
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Optimism: Chain = {
  id: ChainIdToken.fromValue(ChainIds.Optimism),
  name: 'OP Mainnet',
  icon: <OptimismCircleColorful />,
  browser: {
    icon: <OptimismCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://optimistic.etherscan.io'),
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Avalanche: Chain = {
  id: ChainIdToken.fromValue(ChainIds.Avalanche),
  name: 'Avalanche',
  icon: <AvalancheCircleColorful />,
  browser: {
    icon: <AvalancheCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://snowtrace.io'),
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
};

export const Solana: Chain = {
  id: ChainIdToken.fromKey('solana'),
  name: 'Solana',
  icon: <SolanaColorful />,
  browser: {
    icon: <SolanaColorful />,
    getBrowserLink: createGetBrowserLink('https://explorer.solana.com'),
  },
  nativeCurrency: { name: 'Solana', symbol: 'SOL', decimals: 9 },
};
