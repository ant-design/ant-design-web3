import { NFTCard } from '@ant-design/web3';
import { render } from '@testing-library/react';
import { describe, it, expect, vi, act } from 'vitest';

describe('NFTCard', () => {
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

  it('renders correctly with likeConfig and price', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;
    const likeConfig = {
      liked: true,
      totalLikes: 42,
    };

    const { baseElement } = render(
      <NFTCard
        address={address}
        tokenId={tokenId}
        like={likeConfig}
        price={{
          value: 139999n,
        }}
      />,
    );

    // Ensure the like and price elements are rendered
    expect(baseElement.querySelector('.ant-nft-card-like-value')).toBeTruthy();
    expect(baseElement.querySelector('.ant-web3-crypto-price-balance')).toBeTruthy();
  });

  it('renders correctly without likeConfig and price', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;

    const { baseElement } = render(<NFTCard address={address} tokenId={tokenId} />);

    // Ensure the like and price elements are not rendered
    expect(baseElement.querySelector('.ant-nft-card-like-value')).toBeNull();
    expect(baseElement.querySelector('.ant-web3-crypto-price-balance')).toBeNull();
  });

  it('renders footer content when footer prop is provided', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;

    const { baseElement } = render(
      <NFTCard address={address} tokenId={tokenId} footer={<div>Additional information</div>} />,
    );

    expect(baseElement.querySelector('.ant-nft-card-footer')).toBeTruthy();
  });
});
