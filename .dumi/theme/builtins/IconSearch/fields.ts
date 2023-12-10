import * as AntdWeb3Icons from '@ant-design/web3-icons';

const all = Object.keys(AntdWeb3Icons)
  .map((n) => n.replace(/(Colorful|CircleFilled|Filled)$/, ''))
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
  'USDT',
];

const tool = ['CoinbaseWallect', 'Etherscan', 'MetaMask', 'WalletConnect'];

const datum = [...chain, ...tool];

const other = all.filter((n) => !datum.includes(n));

export const categories = {
  chain,
  tool,
  other,
};

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
