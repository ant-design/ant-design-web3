import { ConnectButton } from '..';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mockClipboard } from '../../utils/test-utils';
import { readCopyText } from '../../utils';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';

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

describe('ConnectButton', () => {
  let resetMockClipboard: () => void;
  beforeEach(() => {
    resetMockClipboard = mockClipboard();
  });
  afterEach(() => {
    resetMockClipboard();
  });
  it('Should show menu when click button', async () => {
    const App = () => (
      <ConnectButton address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" actionsMenu />
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      expect(baseElement.querySelector('.ant-dropdown-menu')).not.toBeNull();
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBe(2);
      expect(baseElement.querySelector('.ant-dropdown-menu-item')?.textContent).toBe(
        'Copy Address',
      );
      expect(
        baseElement.querySelector('.ant-dropdown-menu-item')?.getAttribute('data-menu-id'),
      ).toBe('rc-menu-uuid-test-copyAddress');
      expect(baseElement).toMatchSnapshot();
    });
    fireEvent.click(baseElement.querySelector('.ant-dropdown-menu-item') as Element);
    await vi.waitFor(() => {
      expect(readCopyText()).resolves.toBe('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');
      expect(baseElement.querySelector('.ant-message')).not.toBeNull();
      expect(baseElement.querySelector('.ant-message-notice-content')?.textContent).toBe(
        'Address Copied!',
      );
    });
  });
  it('Should not show menu by default', async () => {
    const App = () => <ConnectButton />;
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.ant-dropdown-trigger')).toBeNull();
  });
  it('Should not show menu by actionsMenu be setting false', async () => {
    const App = () => <ConnectButton actionsMenu={false} />;
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.ant-dropdown-trigger')).toBeNull();
  });
  it('Should insert menu items before default menu items when pass extraItems into actionsMenu', async () => {
    const menuClickFn = vi.fn();
    const App = () => (
      <ConnectButton
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        actionsMenu={{
          extraItems: menuItems,
        }}
        onMenuClick={(info) => menuClickFn(info?.key)}
      />
    );
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
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[0] as Element);
    await vi.waitFor(() => {
      expect(menuClickFn).toBeCalledWith('1');
    });
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[2] as Element);
    await vi.waitFor(() => {
      expect(readCopyText()).resolves.toBe('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');
      expect(baseElement.querySelector('.ant-message')).not.toBeNull();
      expect(baseElement.querySelector('.ant-message-notice-content')?.textContent).toBe(
        'Address Copied!',
      );
      expect(menuClickFn).toBeCalledWith('copyAddress');
    });
  });
  it('Should override menu items when pass items into actionsMenu', async () => {
    const menuClickFn = vi.fn();
    const App = () => (
      <ConnectButton
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        actionsMenu={{
          items: menuItems,
        }}
        onMenuClick={(info) => menuClickFn(info?.key)}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      expect(baseElement.querySelector('.ant-dropdown-menu')).not.toBeNull();
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBe(2);
      expect(baseElement.querySelector('.ant-dropdown-menu-item')?.textContent).toBe('Menu Item 1');
      expect(
        baseElement.querySelector('.ant-dropdown-menu-item')?.getAttribute('data-menu-id'),
      ).toBe('rc-menu-uuid-test-1');
      expect(baseElement).toMatchSnapshot();
    });
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[0] as Element);
    await vi.waitFor(() => {
      expect(menuClickFn).toBeCalledWith('1');
    });
  });
});
