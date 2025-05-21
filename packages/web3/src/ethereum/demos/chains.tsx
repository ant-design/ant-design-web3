import { ConnectButton, Connector } from '@ant-design/web3';
import {
  Base,
  Hardhat,
  Localhost,
  Mainnet,
  MetaMask,
  Polygon,
  WagmiWeb3ConfigProvider,
  WalletConnect,
  X1Testnet,
} from '@ant-design/web3-wagmi';
import { http } from 'wagmi';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      eip6963
      transports={{
        [Mainnet.id]: http(),
        [Polygon.id]: http(),
        [X1Testnet.id]: http(),
        [Hardhat.id]: http(),
        [Localhost.id]: http(),
      }}
      wallets={[MetaMask(), WalletConnect()]}
      chains={[Mainnet, Polygon, Base, X1Testnet, Hardhat, Localhost]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
