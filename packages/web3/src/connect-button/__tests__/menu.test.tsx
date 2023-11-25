import { BuildInMenuItemKey, ConnectButton } from '..';
import { fireEvent, render } from '@testing-library/react';
import type { MenuProps } from 'antd';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CopyOutlined, LogoutOutlined } from '@ant-design/icons';
import { mockClipboard } from '../../utils/test-utils';
import { readCopyText } from '../../utils';

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
    label: 'Copy Address',
    key: BuildInMenuItemKey.CopyAddress,
    onClick: () => {
      console.log('Copy Address');
    },
    icon: <CopyOutlined />,
  },
  {
    label: 'Disconnect',
    key: BuildInMenuItemKey.Disconnect,
    onClick: () => {
      console.log('Disconnect');
    },
    icon: <LogoutOutlined />,
  },
];

describe('ConnectButton', () => {
  let resetMockClipboard: () => void;
  beforeEach(() => {
    resetMockClipboard = mockClipboard();
  });
  afterEach(() => {
    resetMockClipboard();
  });
  it('Should show menu when hover button', async () => {
    const App = () => <ConnectButton menuItems={menuItems} clickActionType="showMenu" />;
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      expect(baseElement.querySelector('.ant-dropdown-menu')).not.toBeNull();
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBe(4);
      expect(baseElement.querySelector('.ant-dropdown-menu-item')?.textContent).toBe('Menu Item 1');
      expect(
        baseElement.querySelector('.ant-dropdown-menu-item')?.getAttribute('data-menu-id'),
      ).toBe('rc-menu-uuid-test-1');
      expect(baseElement).toMatchSnapshot();
    });
  });
  it('Should show profile modal when click button', async () => {
    const App = () => (
      <ConnectButton menuItems={menuItems} clickActionType="showProfileModal" connected />
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button-text') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-button-profile-modal')).not.toBeNull();
      expect(baseElement).toMatchSnapshot();
    });
  });
  it('Should call action when click menu item with build-in action key', async () => {
    const onDisconnectClick = vi.fn();
    const App = () => (
      <ConnectButton
        address="0x3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        menuItems={menuItems}
        clickActionType="showMenu"
        onDisconnectClick={onDisconnectClick}
        connected
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button-text') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-button-profile-modal')).toBeNull();
      fireEvent.click(
        baseElement.querySelector('[data-menu-id="rc-menu-uuid-test-copyAddress"]') as Element,
      );
      expect(baseElement.querySelector('.ant-message')).not.toBeNull();
      expect(baseElement.querySelector('.ant-message-notice-content')?.textContent).toBe(
        'Address Copied!',
      );
      expect(readCopyText()).resolves.toBe('0x3ea2cfd153b8d8505097b81c87c11f5d05097c18');
      fireEvent.click(
        baseElement.querySelector('[data-menu-id="rc-menu-uuid-test-disconnect"]') as Element,
      );
      expect(onDisconnectClick).toBeCalled();
    });
  });
});
