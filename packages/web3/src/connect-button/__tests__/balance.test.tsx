import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ConnectButton } from '..';

describe('ConnectButton', () => {
  it('do not show balance when not connect', () => {
    const { baseElement } = render(
      <ConnectButton
        balance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1230000000000000000n,
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Connect Wallet');
  });

  it('show balance', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        balance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1230000000000000000n,
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe(' 1.23 ETH');
  });

  it('show balance when has name', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          name: 'wanderingearth.eth',
        }}
        balance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1230000000000000000n,
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe(' 1.23 ETH');
  });

  it('show address when balance-coveraddress is false', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        balance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1230000000000000000n,
          coverAddress: false,
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('0x21CD...Fd3B 1.23 ETH');
  });

  it('show name when balance-coveraddress is false', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          name: 'wanderingearth.eth',
        }}
        balance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1230000000000000000n,
          coverAddress: false,
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('wanderingearth.eth 1.23 ETH');
  });
});
