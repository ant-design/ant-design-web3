import { ConnectButton } from '@ant-design/web3';
import { WalletColorful, WalletWhiteColorful } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        type="primary"
        icon={<WalletWhiteColorful />}
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
        }}
      />
      <ConnectButton
        icon={<WalletColorful />}
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      />
    </Space>
  );
};

export default App;
