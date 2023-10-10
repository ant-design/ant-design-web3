// @ts-ignore
import { Web3ConfigProvider, ZANJsonRpcProvider } from '../packages/web3/dist/esm'; // use the same provider with demo in dumi
// @ts-ignore
import ProviderAdapter from '../packages/adapter-ethers/dist/esm';

const provider = new ProviderAdapter(new ZANJsonRpcProvider('d0eeefc2a4da4a8ba707889259b437d6'));

export function rootContainer(container: React.ReactNode) {
  return <Web3ConfigProvider provider={provider}>{container}</Web3ConfigProvider>;
}
