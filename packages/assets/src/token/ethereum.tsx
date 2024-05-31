import { type Token } from '@ant-design/web3-common';
import { EthereumColorful } from '@ant-design/web3-icons';

import { Arbitrum, BSC, Mainnet, Optimism, Polygon } from '../chains/ethereum';

export const ETH: Token = {
  name: 'Ethereum',
  symbol: 'ETH',
  decimal: 18,
  icon: <EthereumColorful />,
  availableChains: [
    {
      chain: Mainnet,
    },
    {
      chain: Polygon,
      contract: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    {
      chain: BSC,
      contract: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    {
      chain: Arbitrum,
      contract: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    },
    {
      chain: Optimism,
      contract: '0x4200000000000000000000000000000000000006',
    },
  ],
};
