import React from 'react';
import type { Chain } from '@ant-design/web3-common';
import { createGetBrowserLink, SuiChainIds } from '@ant-design/web3-common';
import { SuiColorful } from '@ant-design/web3-icons';
import { SUI_DECIMALS } from '@mysten/sui.js/utils';

export interface SuiChain extends Chain {
  id: SuiChainIds;
  network: 'mainnet' | 'testnet' | 'devnet' | 'localnet';
}

export const suiMainnet: SuiChain = {
  id: SuiChainIds.Mainnet,
  name: 'Sui',
  network: 'mainnet',
  icon: <SuiColorful />,
  browser: {
    icon: <SuiColorful />,
    getBrowserLink: createGetBrowserLink('https://suiexplorer.com'),
  },
  nativeCurrency: { name: 'Sui', symbol: 'SUI', decimals: SUI_DECIMALS },
};

export const suiTestnet: SuiChain = {
  id: SuiChainIds.Testnet,
  name: 'Sui Testnet',
  network: 'testnet',
  icon: <SuiColorful />,
  browser: {
    icon: <SuiColorful />,
    getBrowserLink: createGetBrowserLink('https://suiexplorer.com/?cluster=testnet'),
  },
  nativeCurrency: { name: 'Sui', symbol: 'SUI', decimals: SUI_DECIMALS },
};

export const suiDevnet: SuiChain = {
  id: SuiChainIds.Devnet,
  name: 'Sui Devnet',
  network: 'devnet',
  icon: <SuiColorful />,
  browser: {
    icon: <SuiColorful />,
    getBrowserLink: createGetBrowserLink('https://suiexplorer.com/?cluster=devnet'),
  },
  nativeCurrency: { name: 'Sui', symbol: 'SUI', decimals: SUI_DECIMALS },
};

export const suiLocalnet: SuiChain = {
  id: SuiChainIds.Localnet,
  name: 'Sui Localnet',
  network: 'localnet',
  icon: <SuiColorful />,
  browser: {
    icon: <SuiColorful />,
    getBrowserLink: createGetBrowserLink('https://suiexplorer.com/?cluster=localnet'),
  },
  nativeCurrency: { name: 'Sui', symbol: 'SUI', decimals: SUI_DECIMALS },
};
