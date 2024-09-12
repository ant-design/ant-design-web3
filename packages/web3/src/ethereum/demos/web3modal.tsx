import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      wallets={[
        MetaMask(),
        WalletConnect({
          useWalletConnectOfficialModal: true,
        }),
      ]}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
        useWalletConnectOfficialModal: true,
      }}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
