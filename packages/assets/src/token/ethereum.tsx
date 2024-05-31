import { ChainIds, type Token } from '@ant-design/web3-common';
import { EthereumColorful } from '@ant-design/web3-icons';

export const ETH: Token = {
  name: 'Ethereum',
  symbol: 'ETH',
  decimal: 18,
  icon: <EthereumColorful />,
  availableChains: [
    {
      chain: {
        name: 'Ethereum',
        id: ChainIds.Mainnet,
      },
    },
    {
      chain: {
        name: 'Polygon',
        id: ChainIds.Polygon,
      },
      contract: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    {
      chain: {
        name: 'BSC',
        id: ChainIds.BSC,
      },
      contract: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    {
      chain: {
        name: 'Arbitrum',
        id: ChainIds.Arbitrum,
      },
      contract: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    },
    {
      chain: {
        name: 'Optimism',
        id: ChainIds.Optimism,
      },
      contract: '0x4200000000000000000000000000000000000006',
    },
  ],
};
