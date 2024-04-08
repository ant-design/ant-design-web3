import type { EIP1193Provider } from 'viem';

declare interface Window {
  ethereum?: EIP1193Provider;
}
