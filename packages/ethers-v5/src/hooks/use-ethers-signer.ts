import { useMemo } from 'react';
import { providers } from 'ethers';
import type { Account, Chain, Client, Transport } from 'viem';
import { useConnectorClient, type Config } from 'wagmi';

/* v8 ignore next 11 */
export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);
  return signer;
}

export function useEthersSigner() {
  const { data: client } = useConnectorClient<Config>();
  /* v8 ignore next */
  return useMemo(() => (client ? clientToSigner(client) : null), [client]);
}
