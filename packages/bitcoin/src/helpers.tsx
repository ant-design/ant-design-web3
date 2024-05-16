import type { Balance } from '@ant-design/web3-common';
import { BitcoinCircleColorful } from '@ant-design/web3-icons';

import { NoBalanceError } from './error';

const MEMPOOL_URL = 'https://mempool.space/api';

export const getBalanceObject = (sats: number): Balance => {
  return {
    value: BigInt(sats),
    decimals: 8,
    symbol: 'BTC',
    icon: <BitcoinCircleColorful />,
  };
};

/**
 * 对于不提供获取余额接口的钱包，如 Xverse，需调用 mempool API 自行获取
 * https://github.com/secretkeylabs/sats-connect/issues/12#issuecomment-2038963924
 */
export const getBalanceByMempool = async (address: string): Promise<Balance> => {
  const res = await fetch(`${MEMPOOL_URL}/address/${address}`);
  if (res.ok) {
    const data = await res.json();
    const { chain_stats } = data;
    const { funded_txo_sum, spent_txo_sum } = chain_stats;
    return getBalanceObject(funded_txo_sum - spent_txo_sum);
  } else {
    throw new NoBalanceError();
  }
};
