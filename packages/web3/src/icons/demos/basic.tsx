import { Space } from 'antd';
import { BitcoinCircleColorful, EthereumFilled } from '@ant-design/web3-icons';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinCircleColorful />
      <EthereumFilled />
    </Space>
  );
};

export default App;
