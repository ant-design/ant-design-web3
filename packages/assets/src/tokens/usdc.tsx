import type { Token } from '@ant-design/web3-common';
import { UsdcColorful } from '@ant-design/web3-icons';

import { Arbitrum, Avalanche, Mainnet, Optimism, Polygon } from '../chains/ethereum';
import { Solana } from '../solana';

export const USDC: Token = {
  name: 'USDC',
  symbol: 'USDC',
  decimal: 6,
  icon: <UsdcColorful />,

  // Data Source:
  //   https://developers.circle.com/stablecoins/docs/usdc-on-main-networks
  availableChains: [
    // evm
    {
      chain: Mainnet,
      contract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    {
      chain: Polygon,
      contract: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
    },
    {
      chain: Arbitrum,
      contract: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
    },
    {
      chain: Avalanche,
      contract: '',
    },
    {
      chain: Optimism,
      contract: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
    },

    // solana
    {
      chain: Solana,
      contract: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    },
  ],
};
