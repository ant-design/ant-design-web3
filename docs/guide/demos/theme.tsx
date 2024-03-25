import React from 'react';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card, ConfigProvider, Radio, Space, theme } from 'antd';

const App: React.FC = () => {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark');

  const walletList: Wallet[] = [
    {
      ...metadata_MetaMask,
    },
    {
      ...metadata_WalletConnect,
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
              }),
            2000,
          ),
        );
      },
    },
    {
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
      group: 'More',
      name: 'Test Wallet3',
      remark: 'remark 3',
      app: {
        link: 'https://test.com/xxx',
      },
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
              }),
            2000,
          ),
        );
      },
    },
  ];

  return (
    <Space direction="vertical">
      <Radio.Group
        onChange={(e) => {
          setMode(e.target.value);
        }}
        value={mode}
      >
        <Radio.Button value="dark">Dark</Radio.Button>
        <Radio.Button value="light">Light</Radio.Button>
      </Radio.Group>
      <ConfigProvider
        theme={{
          algorithm: mode === 'dark' ? theme.darkAlgorithm : undefined,
        }}
      >
        <Card
          styles={{
            body: {
              padding: 0,
              maxWidth: 795,
            },
          }}
        >
          <ConnectModal.ModalPanel walletList={walletList} />
        </Card>
      </ConfigProvider>
    </Space>
  );
};

export default App;
