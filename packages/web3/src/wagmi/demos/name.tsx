import { ConnectButton, Connector } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { configureChains, createConfig, mainnet } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';

const { publicClient, chains } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider ens config={config}>
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
