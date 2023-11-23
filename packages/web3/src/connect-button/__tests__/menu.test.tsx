import { ConnectButton } from '..';
import { fireEvent, render } from '@testing-library/react';
import type { MenuProps } from 'antd';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { LogoutOutlined } from '@ant-design/icons';

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

describe('ConnectButton', () => {
  it('Should show menu when hover button', async () => {
    const App = () => <ConnectButton menuItems={menuItems} />;
    const { baseElement } = render(<App />);

    fireEvent.mouseEnter(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      expect(baseElement.querySelector('.ant-dropdown-menu')).not.toBeNull();
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBe(3);
      expect(baseElement.querySelector('.ant-dropdown-menu-item')?.textContent).toBe('Menu Item 1');
      expect(
        baseElement.querySelector('.ant-dropdown-menu-item')?.getAttribute('data-menu-id'),
      ).toBe('rc-menu-uuid-test-1');
      expect(baseElement).toMatchSnapshot();
    });
  });
});
