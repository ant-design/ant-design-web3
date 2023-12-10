import { Space } from 'antd';
import { BitcoinColorful, EthereumFilled } from '@ant-design/web3-icons';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinColorful
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
