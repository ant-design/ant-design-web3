import { ConnectModal } from '@ant-design/web3';
import { groupOrder, guide, walletList } from './mock';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('ConnectModal with ConnectModal', () => {
  it('ModalPanel', async () => {
    expect(ConnectModal.ModalPanel).not.toBeUndefined();

    const App = () => (
      <ConnectModal.ModalPanel
        title="ConnectModal"
        footer="Powered by AntChain"
        groupOrder={groupOrder}
        walletList={walletList}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);

    // should have simple class when without guide
    expect(baseElement.querySelector('.ant-web3-connect-modal-body')?.className).not.toContain(
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
});
