import { Space } from 'antd';
import {
  BitcoinColorful,
  EthereumColorful,
  BSCColorful,
  EthereumFilled,
  SuiFilled,
} from '@ant-design/web3-icons';

const App: React.FC = () => {
  const style: React.CSSProperties = {
    fontSize: 36,
  };

  return (
    <Space wrap>
      <BitcoinColorful style={style} />
      <EthereumColorful style={style} />
      <BSCColorful style={style} />
      <EthereumFilled style={style} />
      <SuiFilled style={style} />
    </Space>
  );
};

export default App;
