import { Polygon } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ConnectButton } from '..';
import useIntl from '../../hooks/useIntl';
import { readCopyText } from '../../utils/test-utils';
import { ProfileModal } from '../profile-modal';

describe('ProfileModal', () => {
  it('match snapshot', () => {
    const App = () => {
      const intl = useIntl('ConnectButton');
      return (
        <ProfileModal
          intl={intl}
          open
          __hashId__="hashId"
          address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
          name="wanderingearth.eth"
          avatar={{
            src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
          }}
        />
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });

  it('match snapshot without name', () => {
    const App = () => {
      const intl = useIntl('ConnectButton');
      return (
        <ProfileModal
          intl={intl}
          open
          __hashId__="hashId"
          address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
          avatar={{
            src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
          }}
        />
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });

  it('open profile modal in ConnectButton', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button')).not.toBeNull();

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-connect-button-profile-modal .ant-web3-address')
          ?.textContent,
      ).toBe('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');
      expect(baseElement.querySelector('.anticon-user')).not.toBeNull();
    });
  });

  it('show balance', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        balance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1230000000000000000n,
        }}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button')).not.toBeNull();

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-connect-button-profile-modal .ant-web3-address')
          ?.textContent,
      ).toBe('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');

      expect(
        baseElement.querySelector(
          '.ant-web3-connect-button-profile-modal .ant-web3-crypto-price-balance',
        )?.textContent,
      ).toBe('1.23 ETH');
    });
  });

  it('show default avatar', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button')).not.toBeNull();

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await vi.waitFor(() => {
      expect(
        baseElement.querySelector(
          '.ant-web3-connect-button-chain-icon.ant-web3-connect-button-default-icon',
        ),
      ).not.toBeNull();
    });
  });

  it('show chain icon as the default avatar', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        chain={Polygon}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button')).not.toBeNull();

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await vi.waitFor(() => {
      expect(
        baseElement.querySelector(
          '.ant-web3-connect-button-chain-icon .ant-web3-icon-polygon-circle-colorful',
        ),
      ).not.toBeNull();
    });
  });

  it('Disconnect & Copy Address Button', async () => {
    const disconnectTestFn = vi.fn();
    const App = () => {
      const intl = useIntl('ConnectButton');
      return (
        <ProfileModal
          open
          intl={intl}
          __hashId__="hashId"
          address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
          onDisconnect={disconnectTestFn}
        />
      );
    };
    const { baseElement } = render(<App />);
    const btns = baseElement.querySelectorAll('.ant-web3-connect-button-profile-modal .ant-btn');
    expect(btns.length).toBe(2);
    fireEvent.click(btns[1]);
    expect(disconnectTestFn).toBeCalled();
    fireEvent.click(btns[0]);

    await vi.waitFor(async () => {
      await expect(readCopyText()).resolves.toBe('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');
    });
  });

  it('should not display modal when pass false into profileModal', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        profileModal={false}
      />
    );
    const { baseElement } = render(<App />);
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-button-profile-modal')).toBeNull();
    });
  });

  it('profile modal should customize by profileModal', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        profileModal={{
          title: 'Custom Title',
          footer: 'Custom Description',
          width: 500,
        }}
      />
    );
    const { baseElement } = render(<App />);
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-button-profile-modal')).not.toBeNull();
      expect(
        baseElement.querySelector('.ant-web3-connect-button-profile-modal .ant-modal-title')
          ?.textContent,
      ).toBe('Custom Title');
      expect(
        baseElement.querySelector('.ant-web3-connect-button-profile-modal .ant-modal-footer')
          ?.textContent,
      ).toBe('Custom Description');
      expect(
        baseElement
          .querySelector('.ant-web3-connect-button-profile-modal.ant-modal')
          ?.getAttribute('style'),
      ).toContain('width: 500px;');
    });
  });

  it('profile modal should can customize reset styles by `profileModal.styles`', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        profileModal={{
          title: 'Custom Title',
          footer: 'Custom Description',
          width: 500,
          styles: {
            header: {
              fontSize: 32,
            },
            body: {
              textAlign: 'right',
              fontSize: 32,
            },
            footer: {
              fontSize: 32,
            },
          },
        }}
      />
    );

    const { baseElement } = render(<App />);
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await vi.waitFor(() => {
      const headerStyleAttr = baseElement
        .querySelector('.ant-web3-connect-button-profile-modal .ant-modal-header')
        ?.getAttribute('style');
      const bodyStyleAttr = baseElement
        .querySelector('.ant-web3-connect-button-profile-modal .ant-modal-body')
        ?.getAttribute('style');
      const footerStyleAttr = baseElement
        .querySelector('.ant-web3-connect-button-profile-modal .ant-modal-footer')
        ?.getAttribute('style');

      expect(headerStyleAttr).toContain('font-size: 32px;');

      expect(bodyStyleAttr).toContain('text-align: right;');
      expect(bodyStyleAttr).toContain('font-size: 32px;');

      expect(footerStyleAttr).toContain('font-size: 32px;');
    });
  });
});
