import { fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ConnectButton } from '..';
import { readCopyText } from '../../utils/test-utils';
import type { MenuItemType } from '../interface';

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
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  it('Should show menu when hover button', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        actionsMenu
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.mouseEnter(baseElement.querySelector('.ant-dropdown-trigger') as Element);
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
    });
    fireEvent.click(baseElement.querySelector('.ant-dropdown-menu-item') as Element);
    await vi.waitFor(() => {
      expect(readCopyText()).resolves.toBe('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');
      expect(baseElement.querySelector('.ant-message')).not.toBeNull();
      expect(baseElement.querySelector('.ant-message-notice-content')?.textContent).toBe('Copied!');
    });
  });

  it('disconnect', async () => {
    const disconnectFn = vi.fn();
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        actionsMenu
        onDisconnectClick={disconnectFn}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.mouseEnter(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      expect(baseElement.querySelector('.ant-dropdown-menu')).not.toBeNull();
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBe(2);
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')[1]?.textContent).toBe(
        'Disconnect',
      );
    });
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[1] as Element);
    expect(disconnectFn).toBeCalled();
  });

  it('Should show menu when hover button', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        actionsMenu
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.mouseEnter(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(async () => {
      expect(baseElement.querySelector('.ant-dropdown-open')).not.toBeNull();
    });
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button') as Element);
    await vi.waitFor(async () => {
      expect(baseElement.querySelector('.ant-dropdown-open')).toBeNull();
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
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        actionsMenu={{
          extraItems: menuItems,
        }}
        onMenuItemClick={(info) => menuClickFn(info?.key)}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.mouseEnter(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      expect(baseElement.querySelector('.ant-dropdown-menu')).not.toBeNull();
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBe(4);
      expect(baseElement.querySelector('.ant-dropdown-menu-item')?.textContent).toBe('Menu Item 1');
      expect(
        baseElement.querySelector('.ant-dropdown-menu-item')?.getAttribute('data-menu-id'),
      ).toBe('rc-menu-uuid-test-1');
    });
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[0] as Element);
    await vi.waitFor(() => {
      expect(menuClickFn).toBeCalledWith('1');
    });
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[2] as Element);
    await vi.waitFor(() => {
      expect(readCopyText()).resolves.toBe('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');
      expect(baseElement.querySelector('.ant-message')).not.toBeNull();
      expect(baseElement.querySelector('.ant-message-notice-content')?.textContent).toBe('Copied!');
      expect(menuClickFn).toBeCalledWith('copyAddress');
    });
  });

  it('show extraItems when not connected', async () => {
    const menuClickFn = vi.fn();
    const App = () => (
      <ConnectButton
        actionsMenu={{
          extraItems: menuItems,
        }}
        onMenuItemClick={(info) => menuClickFn(info?.key)}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.mouseEnter(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      expect(baseElement.querySelector('.ant-dropdown-menu')).not.toBeNull();
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBe(2);
      expect(baseElement.querySelector('.ant-dropdown-menu-item')?.textContent).toBe('Menu Item 1');
      expect(
        baseElement.querySelector('.ant-dropdown-menu-item')?.getAttribute('data-menu-id'),
      ).toBe('rc-menu-uuid-test-1');
    });
  });

  it('Should override menu items when pass items into actionsMenu', async () => {
    const menuClickFn = vi.fn();
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        actionsMenu={{
          items: menuItems,
        }}
        onMenuItemClick={(info) => menuClickFn(info?.key)}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.mouseEnter(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      expect(baseElement.querySelector('.ant-dropdown-menu')).not.toBeNull();
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBe(2);
      expect(baseElement.querySelector('.ant-dropdown-menu-item')?.textContent).toBe('Menu Item 1');
      expect(
        baseElement.querySelector('.ant-dropdown-menu-item')?.getAttribute('data-menu-id'),
      ).toBe('rc-menu-uuid-test-1');
    });
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[0] as Element);
    await vi.waitFor(() => {
      expect(menuClickFn).toBeCalledWith('1');
    });
  });

  it('Should show default menu items when account is provider', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        actionsMenu
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.mouseEnter(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      // Ensure defaultMenuItems are present
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBeGreaterThan(0);
    });
  });

  it('Should show default menu items when account is provider', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        actionsMenu={{}}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.mouseEnter(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      // Ensure defaultMenuItems are present
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBeGreaterThan(0);
    });
  });

  it('Should not show default menu items when account is not provided', async () => {
    const App = () => <ConnectButton actionsMenu />;
    const { baseElement } = render(<App />);

    const dropdownTrigger = baseElement.querySelector('.ant-web3-connect-button')!;
    fireEvent.mouseEnter(dropdownTrigger);

    await vi.waitFor(() => {
      const dropdown = baseElement.querySelector('.ant-dropdown');
      expect(dropdown).toBeNull();
      // Ensure defaultMenuItems are not present
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')).toHaveLength(0);
    });
  });

  it('Should show both default and extraItems when account and extraItems are provided', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        actionsMenu={{
          extraItems: menuItems,
        }}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.mouseEnter(baseElement.querySelector('.ant-dropdown-trigger') as Element);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown')).not.toBeNull();
      // Ensure both defaultMenuItems and extraItems are present
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')?.length).toBeGreaterThan(
        menuItems.length,
      );
    });
  });
});
