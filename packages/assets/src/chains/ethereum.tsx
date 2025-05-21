import { ChainIds, ChainType, createGetBrowserLink, type Chain } from '@ant-design/web3-common';
import {
  ArbitrumCircleColorful,
  AvalancheCircleColorful,
  BaseCircleColorful,
  BSCCircleColorful,
  EthereumCircleColorful,
  EthereumColorful,
  EthereumFilled,
  EtherscanCircleColorful,
  HardhatColorful,
  OkxWalletColorful,
  OptimismCircleColorful,
  PolygonCircleColorful,
  ScrollColorful,
} from '@ant-design/web3-icons';

export const Mainnet: Chain = {
  id: ChainIds.Mainnet,
  name: 'Ethereum',
  type: ChainType.EVM,
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EtherscanCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://etherscan.io'),
  },
  nativeCurrency: { icon: <EthereumFilled />, name: 'Ether', symbol: 'ETH', decimals: 18 },
};

/**
 * @deprecated use sepolia or holesky instead
 */
export const Goerli: Chain = {
  id: ChainIds.Goerli,
  name: 'Goerli',
  type: ChainType.EVM,
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
  type: ChainType.EVM,
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
  type: ChainType.EVM,
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
  type: ChainType.EVM,
  icon: <PolygonCircleColorful />,
  browser: {
    icon: <PolygonCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://polygonscan.com'),
  },
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
};

export const BSC: Chain = {
  id: ChainIds.BSC,
  name: 'BNB Smart Chain',
  type: ChainType.EVM,
  icon: <BSCCircleColorful />,
  browser: {
    icon: <BSCCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://bscscan.com'),
  },
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'BNB' },
};

export const Arbitrum: Chain = {
  id: ChainIds.Arbitrum,
  name: 'Arbitrum One',
  type: ChainType.EVM,
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
  type: ChainType.EVM,
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
  type: ChainType.EVM,
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
  type: ChainType.EVM,
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
  type: ChainType.EVM,
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
  type: ChainType.EVM,
  icon: <ScrollColorful />,
  browser: {
    icon: <ScrollColorful />,
    getBrowserLink: createGetBrowserLink('https://sepolia.scrollscan.com/'),
  },
  nativeCurrency: { name: 'Scroll ETH', symbol: 'ETH', decimals: 18 },
};

export const Base: Chain = {
  id: ChainIds.Base,
  name: 'Base',
  type: ChainType.EVM,
  icon: <BaseCircleColorful />,
  browser: {
    icon: <BaseCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://basescan.org'),
  },
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
};

export const Hardhat: Chain = {
  id: ChainIds.Hardhat,
  name: 'Hardhat',
  type: ChainType.EVM,
  icon: <HardhatColorful />,
  nativeCurrency: { icon: <EthereumFilled />, name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Localhost: Chain = {
  id: ChainIds.Localhost,
  name: 'Localhost',
  type: ChainType.EVM,
  icon: <EthereumColorful />,
  nativeCurrency: { icon: <EthereumFilled />, name: 'Ether', symbol: 'ETH', decimals: 18 },
};
