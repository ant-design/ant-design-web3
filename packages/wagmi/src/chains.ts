import {
  Arbitrum as ArbitrumAsset,
  Avalanche as AvalancheAsset,
  Base as BaseAsset,
  BSC as BSCAsset,
  Goerli as GoerliAsset,
  Hardhat as HardhatAsset,
  Holesky as HoleskyAsset,
  Localhost as LocalhostAsset,
  Mainnet as MainnetAsset,
  Optimism as OptimismAsset,
  Polygon as PolygonAsset,
  Scroll as ScrollAsset,
  ScrollSepolia as ScrollSepoliaAsset,
  Sepolia as SepoliaAsset,
  X1Testnet as X1TestnetAsset,
} from '@ant-design/web3-assets';
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  goerli,
  hardhat,
  holesky,
  localhost,
  mainnet,
  optimism,
  polygon,
  scroll,
  scrollSepolia,
  sepolia,
} from 'wagmi/chains';

import type { ChainAssetWithWagmiChain } from './interface';

export const Mainnet: ChainAssetWithWagmiChain = {
  ...MainnetAsset,
  wagmiChain: mainnet,
};

export const Goerli: ChainAssetWithWagmiChain = {
  ...GoerliAsset,
  wagmiChain: goerli,
};

export const Sepolia: ChainAssetWithWagmiChain = {
  ...SepoliaAsset,
  wagmiChain: sepolia,
};

export const Holesky: ChainAssetWithWagmiChain = {
  ...HoleskyAsset,
  wagmiChain: holesky,
};

export const Polygon: ChainAssetWithWagmiChain = {
  ...PolygonAsset,
  wagmiChain: polygon,
};

export const BSC: ChainAssetWithWagmiChain = {
  ...BSCAsset,
  wagmiChain: bsc,
};

export const Arbitrum: ChainAssetWithWagmiChain = {
  ...ArbitrumAsset,
  wagmiChain: arbitrum,
};

export const Optimism: ChainAssetWithWagmiChain = {
  ...OptimismAsset,
  wagmiChain: optimism,
};

export const Avalanche: ChainAssetWithWagmiChain = {
  ...AvalancheAsset,
  wagmiChain: avalanche,
};

export const Base: ChainAssetWithWagmiChain = {
  ...BaseAsset,
  wagmiChain: base,
};

// OKX X1: https://www.okx.com/cn/x1/docs/developer/build-on-x1/quickstart
export const X1Testnet: ChainAssetWithWagmiChain = {
  ...X1TestnetAsset,
  wagmiChain: {
    id: X1TestnetAsset.id,
    name: X1TestnetAsset.name,
    nativeCurrency: { name: 'OKB', symbol: 'OKB', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://testrpc.x1.tech'],
      },
    },
    blockExplorers: {
      default: {
        name: 'X1TestnetScan',
        url: 'https://www.okx.com/explorer/x1-test',
      },
    },
  },
};

export const Scroll: ChainAssetWithWagmiChain = {
  ...ScrollAsset,
  wagmiChain: scroll,
};

export const ScrollSepolia: ChainAssetWithWagmiChain = {
  ...ScrollSepoliaAsset,
  wagmiChain: scrollSepolia,
};

export const Hardhat: ChainAssetWithWagmiChain = {
  ...HardhatAsset,
  wagmiChain: hardhat,
};

export const Localhost: ChainAssetWithWagmiChain = {
  ...LocalhostAsset,
  wagmiChain: localhost,
};
