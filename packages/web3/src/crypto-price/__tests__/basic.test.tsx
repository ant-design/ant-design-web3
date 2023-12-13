import { CryptoPrice } from '..';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { EthereumCircleFilled } from '@ant-design/web3-icons';
import { LinkOutlined } from '@ant-design/icons';
import { ChainIds, Web3ConfigProvider } from '@ant-design/web3-common';
import { BitcoinColorful } from '@ant-design/web3-icons';
import { Mainnet } from '@ant-design/web3-assets';

describe('CryptoPrice', () => {
  it('renders CryptoPrice correctly', () => {
    const { baseElement } = render(<CryptoPrice value={1230000000000000000n} />);

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 1.23 ETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-filled')).not.toBeNull();
  });

  it('disable icon', () => {
    const { baseElement } = render(<CryptoPrice icon={false} value={1230000000000000000n} />);

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe('1.23 ETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-filled')).toBeNull();
  });

  it('custom icon', () => {
    const { baseElement } = render(
      <CryptoPrice icon={<EthereumCircleFilled />} value={1230000000000000000n} />,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 1.23 ETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });

  it('custom chain', () => {
    const { baseElement } = render(
      <CryptoPrice
        chain={{
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'WETH',
            decimals: 17,
            icon: <EthereumCircleFilled />,
          },
        }}
        value={1230000000000000000n}
      />,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 12.3 WETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });

  it('custom chain in props', () => {
    const { baseElement } = render(
      <CryptoPrice
        icon={<EthereumCircleFilled />}
        symbol="WETH2"
        chain={{
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'WETH',
            decimals: 17,
          },
        }}
        value={1230000000000000000n}
      />,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 12.3 WETH2');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });

  it('custom chain in provider', () => {
    const { baseElement } = render(
      <Web3ConfigProvider
        chain={{
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'WETH',
            decimals: 17,
          },
        }}
      >
        <CryptoPrice icon={<EthereumCircleFilled />} value={1230000000000000000n} />,
      </Web3ConfigProvider>,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 12.3 WETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });

  it('user props greater then provider', () => {
    const { baseElement } = render(
      <Web3ConfigProvider
        chain={{
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'WETH',
            decimals: 17,
            icon: <EthereumCircleFilled />,
          },
        }}
      >
        <CryptoPrice symbol="PROP" value={1230000000000000000n} />,
      </Web3ConfigProvider>,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 12.3 PROP');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });
});
