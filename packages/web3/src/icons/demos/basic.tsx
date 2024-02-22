import { BitcoinCircleColorful, BtczCircleColorful, EthereumFilled } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinCircleColorful />
      <EthereumFilled />
      <BtczCircleColorful />
    </Space>
  );
};

export default App;
