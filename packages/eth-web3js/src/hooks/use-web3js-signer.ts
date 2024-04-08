import { useMemo } from 'react';
import { useConnectorClient, type Config } from 'wagmi';
import type Web3 from 'web3';

import { clientToWeb3js } from './use-web3js';

export function useWeb3jsSigner(): Web3 | null {
  const { data: client } = useConnectorClient<Config>();
  return useMemo(() => (client ? clientToWeb3js(client) : null), [client]);
}
