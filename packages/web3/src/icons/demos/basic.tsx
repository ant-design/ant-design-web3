import { Space } from 'antd';
import {
  BitcoinColorful,
  EthereumColorful,
  BSCColorful,
  EthereumFilled,
  SuiFilled,
} from '@ant-design/web3-icons';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinColorful />
      <EthereumColorful />
      <BSCColorful />
      <EthereumFilled />
      <SuiFilled style={{ fontSize: 32 }} />
    </Space>
  );
};

export default App;
