import { ConnectModal } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Mock window.location.href
let locationHref = window.location.href;
Object.defineProperty(window, 'location', {
  value: {
    get href() {
      return locationHref;
    },
    set href(value) {
      locationHref = value;
    },
  },
  writable: true,
});

// Mock mobile environment
const mockUserAgent = vi.spyOn(window.navigator, 'userAgent', 'get');

describe('ConnectModal deeplink test', () => {
  beforeEach(() => {
    // Set mobile user agent
    mockUserAgent.mockReturnValue(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
    );
    // Clear location href
    locationHref = '';
  });

  it('should open deeplink when clicking wallet on mobile without extension', async () => {
    const testWallet = {
      icon: 'https://example.com/icon.png',
      name: 'Test Mobile Wallet',
      remark: 'Mobile Wallet',
      deeplink: {
        urlTemplate: 'testwallet://connect',
      },
    };

    const App = () => <ConnectModal open walletList={[testWallet]} />;

    const { baseElement } = render(<App />);

    // Find and click the wallet item
    const walletItem = baseElement.querySelector('.ant-web3-connect-modal-wallet-item');
    fireEvent.click(walletItem!);

    // Wait for the deeplink to be processed
    await vi.waitFor(() => {
      // Verify deeplink was opened via window.location.href
      expect(locationHref).toBe('testwallet://connect');
    });
  });

  it('should open deeplink when clicking wallet on mobile witho extension', async () => {
    const testWallet = {
      icon: 'https://example.com/icon.png',
      name: 'Test Mobile Wallet',
      remark: 'Mobile Wallet',
      deeplink: {
        urlTemplate: 'testwallet://connect',
      },
      hasExtensionInstalled: () => Promise.resolve(false),
      hasWalletReady: () => Promise.resolve(true),
    };

    const App = () => <ConnectModal open walletList={[testWallet]} />;

    const { baseElement } = render(<App />);

    // Find and click the wallet item
    const walletItem = baseElement.querySelector('.ant-web3-connect-modal-wallet-item');
    fireEvent.click(walletItem!);

    // Wait for the deeplink to be processed
    await vi.waitFor(() => {
      // Verify deeplink was opened via window.location.href
      expect(locationHref).toBe('testwallet://connect');
    });
  });

  it('should replace URL template variables in deeplink', async () => {
    const testWallet = {
      icon: 'https://example.com/icon.png',
      name: 'Test Mobile Wallet',
      remark: 'Mobile Wallet',
      deeplink: {
        urlTemplate: 'https://wallet.app/connect?url=${url}&ref=${ref}',
      },
    };

    const App = () => <ConnectModal open walletList={[testWallet]} />;

    const { baseElement } = render(<App />);

    // Find and click the wallet item
    const walletItem = baseElement.querySelector('.ant-web3-connect-modal-wallet-item');
    fireEvent.click(walletItem!);

    // Verify deeplink was opened with replaced variables
    const expectedUrl = `https://wallet.app/connect?url=${encodeURIComponent(window.location.href)}&ref=${encodeURIComponent(window.location.href)}`;
    await vi.waitFor(() => {
      expect(locationHref).toBe(expectedUrl);
    });
  });
});
