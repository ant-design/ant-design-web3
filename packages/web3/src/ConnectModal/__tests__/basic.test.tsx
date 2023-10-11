import { ConnectModal } from '@ant-design/web3';
import { groupOrder, guide, walletList } from './mock';
import { render } from '@testing-library/react';

describe('ConnectModal with guide', () => {
  function testWithTheme(theme: 'light' | 'dark') {
    it(`should render in ${theme} mode`, () => {
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
      expect(baseElement.querySelector('.ant-connect-modal-body')?.className).not.toContain(
        'simple',
      );

      // should have title and footer
      expect(baseElement.querySelector('.ant-connect-modal-title')?.textContent).toBe(
        'ConnectModal',
      );
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
  }

  (['light', 'dark'] as const).forEach(testWithTheme);
});
