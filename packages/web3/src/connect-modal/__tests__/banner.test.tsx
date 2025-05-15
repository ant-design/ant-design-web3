import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { describe, expect, it } from 'vitest';

import { ConnectModal } from '../index';
import { walletList } from './mock';

describe('ConnectModal banner functionality', () => {
  it('should render with custom banner', async () => {
    const testBannerText = 'This is a custom banner for testing';

    render(
      <ConfigProvider>
        <ConnectModal
          open
          walletList={walletList}
          banner={<div className="test-banner">{testBannerText}</div>}
        />
      </ConfigProvider>,
    );

    // Find the banner container
    const bannerContainer = document.querySelector('.ant-web3-connect-modal-banner');

    // Assert banner container exists
    expect(bannerContainer).not.toBeNull();

    // Assert our custom banner element exists
    const customBanner = document.querySelector('.test-banner');
    expect(customBanner).not.toBeNull();

    // Assert banner text is correct
    expect(customBanner?.textContent).toBe(testBannerText);
  });

  it('should not render banner when banner prop is not provided', async () => {
    render(
      <ConfigProvider>
        <ConnectModal open walletList={walletList} />
      </ConfigProvider>,
    );

    // Banner container should not exist
    const bannerContainer = document.querySelector('.ant-web3-connect-modal-banner');
    expect(bannerContainer).toBeNull();
  });

  it('should render complex banner element with interactive components', async () => {
    render(
      <ConfigProvider>
        <ConnectModal
          open
          walletList={walletList}
          banner={
            <div className="complex-banner">
              <button className="banner-button">Click me</button>
              <span className="banner-text">Banner with button</span>
            </div>
          }
        />
      </ConfigProvider>,
    );

    // Find the banner container
    const bannerContainer = document.querySelector('.ant-web3-connect-modal-banner');
    expect(bannerContainer).not.toBeNull();

    // Check complex elements exist
    const button = document.querySelector('.banner-button');
    expect(button).not.toBeNull();
    expect(button?.textContent).toBe('Click me');

    const text = document.querySelector('.banner-text');
    expect(text).not.toBeNull();
    expect(text?.textContent).toBe('Banner with button');
  });
});
