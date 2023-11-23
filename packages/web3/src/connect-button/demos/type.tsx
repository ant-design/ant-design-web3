import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        type="primary"
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        tooltip
        connected
      />
      <ConnectButton type="dashed" address="3ea2cfd153b8d8505097b81c87c11f5d05097c18" connected />
      <ConnectButton type="link" address="3ea2cfd153b8d8505097b81c87c11f5d05097c18" connected />
    </Space>
  );
};

export default App;
