import React from 'react';
import { useProvider } from '@ant-design/web3';
import {
  metadata_MetaMask,
  metadata_TokenPocket,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ConnectButton, Web3ConfigProvider, type Account } from '../../../../web3/src';

describe('ConnectButton with quickConnect', async () => {
  it('connect with extension install', async () => {
    const onClickCallFn = vi.fn();
    const CustomConnector = () => {
      const { connect, account, disconnect, availableWallets } = useProvider();

      return (
        <ConnectButton
          className="custom-btn"
          account={account}
          availableWallets={availableWallets}
          quickConnect
          onConnectClick={(wallet) => {
            onClickCallFn(wallet);
            connect?.();
          }}
          onDisconnectClick={() => {
            disconnect?.();
          }}
        />
      );
    };

    const App = () => {
      const [account, setAccount] = React.useState<Account | undefined>();

      const wallets = [
        {
          ...metadata_WalletConnect,
          getQrCode: async () => {
            return {
              uri: 'http://example.com',
            };
          },
        },
        {
          ...metadata_MetaMask,
          hasExtensionInstalled: async () => true,
          getQrCode: async () => {
            return {
              uri: 'http://example.com',
            };
          },
        },
      ];

      return (
        <Web3ConfigProvider
          availableWallets={wallets}
          connect={async () => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890',
            };
            setAccount(newAccount);
          }}
          disconnect={async () => {
            setAccount(undefined);
          }}
          account={account}
        >
          <CustomConnector />
        </Web3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);

    await vi.waitFor(() => {
      // show metamask quick connect
      expect(baseElement.querySelector('.ant-web3-icon-metamask-colorful')).toBeTruthy();
    });

    // connect
    fireEvent.click(baseElement.querySelector('.ant-btn.ant-btn-compact-first-item')!);
    await vi.waitFor(() => {
      expect(onClickCallFn).toBeCalledWith(
        expect.objectContaining({
          name: 'MetaMask',
        }),
      );
    });

    // connected
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('0x1234...7890');
      expect(baseElement.querySelector('.ant-web3-icon-metamask-colorful')).toBeFalsy();
    });

    // disconnect
    fireEvent.click(baseElement.querySelector('.ant-btn')!);

    await vi.waitFor(() => {
      expect(
        baseElement.querySelectorAll('.ant-web3-connect-button-profile-modal-footer .ant-btn')[1],
      ).toBeTruthy();
      fireEvent.click(
        baseElement.querySelectorAll('.ant-web3-connect-button-profile-modal-footer .ant-btn')[1],
      ); // click disconnect
      expect(baseElement.querySelector('.ant-web3-icon-metamask-colorful')).toBeTruthy();
    });

    // click for open menu
    fireEvent.mouseOver(baseElement.querySelector('.ant-btn.ant-dropdown-trigger')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item').length).toBe(2);
      fireEvent.click(baseElement.querySelector('.ant-web3-icon-wallet-connect-colorful')!);
      expect(onClickCallFn).toBeCalledWith(
        expect.objectContaining({
          name: 'WalletConnect',
        }),
      );
    });
  });

  it('connect with universal qrcode', async () => {
    const onClickCallFn = vi.fn();
    const CustomConnector = () => {
      const { connect, account, disconnect, availableWallets } = useProvider();

      return (
        <ConnectButton
          className="custom-btn"
          account={account}
          availableWallets={availableWallets}
          quickConnect
          onConnectClick={(wallet) => {
            onClickCallFn(wallet);
            connect?.();
          }}
          onDisconnectClick={() => {
            disconnect?.();
          }}
        />
      );
    };

    const App = () => {
      const wallets = [
        {
          ...metadata_MetaMask,
          hasExtensionInstalled: async () => false,
          getQrCode: async () => {
            return {
              uri: 'http://example.com',
            };
          },
        },
        {
          ...metadata_WalletConnect,
          getQrCode: async () => {
            return {
              uri: 'http://example.com',
            };
          },
        },
        {
          ...metadata_TokenPocket,
        },
      ];

      return (
        <Web3ConfigProvider availableWallets={wallets}>
          <CustomConnector />
        </Web3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);

    await vi.waitFor(() => {
      // show wallet connect quick connect
      expect(baseElement.querySelector('.ant-web3-icon-wallet-connect-colorful')).toBeTruthy();
    });

    // connect
    fireEvent.click(baseElement.querySelector('.ant-btn.ant-btn-compact-first-item')!);
    await vi.waitFor(() => {
      expect(onClickCallFn).toBeCalledWith(
        expect.objectContaining({
          name: 'WalletConnect',
        }),
      );
    });

    // click for open menu
    fireEvent.mouseOver(baseElement.querySelector('.ant-btn.ant-dropdown-trigger')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item').length).toBe(1);
      fireEvent.click(baseElement.querySelector('.ant-dropdown-menu-item')!); // click more wallets
      expect(onClickCallFn).toBeCalledWith(undefined);
    });
  });

  it('eip6963 icon', async () => {
    const onClickCallFn = vi.fn();
    const CustomConnector = () => {
      const { connect, account, disconnect, availableWallets } = useProvider();

      return (
        <ConnectButton
          className="custom-btn"
          account={account}
          availableWallets={availableWallets}
          quickConnect
          onConnectClick={(wallet) => {
            onClickCallFn(wallet);
            connect?.();
          }}
          onDisconnectClick={() => {
            disconnect?.();
          }}
        />
      );
    };

    const App = () => {
      const wallets = [
        {
          ...metadata_MetaMask,
          hasExtensionInstalled: async () => true,
          icon: 'https://www.tokenpocket.pro/_nuxt/img/logo.03b9a69.png',
        },
        {
          ...metadata_WalletConnect,
          getQrCode: async () => {
            return {
              uri: 'http://example.com',
            };
          },
        },
        {
          ...metadata_TokenPocket,
          hasExtensionInstalled: async () => true,
          icon: 'https://www.tokenpocket.pro/_nuxt/img/logo.03b9a69.png',
        },
      ];

      return (
        <Web3ConfigProvider availableWallets={wallets}>
          <CustomConnector />
        </Web3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-btn.ant-dropdown-trigger')).toBeTruthy();
    });
    // click for open menu
    fireEvent.mouseOver(baseElement.querySelector('.ant-btn.ant-dropdown-trigger')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item').length).toBe(3);
      expect(
        baseElement.querySelectorAll(
          '.ant-dropdown-menu-item .ant-web3-connect-button-quick-connect-icon',
        ).length,
      ).toBe(1);
      expect(
        baseElement.querySelectorAll('.ant-web3-connect-button-quick-connect-icon').length,
      ).toBe(2);
    });
  });

  it('ignore hasExtensionInstalled error', async () => {
    const onClickCallFn = vi.fn();
    const CustomConnector = () => {
      const { connect, account, disconnect, availableWallets } = useProvider();

      return (
        <ConnectButton
          className="custom-btn"
          account={account}
          availableWallets={availableWallets}
          quickConnect
          onConnectClick={(wallet) => {
            onClickCallFn(wallet);
            connect?.();
          }}
          onDisconnectClick={() => {
            disconnect?.();
          }}
        />
      );
    };

    const App = () => {
      const wallets = [
        {
          ...metadata_MetaMask,
          hasExtensionInstalled: async () => {
            throw new Error('error');
          },
          icon: 'https://www.tokenpocket.pro/_nuxt/img/logo.03b9a69.png',
        },
        {
          ...metadata_WalletConnect,
          getQrCode: async () => {
            return {
              uri: 'http://example.com',
            };
          },
        },
        {
          ...metadata_TokenPocket,
          hasExtensionInstalled: async () => true,
          icon: 'https://www.tokenpocket.pro/_nuxt/img/logo.03b9a69.png',
        },
      ];

      return (
        <Web3ConfigProvider availableWallets={wallets}>
          <CustomConnector />
        </Web3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-btn.ant-dropdown-trigger')).toBeTruthy();
    });
    // click for open menu
    fireEvent.mouseOver(baseElement.querySelector('.ant-btn.ant-dropdown-trigger')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelectorAll('.ant-dropdown-menu-item').length).toBe(2);
    });
  });
});
