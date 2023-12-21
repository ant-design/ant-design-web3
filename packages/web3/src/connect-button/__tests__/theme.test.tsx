import { ConnectButton } from '@ant-design/web3';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ConfigProvider } from 'antd';

describe('ConnectButton style', () => {
  it('should use colorPrimary', async () => {
    const App = () => (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
          },
        }}
      >
        <ConnectButton type="primary" />
      </ConfigProvider>
    );
    const { baseElement } = render(<App />);
    const buttonStyle = window.getComputedStyle(baseElement.querySelector('.ant-btn')!);
    expect(buttonStyle.backgroundColor).toBe('rgb(100, 46, 217)');
    expect(buttonStyle.color).toBe('rgb(255, 255, 255)');
  });
});
