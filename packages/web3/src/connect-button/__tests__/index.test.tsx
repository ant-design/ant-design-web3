import { ConnectButton } from '..';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('ConnectButton', () => {
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
});
