import { ConnectButton } from '..';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('ConnectButton', () => {
  it('do not show balance when not connect', () => {
    const { baseElement } = render(
      <ConnectButton
        banlance={{
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
        banlance={{
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
        banlance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1230000000000000000n,
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe(' 1.23 ETH');
  });
});
