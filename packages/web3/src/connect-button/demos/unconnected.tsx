import { UnconnectedButton } from '@ant-design/web3';
import { Space } from 'antd';

export default () => {
  return (
    <Space>
      <UnconnectedButton type="default" />
      <UnconnectedButton type="primary" />
      <UnconnectedButton type="text" />
    </Space>
  );
};
