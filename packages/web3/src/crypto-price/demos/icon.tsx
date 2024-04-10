import { CryptoPrice } from '@ant-design/web3';
import { BitcoinCircleColorful } from '@ant-design/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <CryptoPrice icon value={1230000000000000000n} />
      <CryptoPrice icon={<BitcoinCircleColorful />} value={1230000000000000000n} />
    </Space>
  );
};

export default App;
