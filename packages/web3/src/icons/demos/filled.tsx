import { BitcoinFilled, EthereumFilled, USDTFilled, WalletFilled } from '@ant-design/web3-icons';
import { Space } from 'antd';

const style = {
  fontSize: 64,
};

const App: React.FC = () => {
  return (
    <Space>
      <BitcoinFilled style={style} />
      <EthereumFilled style={style} />
      <WalletFilled style={style} />
      <USDTFilled style={style} />
    </Space>
  );
};

export default App;
