import { ConnectModal } from '@ant-design/web3';
import { groupOrder, walletList } from './mock';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ConfigProvider } from 'antd';

describe('ConnectModal theme', () => {
  it('should use antd design token', async () => {
    const App = () => (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
          },
          components: {
            Button: {
              borderRadius: 16,
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
          groupOrder={groupOrder}
          walletList={walletList}
          mode="normal"
        />
      </ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-modal-content')).toBeTruthy();
    const style = window.getComputedStyle(baseElement.querySelector('.ant-modal-content')!);
    expect(style.borderRadius).toBe('36px');

    const buttonStyle = window.getComputedStyle(
      baseElement.querySelector('.ant-web3-connect-modal-get-btn')!,
    );
    expect(buttonStyle.borderRadius).toBe('24px');
    expect(buttonStyle.backgroundColor).toBe('rgb(132, 66, 255)');
  });
});
