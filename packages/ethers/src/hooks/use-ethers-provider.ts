import { useMemo } from 'react';
import type {
  FallbackProvider as FallbackProviderType,
  JsonRpcProvider as JsonRpcProviderType,
} from 'ethers';
import type { Chain, Client, Transport } from 'viem';
import { useClient, type Config } from 'wagmi';

import { FallbackProvider, isEthersV5, JsonRpcProvider } from './utils';

function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === 'fallback') {
    if (isEthersV5()) {
      return new FallbackProvider(
        (transport.transports as ReturnType<Transport>[]).map(
          ({ value }) => new JsonRpcProvider(value?.url, network),
        ) as any,
      );
    }
    const providers = (transport.transports as ReturnType<Transport>[]).map(
      ({ value }) => new JsonRpcProvider(value?.url, network),
    );
    return new FallbackProvider(providers as any);
  }
  return new JsonRpcProvider(transport.url, network);
}

export function useEthersProvider() {
  const client = useClient<Config>();
  const provider = useMemo(() => clientToProvider(client!), [client]);
  return provider as FallbackProviderType | JsonRpcProviderType;
}
