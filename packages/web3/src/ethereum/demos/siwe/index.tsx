import { ConnectButton, Connector } from '@ant-design/web3';
import {
  Mainnet,
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { QueryClient } from '@tanstack/react-query';
import { Space } from 'antd';
import { createSiweMessage } from 'viem/siwe';
import { http } from 'wagmi';

import { getNonce, verifyMessage } from './mock-api';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      siwe={{
        getNonce,
        createMessage: (props) => createSiweMessage({ ...props, statement: 'Ant Design Web3' }),
        verifyMessage: verifyMessage,
      }}
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      ens
      chains={[Mainnet]}
      transports={{
        [Mainnet.id]: http(),
      }}
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: 'Popular',
        }),
        OkxWallet(),
      ]}
      queryClient={queryClient}
    >
      <Space>
        <Connector
          modalProps={{
            mode: 'simple',
          }}
        >
          <ConnectButton />
        </Connector>
      </Space>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
