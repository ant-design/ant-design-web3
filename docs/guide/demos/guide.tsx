import React from 'react';
import { ConnectButton, ConnectModalProps, Connector } from '@ant-design/web3';
import {
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { Checkbox, Divider, Radio, Space } from 'antd';
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
      showQrModal: false,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
  ],
});

const App: React.FC = () => {
  const [mode, setMode] = React.useState<ConnectModalProps['mode']>('simple');
  const [quickConnect, setQuickConnect] = React.useState<boolean>(false);
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
    >
      <Space direction="vertical">
        <Radio.Group
          onChange={(e) => {
            setMode(e.target.value);
          }}
          value={mode}
        >
          <Radio value="simple">simple mode</Radio>
          <Radio value="auto">auto mode</Radio>
        </Radio.Group>
        <Checkbox
          checked={quickConnect}
          onChange={(e) => {
            setQuickConnect(e.target.checked);
          }}
        >
          Quick Connect
        </Checkbox>
      </Space>
      <Divider />
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton quickConnect={quickConnect} />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
