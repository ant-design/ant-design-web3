import { ConnectModal } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { theme as antTheme, ConfigProvider, Grid } from 'antd';
import { describe, expect, it, vi } from 'vitest';

import { groupOrder, walletList } from './mock';

describe('ConnectModal without guide', () => {
  it.each(['light', 'dark'] as const)(`should render in %s mode`, async (theme) => {
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
          group={{
            groupOrder,
          }}
          walletList={walletList}
        />
      </ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
    // should have ant-web3-connect-modal class
    expect(baseElement.querySelector('.ant-modal')?.className).toContain('ant-web3-connect-modal');
    // should have simple class when without guide
    expect(baseElement.querySelector('.ant-web3-connect-modal-body')?.className).toContain(
      'simple',
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
  });
  it('render with mode simple', async () => {
    const App = () => (
      <ConnectModal open groupOrder={groupOrder} walletList={walletList} mode="simple" />
    );
    const { baseElement } = render(<App />);
    const btn = baseElement.querySelector('.ant-web3-connect-modal-simple-guide-right');
    fireEvent.click(btn!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-simple-guide-panel')).not.toBe(
        null,
      );
    });
  });
});
