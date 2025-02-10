import { ConnectModal } from '@ant-design/web3';
import { render } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { describe, expect, it } from 'vitest';

import { Web3ConfigProvider } from '../index';
import { groupOrder, walletList } from './mock';

describe('ConnectModal theme with Web3ConfigProvider', () => {
  it('should use antd web3 design token', async () => {
    const App = () => (
      <Web3ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
          },
          web3Components: {
            ConnectModal: {
              walletGroupTextColor: 'red',
            },
          },
          components: {
            Button: {
              borderRadius: 20,
              borderRadiusLG: 24,
            },
            Modal: {
              borderRadiusLG: 36,
            },
          },
        }}
      >
        <ConnectModal
          open
          title="ConnectModal"
          group={{
            groupOrder,
          }}
          walletList={walletList}
          mode="normal"
        />
      </Web3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-modal-content')).toBeTruthy();
    const style = window.getComputedStyle(
      baseElement.querySelector('.ant-modal-content')!,
      'ConnectModal theme',
    );
    expect(style.borderRadius).toBe('36px');

    const buttonStyle = window.getComputedStyle(
      baseElement.querySelector('.ant-web3-connect-modal-more')!,
    );
    expect(buttonStyle.borderRadius).toBe('24px');
    expect(buttonStyle.backgroundColor).toBe('rgb(255, 255, 255)');

    const groupTextStyle = window.getComputedStyle(
      baseElement.querySelector('.ant-web3-connect-modal-group-title')!,
    );
    expect(groupTextStyle.color).toBe('rgb(255, 0, 0)');
  });

  it('should use antd web3 design token and antd design token', async () => {
    const App = () => (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
          },
          components: {
            Button: {
              borderRadius: 20,
              borderRadiusLG: 24,
            },
            Modal: {
              borderRadiusLG: 36,
            },
          },
        }}
      >
        <Web3ConfigProvider
          theme={{
            web3Components: {
              ConnectModal: {
                walletGroupTextColor: 'red',
              },
            },
          }}
        >
          <ConnectModal
            open
            title="ConnectModal"
            group={{
              groupOrder,
            }}
            walletList={walletList}
            mode="normal"
          />
        </Web3ConfigProvider>
      </ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-modal-content')).toBeTruthy();
    const style = window.getComputedStyle(
      baseElement.querySelector('.ant-modal-content')!,
      'ConnectModal theme',
    );
    expect(style.borderRadius).toBe('36px');

    const buttonStyle = window.getComputedStyle(
      baseElement.querySelector('.ant-web3-connect-modal-more')!,
    );
    expect(buttonStyle.borderRadius).toBe('24px');
    expect(buttonStyle.backgroundColor).toBe('rgb(255, 255, 255)');

    const groupTextStyle = window.getComputedStyle(
      baseElement.querySelector('.ant-web3-connect-modal-group-title')!,
    );
    expect(groupTextStyle.color).toBe('rgb(255, 0, 0)');
  });
});
