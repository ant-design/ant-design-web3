import { useMemo } from 'react';
import { JsonRpcSigner } from 'ethers';
import type { BrowserProvider as BrowserProviderType } from 'ethers';
import type { providers as ProvidersType } from 'ethers5';
import type { Account, Chain, Client, Transport } from 'viem';
import { useConnectorClient, type Config } from 'wagmi';

import { BrowserProvider, isEthersV5 } from './utils';

export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (isEthersV5()) {
    const provider = new BrowserProvider(transport, network) as ProvidersType.Web3Provider;
    const signer = provider.getSigner(account.address);
    return signer;
  }
  const provider = new BrowserProvider(transport, network) as BrowserProviderType;
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

export function useEthersSigner() {
  const { data: client } = useConnectorClient<Config>();
  const signer = useMemo(() => (client ? clientToSigner(client) : null), [client]);
  return signer;
}
