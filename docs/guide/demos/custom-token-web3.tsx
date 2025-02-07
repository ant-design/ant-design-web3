import React from 'react';
import { ConnectModal, Web3ConfigProvider, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Alert, Card, ConfigProvider, Space } from 'antd';

const App: React.FC = () => {
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
    <Web3ConfigProvider
      theme={{
        web3Components: {
          ConnectModal: {
            hoverBg: 'green',
          },
        },
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Alert: {
              defaultPadding: 56,
            },
          },
        }}
      >
        <Space>
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
        </Space>
        <Alert></Alert>
      </ConfigProvider>
    </Web3ConfigProvider>
  );
};

export default App;
