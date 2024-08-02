import { useMemo } from 'react';
import { providers } from 'ethers';
import type { Chain, Client, Transport } from 'viem';
import { useClient, type Config } from 'wagmi';

export function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === 'fallback')
    /* v8 ignore next 5 */
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<Transport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network),
      ),
    );
  return new providers.JsonRpcProvider(transport.url, network);
}

export function useEthersProvider() {
  const client = useClient<Config>();
  /* v8 ignore next */
  return useMemo(() => (client ? clientToProvider(client) : null), [client]);
}
