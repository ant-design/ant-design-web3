import { ConnectButton, Connector } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    walletConnect({
      showQrModal: true,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
  ],
  storage: null,
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      wallets={[
        WalletConnect({
          useWalletConnectOfficialModal: true,
        }),
      ]}
      config={config}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
