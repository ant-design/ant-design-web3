import { CryptoPrice } from '@ant-design/web3';
import { Space } from 'antd';
import { BitcoinCircleColorful } from '@ant-design/web3-icons';

const App: React.FC = () => {
  return (
    <Space>
      <CryptoPrice icon value={1230000000000000000n} />
      <CryptoPrice icon={<BitcoinCircleColorful />} value={1230000000000000000n} />
    </Space>
  );
};

export default App;
