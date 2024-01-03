import * as AntdWeb3Icons from '@ant-design/web3-icons';

const all = Object.keys(AntdWeb3Icons)
  .map((n) => n.replace(/(CircleColorful|Colorful|Filled|CircleFilled)$/, ''))
  .filter((n, i, arr) => arr.indexOf(n) === i);

const chain = [
  'Arbitrum',
  'Bitcoin',
  'BSC',
  'Ethereum',
  'Optimism',
  'Polygon',
  'Sui',
  'Tron',
  'Base',
  'Avalanche',
  'Fantom',
  'Celo',
  'Cronos',
  'Moonbeam',
  'Solana',
];

const token = ['DAI', 'WBTC', 'AAVE', 'USDT'];

const tool = [
  'CoinbaseWallet',
  'Etherscan',
  'MetaMask',
  'WalletConnect',
  'TokenPocket',
  'Safeheron',
  'Uniswap',
  'PancakeSwap',
  'SushiSwap',
  'Phantom',
];

const datum = [...chain, ...token, ...tool];

const other = all.filter((n) => !datum.includes(n));

export const categories = {
  chain,
  token,
  tool,
  other,
};

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
