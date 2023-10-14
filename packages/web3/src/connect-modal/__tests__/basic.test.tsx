import { ConnectModal } from '@ant-design/web3';
import { groupOrder, guide, mockBrowser, walletList } from './mock';
import { fireEvent, render } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('ConnectModal with guide', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  mockBrowser('Chrome');
  it.each(['light', 'dark'] as const)(`should render in %s mode`, (theme) => {
    const App = () => (
      <ConnectModal
        open
        theme={theme}
        title="ConnectModal"
        footer="蚂蚁链提供技术支持"
        groupOrder={groupOrder}
        walletList={walletList}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);

    expect(baseElement).toMatchSnapshot();
    // should have ant-connect-modal class
    expect(baseElement.querySelector('.ant-modal')?.className).toContain('ant-connect-modal');
    expect(baseElement.querySelector('.ant-modal')?.className).toContain(
      `ant-connect-modal-${theme}`,
    );

    // should have simple class when without guide
    expect(baseElement.querySelector('.ant-connect-modal-body')?.className).not.toContain('simple');

    // should have title and footer
    expect(baseElement.querySelector('.ant-connect-modal-title')?.textContent).toBe('ConnectModal');
    expect(baseElement.querySelector('.ant-connect-modal-footer')?.textContent).toBe(
      '蚂蚁链提供技术支持',
    );

    // group order
    expect(baseElement.querySelectorAll('.ant-connect-modal-group-title')[0].textContent).toBe(
      'Popular',
    );
    expect(baseElement.querySelectorAll('.ant-connect-modal-group-title')[1].textContent).toBe(
      'Default',
    );

    // wallet list items
    expect(baseElement.querySelectorAll('.ant-connect-modal-wallet-item').length).toBe(
      walletList.length,
    );

    // should have guide panel
    expect(baseElement.querySelector('.ant-connect-modal-guide-panel')).not.toBeNull();
    expect(baseElement.querySelector('.ant-connect-modal-guide-title')?.textContent).toBe(
      guide.title,
    );
    expect(baseElement.querySelectorAll('.ant-connect-modal-guide-item').length).toBe(
      guide.infos.length,
    );
    expect(baseElement.querySelector('.ant-connect-modal-more')?.getAttribute('href')).toBe(
      guide.moreLink,
    );
  });

  it('panel route change', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="蚂蚁链提供技术支持"
        groupOrder={groupOrder}
        walletList={walletList}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-connect-modal-get-btn')!);
    expect(baseElement.querySelector('.ant-connect-modal-get-wallet-panel')).toBeTruthy();
    expect(baseElement.querySelectorAll('.ant-connect-modal-item').length).toBe(walletList.length);

    fireEvent.click(baseElement.querySelectorAll('.ant-connect-modal-get-wallet-btn')[0]);
    expect(baseElement.querySelector('.ant-connect-modal-card-list')).toBeTruthy();
    expect(baseElement.querySelectorAll('.ant-connect-modal-card-item').length).toBe(2);

    fireEvent.click(baseElement.querySelectorAll('.ant-connect-modal-card-item')[1]!);
    expect(baseElement.querySelector('.ant-connect-modal-qr-code-container')).toBeTruthy();
  });

  it('should ctrl by open', async () => {
    const App = ({ defaultOpen = false }: { defaultOpen?: boolean }) => {
      const [open, setOpen] = useState(defaultOpen);
      useEffect(() => setOpen(defaultOpen), [defaultOpen]);
      return (
        <ConnectModal
          open={open}
          title="ConnectModal"
          footer="蚂蚁链提供技术支持"
          groupOrder={groupOrder}
          walletList={walletList}
          guide={guide}
          modalProps={{
            destroyOnClose: true,
          }}
          onOpenChange={setOpen}
        />
      );
    };
    const { baseElement, rerender } = render(<App />);
    expect(baseElement.querySelector('.ant-connect-modal')).toBeFalsy();

    rerender(<App defaultOpen />);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-connect-modal')).toBeTruthy();
    });

    fireEvent.click(baseElement.querySelector('.ant-modal-close')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-connect-modal')?.className).toContain(
        'ant-zoom-leave',
      );
    });
  });
});
