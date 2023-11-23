import { ConnectButton } from '@ant-design/web3';
import { LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const App: React.FC = () => {
  const menuItems: MenuProps['items'] = [
    {
      label: 'Menu Item 1',
      key: '1',
      onClick: () => {
        console.log('Menu Item 1 clicked');
      },
    },
    {
      label: 'Menu Item 2',
      key: '2',
      onClick: () => {
        console.log('Menu Item 2 clicked');
      },
    },
    {
      label: 'Menu Item 3',
      key: '3',
      onClick: () => {
        console.log('Menu Item 3 clicked');
      },
      icon: <LogoutOutlined />,
    },
  ];
  return <ConnectButton menuItems={menuItems} />;
};

export default App;
