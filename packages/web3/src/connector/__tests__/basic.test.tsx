import { Connector, type ConnectorTriggerProps, type Account } from '@ant-design/web3';
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
    expect(baseElement.querySelector('.ant-connect-modal-title')?.textContent).toBe('modal title');
  });

  it('connect', async () => {
    const onConnectCallTest = vi.fn();
    const onDisconnected = vi.fn();
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { address, connected, onConnectClick, onDisconnectClick, children } = props;
      return (
        <Button
          onClick={() => {
            if (connected) {
              onDisconnectClick?.();
            } else {
              onConnectClick?.();
            }
          }}
        >
          {address ?? children}
        </Button>
      );
    };
    const onConnected = vi.fn();

    const App = () => {
      const [accounts, setAccounts] = React.useState<Account[]>();
      return (
        <Connector
          accounts={accounts}
          wallets={[
            {
              ...metadata_MetaMask,
              hasBrowserExtensionInstalled: async () => {
                return true;
              },
            },
          ]}
          onConnect={onConnectCallTest}
          requestAccounts={async () => {
            return [
              {
                address: '0x1234567890',
              },
            ];
          }}
          disconnect={async () => {
            setAccounts([]);
          }}
          onDisconnected={onDisconnected}
          onConnected={(as) => {
            setAccounts(as);
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
      expect(baseElement.querySelector('.ant-connect-modal-wallet-item')).toBeTruthy();
    });
    fireEvent.click(baseElement.querySelector('.ant-connect-modal-wallet-item')!);

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
});
