import React from 'react';
import { Web3ConfigProvider } from '@ant-design/web3';
import { render } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it } from 'vitest';

import useIntl from '../useIntl';

describe('useIntl', () => {
  it('use with values', () => {
    const Demo: React.FC = () => {
      const intl = useIntl('ConnectButton');
      return (
        <Button>
          {intl.getMessage(intl.messages.connect, {
            walletName: 'MetaMask',
          })}
        </Button>
      );
    };

    const App: React.FC = () => {
      return (
        <Web3ConfigProvider
          locale={{
            ConnectButton: {
              connect: 'Connect {walletName}',
            },
          }}
        >
          <Demo />
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Connect MetaMask');
  });
});
