import type { Balance } from '@ant-design/web3-common';
import { BitcoinCircleColorful } from '@ant-design/web3-icons';

import { HIRO_API, MEMPOOL_API, ORDINALS_URL } from './constants';
import { NoBalanceError, NoInscriptionError } from './error';
import type { HiroInscription, Inscription } from './types';

export const getBalanceObject = (sats: number): Balance => {
  return {
    value: BigInt(sats),
    decimals: 8,
    symbol: 'BTC',
    icon: <BitcoinCircleColorful />,
  };
};

export const getBalanceByMempool = async (address: string): Promise<Balance> => {
  const res = await fetch(`${MEMPOOL_API}/address/${address}`);
  if (res.ok) {
    const data = await res.json();
    const { chain_stats } = data;
    const { funded_txo_sum, spent_txo_sum } = chain_stats;
    return getBalanceObject(funded_txo_sum - spent_txo_sum);
  } else {
    throw new NoBalanceError();
  }
};

export const getInscriptionsByAddress = async ({
  address,
  limit,
  offset,
}: {
  address: string;
  limit: number;
  offset: number;
}): Promise<{ total: number; list: Inscription[] }> => {
  const params = { address, limit: `${limit}`, offset: `${offset}` };
  const res = await fetch(`${HIRO_API}/ordinals/v1/inscriptions?${new URLSearchParams(params)}`);
  if (res.ok) {
    const { results, total } = await res.json();
    const list = (results as HiroInscription[]).map(
      ({
        id,
        number,
        address: addr,
        value,
        timestamp,
        content_type,
        content_length,
        offset: inscriptionOffset,
        genesis_tx_id,
        location,
        output,
      }) => ({
        content: `${ORDINALS_URL}/content/${id}`,
        preview: `${ORDINALS_URL}/preview/${id}`,
        inscriptionId: id,
        inscriptionNumber: number,
        address: addr,
        outputValue: Number(value),
        contentLength: content_length,
        contentType: content_type,
        timestamp,
        offset: Number(inscriptionOffset),
        genesisTransaction: genesis_tx_id,
        location,
        output,
      }),
    );
    return { list, total };
  } else {
    throw new NoInscriptionError();
  }
};

export const getInscriptionContentById = async (inscriptionId: string): Promise<string> => {
  const res = await fetch(`${HIRO_API}/ordinals/v1/inscriptions/${inscriptionId}`);
  if (res.ok) {
    const { id } = await res.json();
    return `${ORDINALS_URL}/content/${id}`;
  } else {
    throw new NoInscriptionError();
  }
};
