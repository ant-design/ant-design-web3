import type { Chain as ViemChain } from 'viem';

import type { AddNetworkParams, ChainAssetWithWagmiChain } from './interface';

function toArray<T>(value: T | T[] | undefined): T[] {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

/**
 * Convert viem Chain to EIP-3085 wallet_addEthereumChain params.
 * Normalizes rpcUrls and blockExplorerUrls to arrays.
 */
export function wagmiChainToAddNetworkParams(chain: ViemChain): AddNetworkParams | null {
  const http = chain.rpcUrls?.default?.http;
  const rpcUrls = toArray(typeof http === 'string' ? http : (http as string[] | undefined)).filter(
    Boolean,
  );
  const explorerUrl = chain.blockExplorers?.default?.url;
  const blockExplorerUrls = explorerUrl ? [explorerUrl] : undefined;

  if (!chain.nativeCurrency || !rpcUrls.length) {
    return null;
  }

  return {
    chainId: `0x${chain.id.toString(16)}`,
    chainName: chain.name,
    nativeCurrency: {
      name: chain.nativeCurrency.name,
      symbol: chain.nativeCurrency.symbol,
      decimals: chain.nativeCurrency.decimals,
    },
    rpcUrls,
    blockExplorerUrls,
  };
}

/**
 * Convert ChainAssetWithWagmiChain to EIP-3085 params.
 * Returns null when wagmiChain is missing (RPC/explorer required for add network).
 */
export function chainToAddNetworkParams(chain: ChainAssetWithWagmiChain): AddNetworkParams | null {
  if (!chain.wagmiChain) {
    return null;
  }
  return wagmiChainToAddNetworkParams(chain.wagmiChain);
}
