import { UnconnectedButton } from '@ant-design/web3';
import { Space } from 'antd';

export default () => {
  return (
    <Space>
      <UnconnectedButton buttonProps={{ type: 'default' }} />
      <UnconnectedButton buttonProps={{ type: 'primary' }} />
      <UnconnectedButton buttonProps={{ type: 'text' }} />
    </Space>
  );
};
