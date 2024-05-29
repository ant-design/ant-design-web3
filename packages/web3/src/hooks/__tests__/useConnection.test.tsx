import React from 'react';
import { useAccount, useConnection, Web3ConfigProvider, type Account } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it, vi } from 'vitest';

describe('ConnectButton', () => {
  it('basic use', () => {
    const connectFn = vi.fn();
    const disconnectFn = vi.fn();

    const Demo: React.FC = () => {
      const { account } = useAccount();
      const { connect, disconnect } = useConnection();
      return (
        <Button
          onClick={() => {
            if (account) {
              disconnect?.();
            } else {
              connect?.();
            }
          }}
        >
          {account ? 'Disconnect' : 'Connect'}
        </Button>
      );
    };

    const App: React.FC = () => {
      const [testAccount, setTestAccount] = React.useState<Account>();
      return (
        <Web3ConfigProvider
          account={testAccount}
          connect={async () => {
            connectFn();
            setTestAccount({
              address: '0x1234567890123456789012345678901234567890',
            });
          }}
          disconnect={async () => {
            disconnectFn();
            setTestAccount(undefined);
          }}
        >
          <Demo />
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Connect');
    fireEvent.click(baseElement.querySelector('.ant-btn') as Element);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Disconnect');
    expect(connectFn).toBeCalledTimes(1);

    fireEvent.click(baseElement.querySelector('.ant-btn') as Element);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Connect');
    expect(disconnectFn).toBeCalledTimes(1);
  });
});
