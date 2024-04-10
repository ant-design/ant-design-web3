import React from 'react';
import { ConnectButton, Connector, type Account } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import type { Wallet } from '@ant-design/web3-common';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('Connector quick connect', () => {
  it('quick connect with extension', async () => {
    const connectFn = vi.fn();
    const App = () => {
      const wallets: Wallet[] = [
        {
          ...metadata_MetaMask,
          hasWalletReady: async () => {
            return true;
          },
          hasExtensionInstalled: async () => true,
        },
        {
          ...metadata_WalletConnect,
          hasWalletReady: async () => {
            return true;
          },
          getQrCode: async () => {
            return {
              uri: 'http://test.com',
            };
          },
        },
      ];

      return (
        <Connector availableWallets={wallets} connect={connectFn}>
          <ConnectButton quickConnect />
        </Connector>
      );
    };
    const { baseElement } = render(<App />);

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-icon-metamask-colorful')).toBeTruthy();
    });

    fireEvent.click(baseElement.querySelector('.ant-btn')!);

    await vi.waitFor(() => {
      expect(connectFn).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'MetaMask',
        }),
        expect.objectContaining({
          connectType: 'extension',
        }),
      );
    });
  });

  it('open qrcode default', async () => {
    const App = () => {
      const [account, setAccount] = React.useState<Account | undefined>();

      const wallets: Wallet[] = [
        {
          ...metadata_MetaMask,
          hasWalletReady: async () => {
            return true;
          },
          hasExtensionInstalled: async () => false,
        },
        {
          ...metadata_WalletConnect,
          hasWalletReady: async () => {
            return true;
          },
          getQrCode: async () => {
            return {
              uri: 'http://test.com',
            };
          },
        },
      ];

      return (
        <Connector
          account={account}
          availableWallets={wallets}
          connect={() => {
            // hold connect for test qrcode display
            return new Promise(() => {});
          }}
          disconnect={async () => {
            setAccount(undefined);
          }}
        >
          <ConnectButton quickConnect />
        </Connector>
      );
    };
    const { baseElement } = render(<App />);

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-icon-wallet-connect-colorful')).toBeTruthy();
    });

    fireEvent.click(baseElement.querySelector('.ant-btn')!);

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-btn-loading-icon')).toBeTruthy();
      expect(baseElement.querySelector('.ant-modal-body')).toBeTruthy();
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code')).toBeTruthy();
      expect(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-tip')?.textContent).toBe(
        "Don't know WalletConnect?",
      );
      expect(
        baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-title')?.textContent,
      ).toBe('Scan with your wallet');
    });
  });

  it('actionRef.selectWallet call', async () => {
    const App = () => {
      const [account, setAccount] = React.useState<Account | undefined>();

      const wallets: Wallet[] = [
        {
          ...metadata_MetaMask,
          hasWalletReady: async () => {
            return true;
          },
          hasExtensionInstalled: async () => false,
        },
        {
          ...metadata_WalletConnect,
          hasWalletReady: async () => {
            return true;
          },
          getQrCode: async () => {
            return {
              uri: 'http://test.com',
            };
          },
        },
      ];

      return (
        <Connector
          account={account}
          availableWallets={wallets}
          connect={() => {
            // hold connect for test qrcode display
            return new Promise(() => {});
          }}
          disconnect={async () => {
            setAccount(undefined);
          }}
        >
          <ConnectButton quickConnect />
        </Connector>
      );
    };
    const { baseElement } = render(<App />);

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-icon-wallet-connect-colorful')).toBeTruthy();
    });

    fireEvent.mouseOver(baseElement.querySelector('.ant-dropdown-trigger')!);

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-dropdown-menu-item')).toBeTruthy();
      // click more wallet
      fireEvent.click(baseElement.querySelector('.ant-dropdown-menu-item')!);
    });

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-modal-body')).toBeTruthy();
      // close
      fireEvent.click(baseElement.querySelector('.ant-modal-close-x')!);
    });

    // open again
    fireEvent.click(baseElement.querySelector('.ant-btn')!);

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-btn-loading-icon')).toBeTruthy();
      expect(baseElement.querySelector('.ant-modal-body')).toBeTruthy();
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code')).toBeTruthy();
    });
  });
});
