import type { Token } from '@ant-design/web3-common';
import { EthereumColorful } from '@ant-design/web3-icons';

import { BSC, Mainnet } from '../chains/ethereum';

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
      chain: BSC,
      contract: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
  ],
};
