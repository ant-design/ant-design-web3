import { BrowserLink } from '..';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LinkOutlined } from '@ant-design/icons';
import { ChainIds, Web3ConfigProvider } from '@ant-design/web3-common';

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
  it('Supports custom name', () => {
    const name = 'Custom name';
    const { baseElement } = render(
      <BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" name={name} />,
    );

    const link = baseElement.querySelector('a');
    expect(link).not.toBeNull();
    expect(link?.textContent).toBe(name);
  });
  it('renders custom href correctly', () => {
    const { baseElement } = render(
      <BrowserLink icon={<LinkOutlined />} address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
    );

    const link = baseElement.querySelector('a');
    expect(link).not.toBeNull();
    expect(baseElement.querySelector('.anticon-link')).not.toBeNull();
  });
  it('support get chain from provider', async () => {
    const fn = vi.fn();
    try {
      render(
        <Web3ConfigProvider
          chain={{
            id: ChainIds.Arbitrum,
            name: 'Arbitrum',
          }}
        >
          <BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
        </Web3ConfigProvider>,
      );
    } catch (error: any) {
      fn(error.message);
    }
    expect(fn).toHaveBeenCalledWith('Unsupported chain 42161');
    const fn2 = vi.fn();
    try {
      render(
        <Web3ConfigProvider
          chain={{
            id: ChainIds.Arbitrum,
            name: 'Arbitrum',
          }}
        >
          <BrowserLink
            address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
            chain={ChainIds.Mainnet}
          />
          ,
        </Web3ConfigProvider>,
      );
    } catch (error: any) {
      fn2(error.message);
    }
    expect(fn2).not.toHaveBeenCalled();
  });
  it('support get chain icon from provider', async () => {
    const { baseElement } = render(
      <Web3ConfigProvider
        chain={{
          id: ChainIds.Mainnet,
          name: 'Mainnet',
        }}
      >
        <BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
      </Web3ConfigProvider>,
    );
    expect(baseElement.querySelector('.anticon-ethereum')).not.toBeNull();
  });
});
