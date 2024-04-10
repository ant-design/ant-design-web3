import { WalletColorful } from '@ant-design/web3-icons';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ConnectButton } from '..';

describe('ConnectButton', () => {
  it(`when actionsMenu's extraItems is undefined, mount correctly`, async () => {
    expect(() =>
      render(
        <ConnectButton
          actionsMenu={{
            extraItems: undefined,
          }}
        />,
      ),
    ).not.toThrow();
  });
  it('mount correctly', () => {
    expect(() => render(<ConnectButton />)).not.toThrow();
  });

  it('display name', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          name: 'wanderingearth.eth',
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('wanderingearth.eth');
  });

  it('display addresss when not has name', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('0x21CD...Fd3B');
  });

  it('display name when not has address', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '',
          name: 'wanderingearth.eth',
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('wanderingearth.eth');
  });
  it('renders without crashing with avatar and icon', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '',
          name: 'wanderingearth.eth',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        icon={<WalletColorful />}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('wanderingearth.eth');
  });

  it('renders without crashing with avatar but no icon', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '',
          name: 'wanderingearth.eth',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('wanderingearth.eth');
  });

  it('check if icon exists', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
        size="middle"
        actionsMenu={false}
        icon={<WalletColorful />}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Display custom avatar');
    expect(baseElement.querySelector('.anticon-wallet-colorful')).toBeDefined(); // Check if the icon exists
  });
});
