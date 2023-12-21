import { ConnectModal } from '@ant-design/web3';
import { groupOrder, guide, walletList } from './mock';
import { fireEvent, render } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { ConfigProvider } from 'antd';
import { mockBrowser } from '../../utils/test-utils';

describe('ConnectModal with guide', () => {
  it('should display default guide', async () => {
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
