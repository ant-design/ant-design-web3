import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { NFTImage } from '..';

describe('NFTImage', () => {
  it('renders correctly with valid address and tokenId', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;

    expect(() =>
      render(<NFTImage address={address} tokenId={tokenId} alt="NFT Image" />),
    ).not.toThrow();
  });

  it('renders correctly with valid address and bigint tokenId', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = BigInt(123);

    expect(() =>
      render(<NFTImage address={address} tokenId={tokenId} alt="NFT Image" />),
    ).not.toThrow();
  });

  it('use custom getNFTMetadata', async () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = BigInt(123);

    const { baseElement } = render(
      <NFTImage
        address={address}
        tokenId={tokenId}
        getNFTMetadata={({ address: _address, tokenId: _tokenId }) => {
          return Promise.resolve({
            name: `Test_${_address}_${_tokenId}`,
            image: 'https://example.com/nft.png',
          });
        }}
      />,
    );
    await vi.waitFor(async () => {
      const img = baseElement.querySelector('img');
      expect(img).toHaveProperty('src', 'https://example.com/nft.png');
      expect(img).toHaveProperty('alt', 'Test_0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B_123');
      expect(baseElement).toMatchSnapshot();
    });
  });
});
