import { Account, ConnectButton, Connector, useConnection } from '@ant-design/web3';
import {
  MetaMask,
  OkxWallet,
  Sepolia,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { QueryClient } from '@tanstack/react-query';
import { Button, Space } from 'antd';
import { createSiweMessage } from 'viem/siwe';
import { http } from 'wagmi';

import { getNonce, verifyMessage } from './mock-api';

const queryClient = new QueryClient();

const DisconnectBtn: React.FC = () => {
  const { disconnect } = useConnection();

  return (
    <Button
      onClick={() => {
        disconnect?.();
      }}
      danger
    >
      Disconnect
    </Button>
  );
};

const App: React.FC = () => {
  const renderSignBtnText = (defaultDom: React.ReactNode, account?: Account) => {
    const { address } = account ?? {};
    const ellipsisAddress = address ? `${address.slice(0, 6)}...${address.slice(-6)}` : '';
    return `Sign in as ${ellipsisAddress}`;
  };

  return (
    <WagmiWeb3ConfigProvider
      siwe={{
        getNonce,
        createMessage: (props) => {
          return createSiweMessage({ ...props, statement: 'Ant Design Web3' });
        },
        verifyMessage,
      }}
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      ens
      chains={[Sepolia]}
      transports={{
        [Sepolia.id]: http(),
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
          <ConnectButton signBtnTextRender={renderSignBtnText} />
        </Connector>
        <DisconnectBtn />
      </Space>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
