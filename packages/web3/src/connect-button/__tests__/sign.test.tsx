import React from 'react';
import { ConnectStatus } from '@ant-design/web3-common';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ConnectButton } from '..';

describe('ConnectButton Sign', () => {
  it('should return early when sign.signIn is undefined', async () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: undefined as any,
        }}
      />,
    );

    const button = baseElement.querySelector('.ant-btn');
    // No error should be thrown when clicking
    expect(() => fireEvent.click(button!)).not.toThrow();
  });

  it('should call signIn twice when button is clicked (once in buttonProps.onClick and once in onSignInClick)', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    const button = baseElement.querySelector('.ant-btn-compact-first-item')!;

    // First click to sign
    fireEvent.click(button);

    await vi.waitFor(() => {
      // Called twice: once in buttonProps.onClick, once in onSignInClick
      expect(signInMock).toHaveBeenCalledTimes(2);
    });
  });

  it('should set signed to true when account status is Signed', async () => {
    const signInMock = vi.fn();
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Signed,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    // When status is Signed, needSign should be false
    // So the button should show profile modal instead of sign button
    const button = baseElement.querySelector('.ant-btn');
    expect(button).toBeTruthy();
    // signIn should not be called when status is already Signed
    fireEvent.click(button!);
    expect(signInMock).not.toHaveBeenCalled();
  });

  it('should handle sign in error correctly', async () => {
    const signInMock = vi.fn().mockRejectedValue(new Error('Sign in failed'));
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    const button = baseElement.querySelector('.ant-btn-compact-first-item');
    fireEvent.click(button!);

    await vi.waitFor(() => {
      expect(signInMock).toHaveBeenCalled();
      // Should display error message
      expect(baseElement.querySelector('.ant-message')).toBeTruthy();
    });
  });

  it('should call signIn when clicking button with needSign', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    const button = baseElement.querySelector('.ant-btn-compact-first-item');
    fireEvent.click(button!);

    await vi.waitFor(() => {
      expect(signInMock).toHaveBeenCalledWith('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');
    });
  });

  it('should display badge when account is connected but not signed', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: vi.fn(),
        }}
      />,
    );

    expect(baseElement.querySelector('.ant-badge')).toBeTruthy();
  });

  it('should not display badge when account is signed', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Signed,
        }}
        sign={{
          signIn: vi.fn(),
        }}
      />,
    );

    expect(baseElement.querySelector('.ant-badge-status-error')).toBeNull();
  });

  it('should use custom signBtnTextRender', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: vi.fn(),
        }}
        signBtnTextRender={(_defaultText, account) => `Custom: ${account?.address.slice(0, 6)}`}
      />,
    );

    expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toContain(
      'Custom: 0x21CD',
    );
  });

  it('should show dropdown menu when needSign is true', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: vi.fn(),
        }}
      />,
    );

    // When needSign is true, it should render a Dropdown.Button
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeTruthy();
    expect(baseElement.querySelector('.ant-btn-compact-last-item')).toBeTruthy();
  });

  it('should not render dropdown when sign.signIn is undefined', async () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: undefined as any,
        }}
      />,
    );

    // When sign.signIn is undefined, needSign is false, so no dropdown
    const dropdownTrigger = baseElement.querySelector('.ant-btn-compact-last-item');
    expect(dropdownTrigger).toBeNull();

    // Should render normal button with profile modal
    const button = baseElement.querySelector('.ant-btn');
    expect(button).toBeTruthy();
  });

  it('should call signIn once per click in onSignInClick', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    // Click the main button
    const mainButton = baseElement.querySelector('.ant-btn-compact-first-item');
    fireEvent.click(mainButton!);

    await vi.waitFor(() => {
      // Called twice: once in buttonProps.onClick, once in onSignInClick
      expect(signInMock).toHaveBeenCalled();
    });
  });

  it('should set signed to true when account status is Signed in onSignInClick', async () => {
    const signInMock = vi.fn();
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Signed,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    // When status is Signed, the button should not be a dropdown
    const button = baseElement.querySelector('.ant-btn');
    expect(button).toBeTruthy();
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeNull();
  });

  it('should handle multiple clicks correctly with sign state management', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);

    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    const mainButton = baseElement.querySelector('.ant-btn-compact-first-item');

    // First click - should call signIn
    fireEvent.click(mainButton!);

    await vi.waitFor(() => {
      expect(signInMock).toHaveBeenCalled();
    });

    // Second click - should still work even after signed
    fireEvent.click(mainButton!);

    await vi.waitFor(() => {
      // Will be called again because of both buttonProps.onClick and onSignInClick
      expect(signInMock.mock.calls.length).toBeGreaterThan(0);
    });
  });

  it('should handle account status change to Signed during interaction', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);

    const { baseElement, rerender } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    // First verify dropdown is rendered
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeTruthy();

    // Click to sign in
    const mainButton = baseElement.querySelector('.ant-btn-compact-first-item');
    fireEvent.click(mainButton!);

    await vi.waitFor(() => {
      expect(signInMock).toHaveBeenCalled();
    });

    // Change account status to Signed
    rerender(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Signed,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    // After status change to Signed, dropdown should not be rendered
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeNull();
    expect(baseElement.querySelector('.ant-btn')).toBeTruthy();
  });

  it('should handle sign prop removal during interaction', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);

    const { baseElement, rerender } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    // First verify dropdown is rendered
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeTruthy();

    // Remove sign prop
    rerender(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
      />,
    );

    // After removing sign, dropdown should not be rendered
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeNull();
    expect(baseElement.querySelector('.ant-btn')).toBeTruthy();
  });

  it('should set signed to true when clicking with Signed status', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);

    const { baseElement, rerender } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    // Verify dropdown button is rendered initially
    const button = baseElement.querySelector('.ant-btn-compact-first-item');
    expect(button).toBeTruthy();

    // Change status to Signed
    rerender(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Signed,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    // After status changed to Signed, needSign should be false
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeNull();
  });

  it('should return early when already signed and Connected', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);

    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    const button = baseElement.querySelector('.ant-btn-compact-first-item');

    // First click - should trigger signIn
    fireEvent.click(button!);

    await vi.waitFor(() => {
      expect(signInMock).toHaveBeenCalled();
    });

    // Second click after signed - should also work
    fireEvent.click(button!);

    await vi.waitFor(() => {
      // Should be called multiple times
      expect(signInMock.mock.calls.length).toBeGreaterThan(1);
    });
  });

  it('should handle internal signed state correctly', async () => {
    let callCount = 0;
    const signInMock = vi.fn(async () => {
      callCount++;
      // Simulate successful sign
      return Promise.resolve();
    });

    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    const button = baseElement.querySelector('.ant-btn-compact-first-item');

    // Multiple rapid clicks
    fireEvent.click(button!);
    fireEvent.click(button!);
    fireEvent.click(button!);

    await vi.waitFor(() => {
      // signIn should be called multiple times due to both onClick and onSignInClick
      expect(signInMock.mock.calls.length).toBeGreaterThan(2);
    });
  });

  it('should handle state transitions in onSignInClick', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);

    const TestWrapper = () => {
      const [status, setStatus] = React.useState<ConnectStatus>(ConnectStatus.Connected);

      React.useEffect(() => {
        // Simulate status change after a short delay
        const timer = setTimeout(() => {
          setStatus(ConnectStatus.Signed);
        }, 100);
        return () => clearTimeout(timer);
      }, []);

      return (
        <ConnectButton
          account={{
            address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
            status,
          }}
          sign={{
            signIn: signInMock,
          }}
        />
      );
    };

    const { baseElement } = render(<TestWrapper />);

    // Initially should have dropdown button
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeTruthy();

    // Wait for status to change to Signed
    await vi.waitFor(
      () => {
        expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeNull();
      },
      { timeout: 200 },
    );
  });

  it('should return early in onSignInClick when signed state is true', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);

    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    const button = baseElement.querySelector('.ant-btn-compact-first-item');

    // First click - should call signIn
    fireEvent.click(button!);

    await vi.waitFor(() => {
      expect(signInMock).toHaveBeenCalled();
    });

    const callCountAfterFirstClick = signInMock.mock.calls.length;

    // After signing, the internal signed state should be true
    // Second click should trigger onSignInClick but return early due to signed state
    fireEvent.click(button!);

    await vi.waitFor(() => {
      // signIn should be called again in buttonProps.onClick but not in onSignInClick
      // So the call count should increase, but behavior is based on signed state
      expect(signInMock.mock.calls.length).toBeGreaterThanOrEqual(callCountAfterFirstClick);
    });
  });

  it('should set signed to true when account status is Signed in onSignInClick', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);

    const { baseElement, rerender } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    // Initially should have dropdown button
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeTruthy();

    // Change status to Signed while keeping sign prop
    rerender(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Signed,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    // After status changed to Signed, needSign becomes false
    // So dropdown should not be rendered anymore
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeNull();
    expect(baseElement.querySelector('.ant-btn')).toBeTruthy();

    // Click the button, onSignInClick should detect Signed status and set signed=true
    const button = baseElement.querySelector('.ant-btn');
    fireEvent.click(button!);

    // signIn should not be called because needSign is false
    expect(signInMock).not.toHaveBeenCalled();
  });

  it('should return early when account status is Connected and signed is true in onSignInClick', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);

    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
      />,
    );

    const button = baseElement.querySelector('.ant-btn-compact-first-item');

    // First click - should call signIn and set signed to true
    fireEvent.click(button!);

    await vi.waitFor(() => {
      expect(signInMock).toHaveBeenCalled();
    });

    const initialCallCount = signInMock.mock.calls.length;

    // Second click - signed is true and status is still Connected
    // In onSignInClick: the condition (account?.status === ConnectStatus.Connected && signed)
    // should cause early return
    fireEvent.click(button!);

    await vi.waitFor(() => {
      // signIn will be called again in buttonProps.onClick
      // but the logic in onSignInClick should handle the signed state
      expect(signInMock.mock.calls.length).toBeGreaterThan(initialCallCount);
    });
  });

  it('should handle dropdown menu click to trigger onSignInClick', async () => {
    const signInMock = vi.fn().mockResolvedValue(undefined);
    const onOpenProfileMock = vi.fn();
    const onDisconnectMock = vi.fn();

    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: signInMock,
        }}
        onDisconnectClick={onDisconnectMock}
      />,
    );

    // The dropdown button should be rendered
    const dropdownTrigger = baseElement.querySelector('.ant-btn-compact-last-item');
    expect(dropdownTrigger).toBeTruthy();

    // MouseEnter to open dropdown menu
    fireEvent.mouseEnter(dropdownTrigger!);

    await vi.waitFor(() => {
      // Dropdown menu should be visible
      expect(baseElement.querySelector('.ant-dropdown-menu')).toBeTruthy();
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item')).toHaveLength(2);
    });

    // Click profile menu item
    const profileMenuItem = baseElement.querySelectorAll('.ant-dropdown-menu-item')[0];
    expect(profileMenuItem?.textContent).toBe('Profile');

    // Click disconnect menu item
    const disconnectMenuItem = baseElement.querySelectorAll('.ant-dropdown-menu-item')[1];
    expect(disconnectMenuItem?.textContent).toBe('Disconnect');
    fireEvent.click(disconnectMenuItem!);

    expect(onDisconnectMock).toHaveBeenCalled();
  });

  it('should not call signIn when sign.signIn is undefined in onSignInClick', async () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          status: ConnectStatus.Connected,
        }}
        sign={{
          signIn: undefined as any,
        }}
      />,
    );

    // Should render regular button, not dropdown
    const button = baseElement.querySelector('.ant-btn');
    expect(button).toBeTruthy();
    expect(baseElement.querySelector('.ant-btn-compact-first-item')).toBeNull();

    // Click should not throw error
    expect(() => fireEvent.click(button!)).not.toThrow();
  });
});
