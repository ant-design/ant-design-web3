import { ConnectButton } from '@ant-design/web3';
import {
  EthereumProvider,
  createProvider,
  ZANJsonRpcProvider,
  MetaMaskProvider,
  WalletConnectProvider,
  chains,
} from '@ant-design/web3-ethereum';

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
  return;
}

export default () => {
  return (
    <EthereumProvider provider={provider}>
      <ConnectButton />
    </EthereumProvider>
  );
};
