import {
  Connector,
  type ConnectorTriggerProps,
  type Account,
  ConnectButton,
} from '@ant-design/web3';
import { metadata_MetaMask } from '@ant-design/web3-assets';
import React from 'react';
import { Button } from 'antd';
import { render, fireEvent } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';

describe('Connector', () => {
  it('render children', () => {
    const App = () => (
      <Connector>
        <Button>children</Button>
      </Connector>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('children');
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

  it('connect', async () => {
    const onConnectCallTest = vi.fn();
    const onDisconnected = vi.fn();
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
              hasBrowserExtensionInstalled: async () => {
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
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('0x1234567890');
    fireEvent.click(baseElement.querySelector('.ant-btn')!);
    await vi.waitFor(() => {
      expect(onDisconnected).toBeCalled();
    });
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('children');
  });
  it.only('should support both of Controlled and uncontrolled loading', async () => {
    const App = ({ loading }: { loading?: boolean }) => {
      const [account, setAccount] = React.useState<Account | undefined>();
      return (
        <Connector
          account={account}
          availableWallets={[
            {
              ...metadata_MetaMask,
              hasBrowserExtensionInstalled: async () => {
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
          <ConnectButton loading={loading}>children</ConnectButton>
        </Connector>
      );
    };
    const { baseElement, rerender } = render(<App loading />);
    expect(baseElement.querySelector('.ant-btn-loading')).toBeTruthy();
    rerender(<App />);
    expect(baseElement.querySelector('.ant-btn-loading')).toBeFalsy();
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);
    await vi.waitFor(async () => {
      fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')!);
    });
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-btn-loading')).toBeTruthy();
    });
  });
});
