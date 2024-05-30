import { NFTCard } from '@ant-design/web3';
import { render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { BitcoinWeb3ConfigProvider } from '../index';

describe('BitcoinWeb3ConfigProvider getMetadata', () => {
  it('NFT Metadata', async () => {
    vi.spyOn(window, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return {
            image: 'http://nft-metadata.com',
            name: 'Inscription',
          };
        },
      } as any);
    });

    const App = () => (
      <BitcoinWeb3ConfigProvider>
        <NFTCard address="0x1234" name="Inscription" />
      </BitcoinWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    await waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-nft-card-name')?.textContent).toBe('Inscription');
    });
  });
});

describe('BitcoinWeb3ConfigProvider getMetadata', () => {
  it("can't get", async () => {
    vi.spyOn(window, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      } as any);
    });

    const App = () => (
      <BitcoinWeb3ConfigProvider>
        <NFTCard address="0x1234" />
      </BitcoinWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    await waitFor(() => {
      expect(baseElement.querySelector('.ant-result-subtitle')?.textContent).toBe(
        'Failed to get inscriptions',
      );
    });
  });
});
