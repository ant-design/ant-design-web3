import { Space } from 'antd';
import { BitcoinColorful, EthereumFilled } from '@ant-design/web3-icons';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinColorful />
      <EthereumFilled />
    </Space>
  );
};

export default App;
