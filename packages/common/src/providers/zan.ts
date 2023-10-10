import { JsonRpcProvider, Chains } from '../types';

export class ZANJsonRpcProvider implements JsonRpcProvider {
  constructor(private key: string) {}

  getRpcUrl(chain: Chains): string {
    if (chain === Chains.EthereumMainnet) {
      return `https://api.zan.top/node/v1/eth/mainnet/${this.key}`;
    }
    throw new Error(`Unsupported chain: ${chain}`);
  }
}
