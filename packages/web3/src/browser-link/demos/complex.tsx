import { BrowserLink } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <BrowserLink
        ellipsis
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        href="https://etherscan.io/address/3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        chain={Mainnet}
        iconStyle={{
          fontSize: 40,
          background: '#eee',
          boxShadow: '0 0 5px #999',
          padding: 8,
          borderRadius: '50%',
        }}
        target="_blank"
        rel="noopener noreferrer"
      />
    </Space>
  );
};

export default App;
