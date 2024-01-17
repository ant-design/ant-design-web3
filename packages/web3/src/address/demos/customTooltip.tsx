import { Address } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} tooltip />
      <Address
        ellipsis
        address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
        tooltip={<span>hello</span>}
      />
      <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} tooltip={'hi'} />
      <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} tooltip={false} />
    </Space>
  );
};

export default App;
