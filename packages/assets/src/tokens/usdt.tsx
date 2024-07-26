import type { Token } from '@ant-design/web3-common';
import { USDTColorful } from '@ant-design/web3-icons';

import { Arbitrum, BSC, Mainnet, Optimism, Polygon } from '../chains/ethereum';

export const USDT: Token = {
  name: 'Tether USD',
  symbol: 'USDT',
  decimal: 6,
  icon: <USDTColorful />,
  availableChains: [
    {
      chain: Mainnet,
      contract: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    {
      chain: Polygon,
      contract: '0x3813e82e6f7098b9583FC0F33a962D02018B6803',
    },
    {
      chain: BSC,
      contract: '0x55d398326f99059fF775485246999027B3197955',
    },
    {
      chain: Arbitrum,
      contract: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    },
    {
      chain: Optimism,
      contract: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
    },
  ],
};
