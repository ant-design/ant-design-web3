import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';

const App: React.FC = () => {
  const menuItems: MenuItemType[] = [
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
  ];
  return (
    <Space>
      <ConnectButton
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        name="No menu by default"
        avatar={{
          src: 'https://metamask.io/images/metamask-logo.png',
        }}
        onMenuClick={(item) => console.log('onMenuClick', item)}
        connected
      />
      <ConnectButton
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        name="Display default menu"
        avatar={{
          src: 'https://metamask.io/images/metamask-logo.png',
        }}
        actionsMenu
        connected
      />
      <ConnectButton
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        name="Insert menu items before default items"
        avatar={{
          src: 'https://metamask.io/images/metamask-logo.png',
        }}
        onMenuClick={(item) => console.log('onMenuClick', item)}
        actionsMenu={{
          extraItems: menuItems,
        }}
        connected
      />
      <ConnectButton
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        name="Override menu items"
        avatar={{
          src: 'https://metamask.io/images/metamask-logo.png',
        }}
        onMenuClick={(item) => console.log('onMenuClick', item)}
        actionsMenu={{
          items: menuItems,
        }}
        connected
      />
    </Space>
  );
};

export default App;
