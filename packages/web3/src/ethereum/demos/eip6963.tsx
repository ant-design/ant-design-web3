import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { message } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      wallets={[MetaMask()]}
    >
      <Connector
        onConnected={(account) => {
          messageApi.success(`Connected to ${account?.address}`);
        }}
      >
        <ConnectButton />
      </Connector>
      {contextHolder}
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
