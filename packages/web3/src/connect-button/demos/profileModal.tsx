import { ConnectButton } from '@ant-design/web3';
import { Alert, Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        name="Display profileModal by default"
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        connected
        actionsMenu={false}
      />
      <ConnectButton
        name="Do not show profileModal"
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        connected
        actionsMenu={false}
        profileModal={false}
      />
      <ConnectButton
        name="Customize profileModal"
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        connected
        actionsMenu={false}
        profileModal={{
          width: 400,
          footer: <Alert message="Custom footer" type="success" style={{ textAlign: 'center' }} />,
        }}
      />
    </Space>
  );
};

export default App;
