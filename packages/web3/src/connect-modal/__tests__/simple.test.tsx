import { ConnectModal } from '@ant-design/web3';
import { groupOrder, walletList } from './mock';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';

describe('ConnectModal without guide', () => {
  it.each(['light', 'dark'] as const)(`should render in %s mode`, async (theme) => {
    const App = () => (
      <ConnectModal
        open
        theme={theme}
        title="ConnectModal"
        footer="蚂蚁链提供技术支持"
        groupOrder={groupOrder}
        walletList={walletList}
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
    expect(baseElement.querySelector('.ant-connect-modal-body')?.className).toContain('simple');

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
  });
});
