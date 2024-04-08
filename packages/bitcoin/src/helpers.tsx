import type { Balance } from '@ant-design/web3-common';
import { BitcoinCircleColorful } from '@ant-design/web3-icons';
import mempoolJS from '@mempool/mempool.js';

/**
 * 暂时集成进来，未来两种演进：
 * 1. 交给用户处理
 * 2. 被其他库包装
 */

const {
  bitcoin: { addresses },
} = mempoolJS({
  hostname: 'mempool.space',
});

export const getBalance = async (address: string): Promise<Balance> => {
  const addr = await addresses.getAddress({ address });
  const { funded_txo_sum, spent_txo_count } = addr.chain_stats;
  // mempool not included
  return {
    value: BigInt((funded_txo_sum - spent_txo_count) / 100000000),
    decimals: 8,
    symbol: 'BTC',
    icon: <BitcoinCircleColorful />,
  };
};
