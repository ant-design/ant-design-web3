import { NFTCard } from '@ant-design/web3';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('NFTImage', () => {
  it('renders correctly with valid address and tokenId', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;

    expect(() => render(<NFTCard address={address} tokenId={tokenId} />)).not.toThrow();
  });

  it('renders correctly with valid address and bigint tokenId', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = BigInt(123);

    expect(() => render(<NFTCard address={address} tokenId={tokenId} />)).not.toThrow();
  });

  it('getNFTMetadata', async () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;

    const { baseElement } = render(
      <NFTCard
        address={address}
        tokenId={tokenId}
        getNFTMetadata={async () => {
          return {
            name: 'NFT Name',
            description: 'NFT Description',
            image: 'ipfs://QmXVH2TsfCXJ5pDM3cabHKW1Z7M6fAtu5yV6LuifVWPsoP',
          };
        }}
      />,
    );
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-image-img')?.getAttribute('src')).toBe(
        'https://ipfs.io/ipfs/QmXVH2TsfCXJ5pDM3cabHKW1Z7M6fAtu5yV6LuifVWPsoP',
      );
    });
  });
});
