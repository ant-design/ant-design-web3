import { ConnectButton, Connector } from '@ant-design/web3';
import { EthereumCircleColorful } from '@ant-design/web3-icons';
import {
  MetaMask,
  TokenPocket,
  UniversalWallet,
  WagmiWeb3ConfigProvider,
} from '@ant-design/web3-wagmi';
import { injected } from 'wagmi/connectors';

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      wallets={[
        new UniversalWallet(
          {
            name: 'TestWallet',
            remark: 'My TestWallet',
            icon: <EthereumCircleColorful />,
            extensions: [],
            group: 'Popular',
          },
          () => {
            return injected({
              target() {
                return {
                  id: 'testWallet',
                  name: 'TestWallet',
                  provider: typeof window !== 'undefined' && window.ethereum,
                };
              },
            });
          },
        ),
        TokenPocket({
          group: 'Popular',
        }),
        MetaMask({
          group: 'More',
        }),
      ]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
