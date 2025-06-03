import { ConnectModal } from '@ant-design/web3';
import { render } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { describe, expect, it } from 'vitest';

import { groupOrder, walletList } from './mock';

describe('ConnectModal theme', () => {
  it('should use antd design token', async () => {
    const App = () => (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
            wireframe: true,
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

    const headerStyle = window.getComputedStyle(
      baseElement.querySelector('.ant-web3-connect-modal-header')!,
    );
    expect(headerStyle.borderBlockEnd).toBe('1px solid rgba(0, 0, 0, 0.06)');
    expect(headerStyle.paddingBlockEnd).toBe('24px');
  });
});
