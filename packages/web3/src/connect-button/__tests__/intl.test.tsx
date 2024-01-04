import React from 'react';
import { ConnectButton, Web3ConfigProvider } from '@ant-design/web3';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('ConnectButton intl', () => {
  it('default', async () => {
    const App: React.FC = () => {
      return <ConnectButton />;
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Connect Wallet');
  });

  it('custom with component props', async () => {
    const App: React.FC = () => {
      return (
        <ConnectButton
          locale={{
            connect: '连接钱包',
          }}
        />
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('连接钱包');
  });

  it('custom with component provider', async () => {
    const App: React.FC = () => {
      return (
        <Web3ConfigProvider
          locale={{
            ConnectButton: {
              connect: 'testtext',
            },
          }}
        >
          <ConnectButton />
        </Web3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('testtext');
  });

  it('use component local first', async () => {
    const App: React.FC = () => {
      return (
        <Web3ConfigProvider
          locale={{
            ConnectButton: {
              connect: 'testtext',
            },
          }}
        >
          <ConnectButton
            locale={{
              connect: '连接钱包',
            }}
          />
        </Web3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('连接钱包');
  });
});
