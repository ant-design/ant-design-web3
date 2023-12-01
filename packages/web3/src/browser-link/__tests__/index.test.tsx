import { BrowserLink } from '..';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('BrowserLink', () => {
  it('mount correctly', () => {
    expect(() =>
      render(<BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />),
    ).not.toThrow();
  });

  it('renders address link correctly', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const { baseElement } = render(<BrowserLink address={address} type="address" />);

    const link = baseElement.querySelector('a');
    expect(link).not.toBeNull();
    expect(link?.getAttribute('href')).toBe(`https://etherscan.io/address/${address}`);
  });

  it('renders transaction link correctly', () => {
    const transactionHash = '0xabc123def456';
    const { baseElement } = render(<BrowserLink address={transactionHash} type="transaction" />);

    const link = baseElement.querySelector('a');
    expect(link).not.toBeNull();
    expect(link?.getAttribute('href')).toBe(`https://etherscan.io/tx/${transactionHash}`);
  });

  it('renders custom href correctly', () => {
    const customHref = 'https://custom-link.com';
    const { baseElement } = render(
      <BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" href={customHref} />,
    );

    const link = baseElement.querySelector('a');
    expect(link).not.toBeNull();
    expect(link?.getAttribute('href')).toBe(customHref);
  });
});
