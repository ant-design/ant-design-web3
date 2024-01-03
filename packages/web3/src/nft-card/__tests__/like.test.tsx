import { NFTCard } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('NFTCard like', () => {
  it('renders correctly with likeConfig and onLikeChange work', () => {
    const likeFn = vi.fn();
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;
    const likeConfig = {
      liked: true,
      totalLikes: 42,
      onLikeChange: likeFn,
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
    fireEvent.click(baseElement.querySelector('.ant-nft-card-like-icon')!);
    expect(likeFn).toHaveBeenCalled();
  });

  it('should controlled by user when not pass likeConfig.liked', () => {
    const likeFn = vi.fn();
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;
    const likeConfig = {
      totalLikes: 42,
      onLikeChange: likeFn,
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
    fireEvent.click(baseElement.querySelector('.ant-nft-card-like-icon')!);
    expect(likeFn).toHaveBeenCalled();
  });
});
