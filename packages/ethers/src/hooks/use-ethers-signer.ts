import { useMemo } from 'react';
import { BrowserProvider, JsonRpcSigner } from 'ethers';
import type { Account, Chain, Client, Transport } from 'viem';
import { useConnectorClient, type Config } from 'wagmi';

/* v8 ignore next 13 */
export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = chain
    ? {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts?.ensRegistry?.address,
      }
    : undefined;
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

export function useEthersSigner() {
  const { data: client } = useConnectorClient<Config>();
  /* v8 ignore next */
  return useMemo(() => (client ? clientToSigner(client) : null), [client]);
}
