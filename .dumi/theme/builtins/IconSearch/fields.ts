import * as AntdWeb3Icons from '@ant-design/web3-icons';

const all = Object.keys(AntdWeb3Icons)
  .map((n) => n.replace(/(CircleColorful|Colorful|Filled|CircleFilled)$/, ''))
  .filter((n, i, arr) => arr.indexOf(n) === i);

const commons = [
  'Bitcoin',
  'Ethereum',
  'USDT',
  'Bnb',
  'Solana',
  'Usdc',
  'Xrp',
  'Doge',
  'Ton',
  'Ada',
  'Shib',
  'Avax',
];

const other = all.filter((n) => !commons.includes(n));

export const categories = {
  commons,
  other,
};

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
