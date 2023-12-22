import { type Chain, ChainIds } from '@ant-design/web3-common';

import {
  EthereumCircleColorful,
  OptimismCircleColorful,
  BSCCircleColorful,
  ArbitrumCircleColorful,
  PolygonCircleColorful,
  EtherscanCircleColorful,
  EthereumFilled,
  AvalancheCircleColorful,
} from '@ant-design/web3-icons';

export const Mainnet: Chain = {
  id: ChainIds.Mainnet,
  name: 'Ethereum',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EtherscanCircleColorful />,
    getBrowserLink: (address: string, type: string) => {
      if (type === 'address') {
        return `https://etherscan.io/address/${address}`;
      } else if (type === 'transaction') {
        return `https://etherscan.io/tx/${address}`;
      }
      throw new Error(`getBrowserLink unsupported type ${type}`);
    },
  },
  nativeCurrency: { icon: <EthereumFilled />, name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Goerli: Chain = {
  id: ChainIds.Goerli,
  name: 'Goerli',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EthereumCircleColorful />,
    getBrowserLink: (address: string, type: string) => {
      if (type === 'address') {
        return `https://goerli.etherscan.io/address/${address}`;
      } else if (type === 'transaction') {
        return `https://goerli.etherscan.io/tx/${address}`;
      }
      throw new Error(`getBrowserLink unsupported type ${type}`);
    },
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Polygon: Chain = {
  id: ChainIds.Polygon,
  name: 'Polygon',
  icon: <PolygonCircleColorful />,
  browser: {
    icon: <PolygonCircleColorful />,
    getBrowserLink: (address: string, type: string) => {
      if (type === 'address') {
        return `https://polygonscan.com/address/${address}`;
      } else if (type === 'transaction') {
        return `https://polygonscan.com/tx/${address}`;
      }
      throw new Error(`getBrowserLink unsupported type ${type}`);
    },
  },
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
};

export const BSC: Chain = {
  id: ChainIds.BSC,
  name: 'BNB Smart Chain',
  icon: <BSCCircleColorful />,
  browser: {
    icon: <BSCCircleColorful />,
    getBrowserLink: (address: string, type: string) => {
      if (type === 'address') {
        return `https://bscscan.com/address/${address}`;
      } else if (type === 'transaction') {
        return `https://bscscan.com/tx/${address}`;
      }
      throw new Error(`getBrowserLink unsupported type ${type}`);
    },
  },
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'BNB' },
};

export const Arbitrum: Chain = {
  id: ChainIds.Arbitrum,
  name: 'Arbitrum One',
  icon: <ArbitrumCircleColorful />,
  browser: {
    icon: <ArbitrumCircleColorful />,
    getBrowserLink: (address: string, type: string) => {
      if (type === 'address') {
        return `https://arbiscan.io/address/${address}`;
      } else if (type === 'transaction') {
        return `https://arbiscan.io/tx/${address}`;
      }
      throw new Error(`getBrowserLink unsupported type ${type}`);
    },
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Optimism: Chain = {
  id: ChainIds.Optimism,
  name: 'OP Mainnet',
  icon: <OptimismCircleColorful />,
  browser: {
    icon: <OptimismCircleColorful />,
    getBrowserLink: (address: string, type: string) => {
      if (type === 'address') {
        return `https://optimistic.etherscan.io/address/${address}`;
      } else if (type === 'transaction') {
        return `https://optimistic.etherscan.io/tx/${address}`;
      }
      throw new Error(`getBrowserLink unsupported type ${type}`);
    },
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Avalanche: Chain = {
  id: ChainIds.Avalanche,
  name: 'Avalanche',
  icon: <AvalancheCircleColorful />,
  browser: {
    icon: <AvalancheCircleColorful />,
    getBrowserLink: (address: string, type: string) => {
      if (type === 'address') {
        return `https://snowtrace.io/address/${address}`;
      } else if (type === 'transaction') {
        return `https://snowtrace.io/tx/${address}`;
      }
      throw new Error(`getBrowserLink unsupported type ${type}`);
    },
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
};
