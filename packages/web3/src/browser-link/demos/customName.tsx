import { BrowserLink } from '@ant-design/web3';
import { LinkOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  return (
    <BrowserLink
      icon={<LinkOutlined />}
      ellipsis
      address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
      name="Custom name"
    />
  );
};

export default App;
