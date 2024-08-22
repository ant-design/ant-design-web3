import { useMemo } from 'react';
import type { Chain, Client, Transport } from 'viem';
import { useConnectorClient, type Config } from 'wagmi';
import { Web3 } from 'web3';

/* v8 ignore next 7 */
export const clientToWeb3js = (client: Client<Transport, Chain>): Web3 => {
  const { transport } = client;
  if (transport.type === 'fallback') {
    return new Web3(transport.transports[0].value.url);
  }
  return new Web3(transport);
};

export function useWeb3js(): Web3 | null {
  const { data: client } = useConnectorClient<Config>();
  /* v8 ignore next */
  return useMemo(() => (client ? clientToWeb3js(client) : null), [client]);
}
