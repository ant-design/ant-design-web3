import {
  BitcoinFilled,
  BitcoinCircleFilled,
  EthereumFilled,
  EthereumCircleFilled,
  USDTFilled,
  USDTCircleFilled,
  SuiFilled,
  SuiCircleFilled,
} from '@ant-design/web3-icons';
import { Space } from 'antd';

const style = {
  fontSize: 64,
};

const App: React.FC = () => {
  return (
    <Space>
      <BitcoinFilled style={style} />
      <BitcoinCircleFilled style={style} />
      <EthereumFilled style={style} />
      <EthereumCircleFilled style={style} />
      <USDTFilled style={style} />
      <USDTCircleFilled style={style} />
      <SuiFilled style={style} />
      <SuiCircleFilled style={style} />
    </Space>
  );
};

export default App;
