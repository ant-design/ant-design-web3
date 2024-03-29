import { providers } from 'ethers5';
import { ethers as ethers6 } from 'ethers6';
import type { EIP1193Provider } from 'viem';

declare interface Window {
  ethereum?: EIP1193Provider;
}

// declare module 'ethers' {
//   export * from 'ethers6';
//   export const FallbackProviderV5 = providers.FallbackProvider;
//   export const JsonRpcProviderV5 = providers.JsonRpcProvider;
//   export const Web3ProviderV5 = providers.Web3Provider;
//   export const ethers = ethers6;
// }
