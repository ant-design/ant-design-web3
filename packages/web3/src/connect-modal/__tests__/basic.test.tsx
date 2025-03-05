import React, { useEffect, useState } from 'react';
import type { DefaultGuide } from '@ant-design/web3';
import { ConnectModal } from '@ant-design/web3';
import { BitcoinCircleColorful } from '@ant-design/web3-icons';
import { fireEvent, render } from '@testing-library/react';
import { theme as antTheme, ConfigProvider, Grid } from 'antd';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { mockBrowser } from '../../utils/test-utils';
import DefaultGuidePanel from '../components/DefaultGuidePanel';
import { groupOrder, guide, walletList } from './mock';

describe('ConnectModal with guide', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  mockBrowser('Chrome');
  it.each(['light', 'dark'] as const)('should render in %s mode', (theme) => {
    vi.spyOn(Grid, 'useBreakpoint').mockReturnValue({
      md: true, // ≥ 768px, mock PC
    });
    const errorFn = vi.fn();
    vi.spyOn(console, 'error').mockImplementation((msg) => {
      errorFn(msg);
    });
    const App = () => (
      <ConfigProvider
        theme={{
          algorithm: theme === 'light' ? antTheme.defaultAlgorithm : antTheme.darkAlgorithm,
        }}
      >
        <ConnectModal
          open
          title="ConnectModal"
          footer="Powered by AntChain"
          groupOrder={groupOrder}
          walletList={walletList}
          guide={guide}
        />
      </ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(errorFn).toBeCalledWith(
      'Warning: [ant-design-web3: ConnectModal] `groupOrder` is deprecated. Please use `group={{groupOrder: ()=> {}}}` instead.',
    );

    expect(baseElement).toMatchSnapshot();
    // should have ant-web3-connect-modal class
    expect(baseElement.querySelector('.ant-modal')?.className).toContain('ant-web3-connect-modal');

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

  it('panel route change', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={walletList}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item') as Element);
    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-connect-modal-card-list')?.innerHTML,
      ).toBeTruthy();
      expect(baseElement.querySelectorAll('.ant-web3-connect-modal-card-item').length).toBe(2);
    });

    fireEvent.click(baseElement.querySelectorAll('.ant-web3-connect-modal-card-item')[1]!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-container')).toBeTruthy();
    });
    fireEvent.click(baseElement.querySelectorAll('.ant-web3-connect-modal-wallet-item')[2]!);
    await vi.waitFor(() => {
      expect(baseElement).toMatchSnapshot();
    });

    fireEvent.click(baseElement.querySelectorAll('.ant-web3-connect-modal-wallet-item')[6]!);
    await vi.waitFor(() => {
      expect(baseElement).toMatchSnapshot();
    });
  });

  it('should ctrl by open', async () => {
    const App = ({ defaultOpen = false }: { defaultOpen?: boolean }) => {
      const [open, setOpen] = useState(defaultOpen);
      useEffect(() => setOpen(defaultOpen), [defaultOpen]);
      return (
        <ConnectModal
          open={open}
          title="ConnectModal"
          footer="Powered by AntChain"
          group={{
            groupOrder,
          }}
          walletList={walletList}
          guide={guide}
          destroyOnClose={true}
          onCancel={() => setOpen(false)}
        />
      );
    };
    const { baseElement, rerender } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-modal')).toBeFalsy();

    rerender(<App defaultOpen />);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal')).toBeTruthy();
    });

    fireEvent.click(baseElement.querySelector('.ant-modal-close')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal')?.className).toContain(
        'ant-zoom-leave',
      );
    });
  });

  it('should display default guide', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        group={{
          groupOrder,
        }}
        walletList={walletList}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });

  it('ModalPanel', async () => {
    expect(ConnectModal.ModalPanel).not.toBeUndefined();
  });

  it('when DefaultGuidePanel guide is null', async () => {
    const App = () => <DefaultGuidePanel guide={null as unknown as DefaultGuide} />;
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-modal-guide-panel')).toBeNull();
  });

  it('when DefaultGuidePanel guide is a valid React element', async () => {
    const ValidReactElement: React.FC = () => <div className="custom">valid</div>;
    const App = () => (
      <DefaultGuidePanel
        guide={React.createElement(ValidReactElement) as unknown as DefaultGuide}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.custom')).toBeTruthy();
    expect(baseElement.querySelector('.custom')?.textContent).toBe('valid');
  });

  it('when DefaultGuidePanel guide element icon is not string', async () => {
    const Guide = {
      title: 'title',
      infos: [
        {
          icon: <BitcoinCircleColorful />,
          title: 'title',
          description: 'desc',
        },
      ],
    };
    const App = () => <DefaultGuidePanel guide={Guide as unknown as DefaultGuide} />;
    const { baseElement } = render(<App />);
    // Show `ant-web3-connect-modal-guide-item-icon` classname only if icon is string
    expect(baseElement.querySelector('.ant-web3-connect-modal-guide-item-icon')).toBeNull();
    expect(baseElement.querySelector('.ant-web3-icon-bitcoin-circle-colorful')).toBeTruthy();
  });

  it('Wallets are not grouped', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={walletList}
        guide={guide}
        group={false}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-modal-group-title')).toBeNull();
  });

  it('Wallets are not grouped when on one group', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={[
          {
            ...walletList[0],
            group: 'Test',
          },
          {
            ...walletList[1],
            group: 'Test',
          },
        ]}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-modal-group-title')).toBeNull();
  });

  it('wallets empty', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={[]}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-empty-description')?.textContent).toBe(
      'No wallet available',
    );
  });

  it('wallets empty with emptyProps', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        walletList={[]}
        guide={guide}
        emptyProps={{
          description: 'NOTFINDWALLET',
        }}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-empty-description')?.textContent).toBe('NOTFINDWALLET');
  });
});
