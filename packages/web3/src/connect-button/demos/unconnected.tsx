import { UnconnectedButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <UnconnectedButton type="default" />
      <UnconnectedButton type="primary" />
      <UnconnectedButton type="text" />
    </Space>
  );
};

export default App;
