import {
  Web3Provider,
  createProvider,
  ZANJsonRpcProvider,
  MetaMaskProvider,
  WalletConnectProvider,
  chains,
  // @ts-ignore
} from '../packages/ethereum/dist/esm'; // use the same provider with demo in dumi

const provider = createProvider({
  rpcs: [
    new ZANJsonRpcProvider({
      apiKey: 'd0eeefc2a4da4a8ba707889259b437d6',
    }),
  ],
  wallets: [
    new WalletConnectProvider({
      projectId: 'c07c0051c2055890eade3556618e38a6',
    }),
    new MetaMaskProvider(),
  ],
  chains: [chains.mainnet],
});

export function rootContainer(container: React.ReactNode) {
  return <Web3Provider provider={provider}>{container}</Web3Provider>;
}
