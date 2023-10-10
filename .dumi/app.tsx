// @ts-ignore
import { Web3ConfigProvider } from '../packages/web3/dist/esm'; // use the same provider with demo in dumi
import * as ethers from 'ethers';
// @ts-ignore
import ProviderAdapter from '../packages/adapter-ethers/dist/esm';

const provider = new ProviderAdapter(ethers);

export function rootContainer(container: React.ReactNode) {
  return <Web3ConfigProvider provider={provider}>{container}</Web3ConfigProvider>;
}
