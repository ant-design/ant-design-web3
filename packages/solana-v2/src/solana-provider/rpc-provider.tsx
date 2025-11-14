import type { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';
import type {
  Rpc,
  RpcSubscriptions,
  SolanaRpcApiMainnet,
  SolanaRpcSubscriptionsApi,
} from '@solana/kit';
import { createSolanaRpc, createSolanaRpcSubscriptions, devnet } from '@solana/kit';
import { DEVNET_ENDPOINT } from '@solana/wallet-standard';

export type RpcContextType = {
  rpc: Rpc<SolanaRpcApiMainnet>;
  rpcSubscriptions: RpcSubscriptions<SolanaRpcSubscriptionsApi>;
};

const RpcContext = createContext<RpcContextType>({
  rpc: createSolanaRpc(devnet(DEVNET_ENDPOINT)),
  rpcSubscriptions: createSolanaRpcSubscriptions(
    devnet(DEVNET_ENDPOINT.replace('https://', 'wss://')),
  ),
});

export function RpcProvider({
  rpc,
  rpcSubscriptions,
  children,
}: PropsWithChildren<RpcContextType>) {
  return <RpcContext.Provider value={{ rpc, rpcSubscriptions }}>{children}</RpcContext.Provider>;
}

export function useRpc() {
  return useContext(RpcContext);
}
