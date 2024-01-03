import { BitcoinCircleColorful, EthereumFilled } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinCircleColorful
        style={{
          fontSize: 48,
        }}
      />
      <div
        style={{
          fontSize: 48,
        }}
      >
        <EthereumFilled />
      </div>
    </Space>
  );
};

export default App;
