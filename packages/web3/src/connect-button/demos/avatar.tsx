import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        size="small"
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu={false}
      />
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu={false}
      />
      <ConnectButton
        size="large"
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        actionsMenu={false}
      />
    </Space>
  );
};

export default App;
