import { type Chain, ChainIds } from '@ant-design/web3-common';

import {
  EthereumColorful,
  OptimismCircleColorful,
  BSCCircleColorful,
  ArbitrumColorful,
  PolygonColorful,
  EtherscanCircleColorful,
  EthereumFilled,
} from '@ant-design/web3-icons';

export const Mainnet: Chain = {
  id: ChainIds.Mainnet,
  name: 'Ethereum',
  icon: <EthereumColorful />,
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
  icon: <EthereumColorful />,
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Polygon: Chain = {
  id: ChainIds.Polygon,
  name: 'Polygon',
  icon: <PolygonColorful />,
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
};

export const BSC: Chain = {
  id: ChainIds.BSC,
  name: 'BNB Smart Chain',
  icon: <BSCCircleColorful />,
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'BNB' },
};

export const Arbitrum: Chain = {
  id: ChainIds.Arbitrum,
  name: 'Arbitrum One',
  icon: <ArbitrumColorful />,
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Optimism: Chain = {
  id: ChainIds.Optimism,
  name: 'OP Mainnet',
  icon: <OptimismCircleColorful />,
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};
