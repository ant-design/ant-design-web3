import { ConnectModal } from '@ant-design/web3';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import QrCode from '../components/QrCode';
import { guide } from './mock';

describe('ConnectModal with qrcode', () => {
  it('show connect wallect link', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={[
          {
            icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
            name: 'Wallect Connect',
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
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')!);
    waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-connect-modal-qr-code-link-loading'),
      ).not.toBeNull();
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-link')?.textContent).toBe(
        'Click to connect directly',
      );
      expect(
        baseElement.querySelector('.ant-web3-connect-modal-qr-code-link')?.getAttribute('href'),
      ).toBe(
        'wc:f7a2ae968db3720de3efa7f088a3a05a746c011bb972a4dae0a61abe66632e3d@2?relay-protocol=irn&symKey=85bf278d8a4240154c449939eb047863585619c9c7acaa78657606d66c5630b3',
      );
    });
    expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-link-loading')).toBeNull();
  });

  it('QrCode app undefind error tips', async () => {
    const errorFn = vi.fn();
    vi.spyOn(console, 'error').mockImplementation((msg) => {
      errorFn(msg);
    });
    const App = () => (
      <QrCode
        download
        wallet={{
          icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
          name: 'Wallect Connect',
          remark: '备注',
          group: 'Popular',
          getQrCode: () =>
            Promise.resolve({
              uri: 'wc:f7a2ae968db3720de3efa7f088a3a05a746c011bb972a4dae0a61abe66632e3d@2?relay-protocol=irn&symKey=85bf278d8a4240154c449939eb047863585619c9c7acaa78657606d66c5630b3',
            }),
        }}
      />
    );
    render(<App />);
    expect(errorFn).toBeCalledWith(
      'wallet Wallect Connect app is undefined, please check your config.',
    );
  });

  it('customQrCodePanel', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={[
          {
            icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
            name: 'Wallect Connect',
            remark: '备注',
            app: {
              link: 'https://test.com/xxx',
            },
            group: 'Popular',
            getQrCode: () =>
              Promise.resolve({
                uri: 'wc:f7a2ae968db3720de3efa7f088a3a05a746c011bb972a4dae0a61abe66632e3d@2?relay-protocol=irn&symKey=85bf278d8a4240154c449939eb047863585619c9c7acaa78657606d66c5630b3',
              }),
            customQrCodePanel: true,
          },
        ]}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item')!);
    expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-link-loading')).toBeNull();
  });
});
