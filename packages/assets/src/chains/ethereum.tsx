import { ChainIds, createGetBrowserLink, type Chain } from '@ant-design/web3-common';
import {
  ArbitrumCircleColorful,
  AvalancheCircleColorful,
  BSCCircleColorful,
  EthereumCircleColorful,
  EthereumFilled,
  EtherscanCircleColorful,
  OkxWalletColorful,
  OptimismCircleColorful,
  PolygonCircleColorful,
  ScrollColorful,
} from '@ant-design/web3-icons';

export const Mainnet: Chain = {
  id: ChainIds.Mainnet,
  name: 'Ethereum',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EtherscanCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://etherscan.io'),
  },
  nativeCurrency: { icon: <EthereumFilled />, name: 'Ether', symbol: 'ETH', decimals: 18 },
  token: { address: '0xdac17f958d2ee523a2206206994597c13d831ec7', symbol: 'USDT', decimals: 6 },
};

/**
 * @deprecated use sepolia or holesky instead
 */
export const Goerli: Chain = {
  id: ChainIds.Goerli,
  name: 'Goerli',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EthereumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://goerli.etherscan.io'),
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Sepolia: Chain = {
  id: ChainIds.Sepolia,
  name: 'Sepolia',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EthereumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://sepolia.etherscan.io'),
  },
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
};

export const Holesky: Chain = {
  id: ChainIds.Holesky,
  name: 'Holesky',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EthereumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://holesky.etherscan.io'),
  },
  nativeCurrency: { name: 'Holesky Ether', symbol: 'ETH', decimals: 18 },
};

export const Polygon: Chain = {
  id: ChainIds.Polygon,
  name: 'Polygon',
  icon: <PolygonCircleColorful />,
  browser: {
    icon: <PolygonCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://polygonscan.com'),
  },
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  token: { address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', symbol: 'USDT', decimals: 6 },
};

export const BSC: Chain = {
  id: ChainIds.BSC,
  name: 'BNB Smart Chain',
  icon: <BSCCircleColorful />,
  browser: {
    icon: <BSCCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://bscscan.com'),
  },
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'BNB' },
  token: { address: '0x55d398326f99059ff775485246999027b3197955', symbol: 'USDT', decimals: 6 },
};

export const Arbitrum: Chain = {
  id: ChainIds.Arbitrum,
  name: 'Arbitrum One',
  icon: <ArbitrumCircleColorful />,
  browser: {
    icon: <ArbitrumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://arbiscan.io'),
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Optimism: Chain = {
  id: ChainIds.Optimism,
  name: 'OP Mainnet',
  icon: <OptimismCircleColorful />,
  browser: {
    icon: <OptimismCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://optimistic.etherscan.io'),
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Avalanche: Chain = {
  id: ChainIds.Avalanche,
  name: 'Avalanche',
  icon: <AvalancheCircleColorful />,
  browser: {
    icon: <AvalancheCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://snowtrace.io'),
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
};

// OKX X1: https://www.okx.com/cn/x1/docs/developer/build-on-x1/quickstart
export const X1Testnet: Chain = {
  id: ChainIds.X1Testnet,
  name: 'X1 testnet',
  icon: <OkxWalletColorful />,
  browser: {
    icon: <OkxWalletColorful />,
    getBrowserLink: createGetBrowserLink('https://www.okx.com/explorer/x1-test'),
  },
  nativeCurrency: { name: 'OKB', symbol: 'OKB', decimals: 18 },
};

export const Scroll: Chain = {
  id: ChainIds.Scroll,
  name: 'Scroll',
  icon: <ScrollColorful />,
  browser: {
    icon: <ScrollColorful />,
    getBrowserLink: createGetBrowserLink('https://scrollscan.com/'),
  },
  nativeCurrency: { name: 'Scroll ETH', symbol: 'ETH', decimals: 18 },
};

export const ScrollSepolia: Chain = {
  id: ChainIds.ScrollSepolia,
  name: 'Scroll Sepolia Testnet',
  icon: <ScrollColorful />,
  browser: {
    icon: <ScrollColorful />,
    getBrowserLink: createGetBrowserLink('https://sepolia.scrollscan.com/'),
  },
  nativeCurrency: { name: 'Scroll ETH', symbol: 'ETH', decimals: 18 },
};
