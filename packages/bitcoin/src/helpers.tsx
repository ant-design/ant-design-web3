import type { Balance } from '@ant-design/web3-common';
import { BitcoinCircleColorful } from '@ant-design/web3-icons';
import mempoolJS from '@mempool/mempool.js';

const {
  bitcoin: { addresses },
} = mempoolJS({
  hostname: 'mempool.space',
});

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
  const addr = await addresses.getAddress({ address });
  const { funded_txo_sum, spent_txo_count } = addr.chain_stats;
  // mempool not included
  return getBalanceObject(funded_txo_sum - spent_txo_count);
};
