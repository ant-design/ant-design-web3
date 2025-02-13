import React from 'react';
import { ConnectModal, Web3ConfigProvider, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card, Space } from 'antd';

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
  ];

  return (
    <Web3ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000000',
          colorLink: '#8b837d',
          colorBgContainer: '#eadcd1',
        },
        components: {
          Button: {
            defaultShadow: '-4px 4px 0px #000000,inset 0 0 0 2px #000000',
            defaultHoverBg: '#f3eae4',
            defaultBorderColor: '#000000',
            defaultBg: '#fff',
          },
        },
        web3Components: {
          ConnectModal: {
            hoverWalletBg: '#f3eae4',
          },
        },
      }}
    >
      <Space>
        <Card
          style={{
            boxShadow: '-10px 10px 0px #000000,inset 0 0 0 2px #000000',
            border: 'none',
          }}
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
    </Web3ConfigProvider>
  );
};

export default App;
