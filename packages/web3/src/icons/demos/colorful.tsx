import {
  ArbitrumColorful,
  BitcoinColorful,
  BSCColorful,
  EthereumColorful,
  OptimismColorful,
  PolygonColorful,
} from '@ant-design/web3-icons';
import { Space } from 'antd';

const style = {
  fontSize: 64,
};

const App: React.FC = () => {
  return (
    <Space>
      <BitcoinColorful style={style} />
      <EthereumColorful style={style} />
      <BSCColorful style={style} />
      <OptimismColorful style={style} />
      <PolygonColorful style={style} />
      <ArbitrumColorful style={style} />
    </Space>
  );
};

export default App;
