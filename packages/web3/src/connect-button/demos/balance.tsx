import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'test.eth',
        }}
        balance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1000000000000000000n,
        }}
      />
    </Space>
  );
};

export default App;
