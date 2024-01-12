import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
    walletConnect({
      showQrModal: true,
      projectId: YOUR_WALLET_CONNET_PROJECT_ID,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      wallets={[
        MetaMask(),
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
