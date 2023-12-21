import { ConnectButton } from '@ant-design/web3';
import { ConfigProvider, Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        type="primary"
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
        }}
        tooltip
      />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
          },
        }}
      >
        <ConnectButton
          type="primary"
          account={{
            address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          }}
          tooltip
        />
      </ConfigProvider>
      <ConnectButton
        type="dashed"
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      />
      <ConnectButton
        type="link"
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      />
    </Space>
  );
};

export default App;
