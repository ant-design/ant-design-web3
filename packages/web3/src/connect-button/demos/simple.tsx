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
      apiKey: YOUR_ZAN_API_KEY,
    }),
  ],
  wallets: [
    new WalletConnectProvider({
      projectId: YOUR_WALLET_CONNET_PROJECT_ID,
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
