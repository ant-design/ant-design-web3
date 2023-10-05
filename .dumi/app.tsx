// @ts-ignore
import { MockProvider, Web3ConfigProvider } from '../packages/web3/dist/esm'; // use the same provider with demo in dumi

const provider = new MockProvider();

export function rootContainer(container: React.ReactNode) {
  return <Web3ConfigProvider provider={provider}>{container}</Web3ConfigProvider>;
}
