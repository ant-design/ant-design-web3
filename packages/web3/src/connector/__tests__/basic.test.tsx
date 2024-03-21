import React from 'react';
import {
  ConnectButton,
  Connector,
  type Account,
  type ConnectorTriggerProps,
} from '@ant-design/web3';
import { metadata_MetaMask } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it, vi } from 'vitest';

describe('Connector', () => {
  it('expect onCancelCallTest toBeCalled', async () => {
    const onCancelCallTest = vi.fn();
    const App = () => {
      return (
        <Connector modalProps={{ title: 'modal title', open: true, onCancel: onCancelCallTest }}>
          <Button>children</Button>
        </Connector>
      );
    };
    const { baseElement } = render(<App />);
    const btn = baseElement.querySelector('.ant-btn')!;
    fireEvent.click(btn);
    const closeBtn = baseElement.querySelector('.ant-modal-close')!;
    fireEvent.click(closeBtn);
    expect(onCancelCallTest).toBeCalled();
  });

  it('render children', () => {
    const App = () => (
      <Connector>
        <Button>children</Button>
      </Connector>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('children');
  });

  it('render when children is null', () => {
    const originalConsoleError = console.error;
    const mockConsoleError = (message: any) => {
      mockConsoleError.calls.push(message);
    };
    mockConsoleError.calls = [] as any[];
    console.error = mockConsoleError;
    expect(() => render(<Connector>{null}</Connector>)).not.toThrow();
    expect(mockConsoleError.calls.length).toBe(1);
    expect(mockConsoleError.calls[0]).toContain(
      '"children" property of the "Connector" is must be a React element',
    );
    console.error = originalConsoleError;
  });

  it('modalProps', () => {
    const App = () => {
      return (
        <Connector modalProps={{ title: 'modal title', open: true }}>
          <Button>children</Button>
        </Connector>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-modal-title')?.textContent).toBe(
      'modal title',
    );
  });

  it('modalProps: onCancel', async () => {
    const cancel = vi.fn();
    const App = () => {
      return (
        <Connector
          modalProps={{
            title: 'modal title',
            onCancel: () => {
              cancel();
            },
          }}
        >
          <ConnectButton />
        </Connector>
      );
    };
    const { baseElement } = render(<App />);
    fireEvent.click(baseElement.querySelector('.ant-btn')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-title')?.textContent).toBe(
        'modal title',
      );
    });
    fireEvent.click(baseElement.querySelector('.ant-modal-close')!);
    await vi.waitFor(() => {
      expect(cancel).toBeCalled();
    });
  });

  it('connect', async () => {
    const onConnectCallTest = vi.fn();
    const onDisconnected = vi.fn();
    const onDisconnect = vi.fn();
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { account, onConnectClick, onDisconnectClick, children } = props;
      return (
        <Button
          onClick={() => {
            if (account) {
              onDisconnectClick?.();
            } else {
              onConnectClick?.();
            }
          }}
        >
          {account?.address ?? children}
        </Button>
      );
    };
    const onConnected = vi.fn();

    const App = () => {
      const [account, setAccount] = React.useState<Account | undefined>();
      return (
        <Connector
          account={account}
          availableWallets={[
            {
              ...metadata_MetaMask,
              hasWalletReady: async () => {
                return true;
              },
            },
          ]}
          onConnect={onConnectCallTest}
          connect={async () => {
            setAccount({
              address: '0x1234567890',
            });
          }}
          disconnect={async () => {
            setAccount(undefined);
          }}
          onDisconnected={onDisconnected}
          onDisconnect={onDisconnect}
          onConnected={() => {
            onConnected();
          }}
        >
          <CustomButton>children</CustomButton>
        </Connector>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('children');
    fireEvent.click(baseElement.querySelector('.ant-btn')!);

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')).toBeTruthy();
    });
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')!);

    await vi.waitFor(() => {
      expect(onConnectCallTest).toBeCalled();
      expect(onConnected).toBeCalled();
    });

    fireEvent.click(baseElement.querySelector('.ant-modal-close')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal')?.className).toContain(
        'ant-zoom-leave',
      );
    });

    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('0x1234567890');
    fireEvent.click(baseElement.querySelector('.ant-btn')!);
    await vi.waitFor(() => {
      expect(onDisconnected).toBeCalled();
      expect(onDisconnect).toBeCalled();
    });
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('children');
  });

  it('should support controlled  loading', async () => {
    const App = () => {
      const [account, setAccount] = React.useState<Account | undefined>();
      return (
        <Connector
          account={account}
          availableWallets={[
            {
              ...metadata_MetaMask,
              hasWalletReady: async () => {
                return true;
              },
            },
          ]}
          connect={async () =>
            new Promise((resolve) =>
              setTimeout(() => {
                setAccount({
                  address: '0x1234567890',
                });
                resolve();
              }, 1000),
            )
          }
          disconnect={async () => {
            setAccount(undefined);
          }}
        >
          <ConnectButton loading>children</ConnectButton>
        </Connector>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.anticon-loading')).toBeTruthy();
  });

  it('should support both of uncontrolled loading', async () => {
    const App = () => {
      const [account, setAccount] = React.useState<Account | undefined>();
      return (
        <Connector
          account={account}
          availableWallets={[
            {
              ...metadata_MetaMask,
              hasWalletReady: async () => {
                return true;
              },
            },
          ]}
          connect={async () =>
            new Promise((resolve) =>
              setTimeout(() => {
                setAccount({
                  address: '0x1234567890',
                });
                resolve();
              }, 1000),
            )
          }
          disconnect={async () => {
            setAccount(undefined);
          }}
        >
          <ConnectButton>children</ConnectButton>
        </Connector>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.anticon-loading')).toBeFalsy();
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);
    await vi.waitFor(async () => {
      fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')!);
    });
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.anticon-loading')).toBeTruthy();
    });
  });

  it('connect throw error', async () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { account, onConnectClick, onDisconnectClick, children } = props;
      return (
        <Button
          onClick={() => {
            if (account) {
              onDisconnectClick?.();
            } else {
              onConnectClick?.();
            }
          }}
        >
          {account?.address ?? children}
        </Button>
      );
    };

    const App = () => {
      const [account, setAccount] = React.useState<Account | undefined>();
      return (
        <Connector
          account={account}
          availableWallets={[
            {
              ...metadata_MetaMask,
              hasWalletReady: async () => {
                return true;
              },
            },
          ]}
          onConnect={() => {}}
          connect={async () => {
            return new Promise((resove, reject) => {
              reject({ message: 'mock network error ' });
            });
          }}
          disconnect={async () => {}}
          onDisconnected={() => {}}
          onConnected={() => {}}
        >
          <CustomButton>children</CustomButton>
        </Connector>
      );
    };
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('children');

    fireEvent.click(baseElement.querySelector('.ant-btn')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')).toBeTruthy();
    });

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-message-error')).not.toBeNull();
      expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('children');
    });
  });
});
