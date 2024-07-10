import { ConnectButton, Connector } from '@ant-design/web3';
import { connectors, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { mainnet } from 'wagmi/chains';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      chains={[mainnet]}
      walletConnect={{ projectId: YOUR_WALLET_CONNECT_PROJECT_ID }}
      connectors={[
        connectors.metaMask({ group: '11kj' }),
        connectors.okxWallet(),
        connectors.turstWallet(),
      ]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
