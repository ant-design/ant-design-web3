import { LinkOutlined } from '@ant-design/icons';
import { Mainnet } from '@ant-design/web3-assets';
import { ChainIds, Web3ConfigProvider } from '@ant-design/web3-common';
import { BitcoinCircleColorful } from '@ant-design/web3-icons';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { BrowserLink } from '..';

describe('BrowserLink', () => {
  it('mount correctly', () => {
    expect(() =>
      render(<BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />),
    ).not.toThrow();
  });

  it('when there is no address output console.error', () => {
    const originalConsoleError = console.error;
    const mockConsoleError = (message: any) => {
      mockConsoleError.calls.push(message);
    };
    mockConsoleError.calls = [] as any[];
    console.error = mockConsoleError;
    expect(() => render(<BrowserLink address="" />)).not.toThrow();
    expect(mockConsoleError.calls.length).toBe(1);
    expect(mockConsoleError.calls[0]).toContain(
      '"address" property of the "BrowserLink" is required',
    );
    console.error = originalConsoleError;
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
    // Test with unsupported chain (no browser.getBrowserLink)
    const originalConsoleError = console.error;
    const mockConsoleError = vi.fn();
    console.error = mockConsoleError;

    expect(() => {
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
    }).toThrow('getBrowserLink unsupported chain 42161');

    console.error = originalConsoleError;

    // Test with supported chain (override with Mainnet which has browser.getBrowserLink)
    expect(() => {
      render(
        <Web3ConfigProvider
          chain={{
            id: ChainIds.Arbitrum,
            name: 'Arbitrum',
          }}
        >
          <BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" chain={Mainnet} />,
        </Web3ConfigProvider>,
      );
    }).not.toThrow();
  });
  it('support get chain icon from provider', async () => {
    const { baseElement, rerender } = render(
      <Web3ConfigProvider availableChains={[Mainnet]} chain={Mainnet}>
        <BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
      </Web3ConfigProvider>,
    );
    expect(baseElement.querySelector('.ant-web3-icon-etherscan-circle-colorful')).not.toBeNull();

    rerender(
      <Web3ConfigProvider availableChains={[Mainnet]} chain={Mainnet}>
        <BrowserLink
          icon={<BitcoinCircleColorful />}
          address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        />
        ,
      </Web3ConfigProvider>,
    );
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-colorful')).toBeNull();
    expect(baseElement.querySelector('.ant-web3-icon-bitcoin-circle-colorful')).not.toBeNull();
  });
  it('support iconStyle', async () => {
    const { baseElement } = render(
      <Web3ConfigProvider chain={Mainnet}>
        <BrowserLink
          icon={<BitcoinCircleColorful />}
          address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
          iconStyle={{ fontSize: 40 }}
        />
        ,
      </Web3ConfigProvider>,
    );
    const icon = baseElement.querySelector(
      '.ant-web3-icon-bitcoin-circle-colorful',
    ) as HTMLSpanElement;
    expect(icon).not.toBeNull();
    expect(icon?.style.fontSize).toBe('40px');
  });

  it('custom getBrowserLink', async () => {
    const { baseElement } = render(
      <Web3ConfigProvider chain={Mainnet}>
        <BrowserLink
          icon={<BitcoinCircleColorful />}
          address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
          iconStyle={{ fontSize: 40 }}
          type="transaction"
          chain={{
            id: ChainIds.BSC,
            name: 'custom',
            icon: <BitcoinCircleColorful />,
            browser: {
              getBrowserLink: (address: string, type: string) => {
                return `https://custom.com/${address}/${type}`;
              },
            },
          }}
        />
        ,
      </Web3ConfigProvider>,
    );
    const icon = baseElement.querySelector(
      '.ant-web3-icon-bitcoin-circle-colorful',
    ) as HTMLSpanElement;
    expect(icon).not.toBeNull();
    expect(icon?.style.fontSize).toBe('40px');
    expect(baseElement.querySelector('a')?.getAttribute('href')).toBe(
      'https://custom.com/0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B/transaction',
    );
  });
});
