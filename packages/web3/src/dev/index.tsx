import { ConnectButton, Connector } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider2 } from '@ant-design/web3-wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { coinbaseWallet, injected, metaMask, walletConnect } from 'wagmi/connectors';

const client = new QueryClient();

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  multiInjectedProviderDiscovery: true,
  connectors: [
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={client}>
      <WagmiProvider config={config} reconnectOnMount>
        <WagmiWeb3ConfigProvider2>
          <Connector>
            <ConnectButton />
          </Connector>
        </WagmiWeb3ConfigProvider2>
      </WagmiProvider>
    </QueryClientProvider>
  );
};

export default App;
