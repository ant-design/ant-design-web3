import { ConnectButton, Connector } from '@ant-design/web3';
import {
  EthereumProvider,
  createProvider,
  ZANJsonRpcProvider,
  MetaMaskProvider,
  WalletConnectProvider,
  Mainnet,
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
  chains: [Mainnet],
});

const App: React.FC = () => {
  return (
    <EthereumProvider provider={provider}>
      <Connector>
        <ConnectButton />
      </Connector>
    </EthereumProvider>
  );
};

export default App;
