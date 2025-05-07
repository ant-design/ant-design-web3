import React from 'react';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { fireEvent, render, screen } from '@testing-library/react';
import { ConfigProvider } from 'antd';

import { ConnectModal } from '../index';
import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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
  it('should render disabled wallets correctly', () => {
    const onWalletSelected = jest.fn();

    render(
      <ConfigProvider
        theme={{
          components: {
            ConnectModal: {
              walletIconSize: 32,
            },
          },
        }}
      >
        <ConnectModal open walletList={walletList} onWalletSelected={onWalletSelected} disabled />
      </ConfigProvider>,
    );

    // Find all wallet items
    const walletItems = screen.getAllByRole('listitem');

    // Verify that the wallet items have the disabled class
    walletItems.forEach((item) => {
      expect(item.classList.contains('disabled')).toBe(true);
    });

    // Attempt to click on the first wallet
    fireEvent.click(walletItems[0]);

    // Verify that the onWalletSelected callback was not called
    expect(onWalletSelected).not.toHaveBeenCalled();

    // Find QR code buttons
    const qrButton = screen.getByRole('button');

    // Verify that the QR code button is disabled
    expect(qrButton).toHaveAttribute('disabled');

    // Attempt to click on the QR code button
    fireEvent.click(qrButton);

    // The onWalletSelected callback should still not have been called
    expect(onWalletSelected).not.toHaveBeenCalled();
  });

  it('should allow wallet selection when not disabled', () => {
    const onWalletSelected = jest.fn();

    render(
      <ConfigProvider
        theme={{
          components: {
            ConnectModal: {
              walletIconSize: 32,
            },
          },
        }}
      >
        <ConnectModal
          open
          walletList={walletList}
          onWalletSelected={onWalletSelected}
          disabled={false}
        />
      </ConfigProvider>,
    );

    // Find all wallet items
    const walletItems = screen.getAllByRole('listitem');

    // Verify that the wallet items do not have the disabled class
    walletItems.forEach((item) => {
      expect(item.classList.contains('disabled')).toBe(false);
    });

    // Click on the first wallet
    fireEvent.click(walletItems[0]);

    // Verify that the onWalletSelected callback was called
    expect(onWalletSelected).toHaveBeenCalled();
  });
});
