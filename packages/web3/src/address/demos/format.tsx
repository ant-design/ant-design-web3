import { Address } from '@ant-design/web3';
import { Space } from 'antd';

import { formatAddress } from '../../utils';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <div>
        Default format: <Address address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} format />
      </div>
      <div>
        Custom format:{' '}
        <Address
          address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
          format={(input) => {
            return formatAddress(input, 5);
          }}
        />
      </div>
    </Space>
  );
};

export default App;
