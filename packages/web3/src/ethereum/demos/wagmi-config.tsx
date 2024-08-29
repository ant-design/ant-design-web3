import { ConnectButton, Connector } from '@ant-design/web3';
import {
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { QueryClient } from '@tanstack/react-query';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

const queryClient = new QueryClient();

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      ens
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        OkxWallet(),
      ]}
      config={config}
      queryClient={queryClient}
    >
      <Connector
        modalProps={{
          mode: 'simple',
        }}
      >
        <ConnectButton quickConnect />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
