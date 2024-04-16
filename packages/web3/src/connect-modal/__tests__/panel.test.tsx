import { ConnectModal } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { Grid } from 'antd';
import { describe, expect, it, vi } from 'vitest';

import { groupOrder, guide, walletList } from './mock';

describe('ConnectModal with ConnectModal', () => {
  it('ModalPanel', async () => {
    expect(ConnectModal.ModalPanel).not.toBeUndefined();

    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true, // ≥ 768px, mock PC
    });

    const App = () => (
      <ConnectModal.ModalPanel
        title="ConnectModal"
        footer="Powered by AntChain"
        group={{
          groupOrder,
        }}
        walletList={walletList}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);

    // should have simple class when without guide
    expect(baseElement.querySelector('.ant-web3-connect-modal-body')?.className).not.toContain(
      'ant-web3-connect-modal-body-simple',
    );

    // should have title and footer
    expect(baseElement.querySelector('.ant-web3-connect-modal-title')?.textContent).toBe(
      'ConnectModal',
    );
    expect(baseElement.querySelector('.ant-web3-connect-modal-footer')?.textContent).toBe(
      'Powered by AntChain',
    );

    // group order
    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-group-title')[0].textContent).toBe(
      'Popular',
    );
    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-group-title')[1].textContent).toBe(
      'More',
    );

    // wallet list items
    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-wallet-item').length).toBe(
      walletList.length,
    );

    // should have guide panel
    expect(baseElement.querySelector('.ant-web3-connect-modal-guide-panel')).not.toBeNull();
    expect(baseElement.querySelector('.ant-web3-connect-modal-guide-title')?.textContent).toBe(
      guide.title,
    );
    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-guide-item').length).toBe(
      guide.infos.length,
    );
    expect(baseElement.querySelector('.ant-web3-connect-modal-more')?.getAttribute('href')).toBe(
      guide.moreLink,
    );
  });

  it('Get wallet from init route in panel mode', async () => {
    const App = () => (
      <ConnectModal.ModalPanel
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={[
          {
            icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
            name: 'Test Wallet',
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

    expect(baseElement.querySelector('.ant-web3-connect-modal-name')?.textContent).toBe(
      'Test Wallet',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item') as Element);
    vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-card-title')?.textContent).toBe(
        'Test Wallet for Mobile',
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
      expect(
        baseElement.querySelector('.ant-web3-connect-modal-main-panel-header-back'),
      ).toBeNull();
    });
  });
});
