import React from 'react';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { fireEvent, render, screen } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { describe, expect, it, vi } from 'vitest';

import { ConnectModal } from '../index';
import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  {
    ...metadata_MetaMask,
    hasWalletReady: async () => true,
    hasExtensionInstalled: async () => true,
  },
  {
    ...metadata_WalletConnect,
    getQrCode: () => {
      return Promise.resolve({
        uri: 'https://example.com',
      });
    },
  },
];

describe('ConnectModal disabled functionality', () => {
  it('should render disabled wallets correctly', async () => {
    const onWalletSelected = vi.fn();

    render(
      <ConfigProvider>
        <ConnectModal open walletList={walletList} onWalletSelected={onWalletSelected} disabled />
      </ConfigProvider>,
    );

    // Find all wallet items
    const walletItems = document.querySelectorAll('.ant-web3-connect-modal-wallet-item');

    expect(walletItems.length).toBe(2);

    // Verify that the wallet items have the disabled class
    walletItems.forEach((item) => {
      expect(item.classList.contains('disabled')).toBe(true);
    });

    // Attempt to click on the first wallet
    fireEvent.click(walletItems[0]);

    // The onWalletSelected callback should still not have been called
    await vi.waitFor(() => {
      expect(onWalletSelected).not.toHaveBeenCalled();
    });
  });

  it('should allow wallet selection when not disabled', async () => {
    const onWalletSelected = vi.fn();

    render(
      <ConfigProvider>
        <ConnectModal
          open
          walletList={walletList}
          onWalletSelected={onWalletSelected}
          disabled={false}
        />
      </ConfigProvider>,
    );

    // Find all wallet items
    const walletItems = document.querySelectorAll('.ant-web3-connect-modal-wallet-item');

    expect(walletItems.length).toBe(2);

    // Verify that the wallet items do not have the disabled class
    walletItems.forEach((item) => {
      expect(item.classList.contains('disabled')).toBe(false);
    });

    // Click on the first wallet
    fireEvent.click(walletItems[0]);

    await vi.waitFor(() => {
      // Verify that the onWalletSelected callback was called
      expect(onWalletSelected).toHaveBeenCalled();
    });
  });
});
