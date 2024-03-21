import { ConnectModal } from '@ant-design/web3';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { guide } from './mock';

describe('Get wallet', () => {
  it('Get wallet from wallet route', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={[
          {
            icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
            name: 'Test Wallect',
            remark: '备注',
            app: {
              link: 'https://test.com/xxx',
            },
            group: 'Popular',
            hasWalletReady: async () => {
              return true;
            },
            getQrCode: () =>
              Promise.resolve({
                uri: 'wc:f7a2ae968db3720de3efa7f088a3a05a746c011bb972a4dae0a61abe66632e3d@2?relay-protocol=irn&symKey=85bf278d8a4240154c449939eb047863585619c9c7acaa78657606d66c5630b3',
              }),
          },
          {
            // not has app and extensions
            icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
            name: 'Test Wallect',
            remark: '备注',
          },
        ]}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')!);
    await waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-btn')?.textContent).toBe(
        'Get',
      );
    });

    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-get-wallet-btn')?.length).toBe(1);

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-btn')!);
    expect(baseElement.querySelector('.ant-web3-connect-modal-card-title')?.textContent).toBe(
      'Test Wallect for Mobile',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-card-item')!);
    expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-link')?.textContent).toBe(
      'Click to go to the download page',
    );
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-qr-code-link')?.getAttribute('href'),
    ).toBe('https://test.com/xxx');
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-qr-code-tips-download')?.textContent,
    ).toBe('Scan the QR code to download the wallet.');
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-title')?.textContent,
    ).toBe('Download Test Wallect');

    // back to getWallet
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')!);
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-title')?.textContent,
    ).toBe('Get Test Wallect');

    // back to qrCode
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')!);
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-title')?.textContent,
    ).toBe('Scan with Test Wallect');

    // back to init
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')!);
    expect(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')).toBeNull();
  });

  it('Get wallet from init route', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={[
          {
            icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
            name: 'Test Wallect',
            remark: '备注',
            app: {
              link: 'https://test.com/xxx',
            },
            group: 'Popular',
            getQrCode: () =>
              Promise.resolve({
                uri: 'wc:f7a2ae968db3720de3efa7f088a3a05a746c011bb972a4dae0a61abe66632e3d@2?relay-protocol=irn&symKey=85bf278d8a4240154c449939eb047863585619c9c7acaa78657606d66c5630b3',
              }),
          },
        ]}
        mode="normal"
      />
    );
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.ant-web3-connect-modal-get-btn')?.textContent).toBe(
      'Get a Wallet',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-get-btn')!);

    expect(baseElement.querySelector('.ant-list-item-meta-title')?.textContent).toBe(
      'Test Wallect',
    );
    expect(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-btn')?.textContent).toBe(
      'Get',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-btn')!);

    expect(baseElement.querySelector('.ant-web3-connect-modal-card-title')?.textContent).toBe(
      'Test Wallect for Mobile',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-card-item')!);
    expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-link')?.textContent).toBe(
      'Click to go to the download page',
    );
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-qr-code-link')?.getAttribute('href'),
    ).toBe('https://test.com/xxx');
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-qr-code-tips-download')?.textContent,
    ).toBe('Scan the QR code to download the wallet.');
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-title')?.textContent,
    ).toBe('Download Test Wallect');

    // back to getWallet
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')!);
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-title')?.textContent,
    ).toBe('Get Test Wallect');

    // back to qrCode
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')!);
    expect(
      baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-title')?.textContent,
    ).toBe('Get a Wallet');

    // back to init
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')!);
    expect(baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back')).toBeNull();
  });

  it('Get wallet with universal protocol', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        mode="normal"
        walletList={[
          {
            icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
            name: 'Test Wallect',
            remark: '备注',
            universalProtocol: {
              link: 'https://test.com/xxx',
            },
            group: 'Popular',
            hasWalletReady: async () => {
              return true;
            },
            getQrCode: () =>
              Promise.resolve({
                uri: 'wc:f7a2ae968db3720de3efa7f088a3a05a746c011bb972a4dae0a61abe66632e3d@2?relay-protocol=irn&symKey=85bf278d8a4240154c449939eb047863585619c9c7acaa78657606d66c5630b3',
              }),
          },
          {
            // not has app and extensions
            icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
            name: 'Test Wallect',
            remark: '备注',
          },
        ]}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-modal-get-btn')?.textContent).toBe(
      'Get a Wallet',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-get-btn')!);
    await waitFor(() => {
      expect(baseElement.querySelector('.ant-list-item-meta-description')?.textContent).toBe(
        '备注',
      );
      expect(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-btn')?.textContent).toBe(
        'About',
      );
      expect(
        baseElement.querySelector('a.ant-web3-connect-modal-get-wallet-btn')?.getAttribute('href'),
      ).toBe('https://test.com/xxx');
    });

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')!);
    await waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-tip')?.textContent).toBe(
        "Don't know Test Wallect?",
      );
      expect(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-btn')?.textContent).toBe(
        'About',
      );
      expect(
        baseElement.querySelector('a.ant-web3-connect-modal-get-wallet-btn')?.getAttribute('href'),
      ).toBe('https://test.com/xxx');
    });

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')!);
  });
});
