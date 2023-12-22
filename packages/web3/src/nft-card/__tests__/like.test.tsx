import { NFTCard } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

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

  it('render tokenId when `type` is default', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;
    const likeConfig = {
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

    expect(
      baseElement.querySelector('.ant-nft-card-content .ant-nft-card-serial-number'),
    ).toBeTruthy();
    expect(
      baseElement.querySelector('.ant-nft-card-content .ant-nft-card-serial-number')?.textContent,
    ).toBe('#123');
  });

  it('render tokenId when `type` is pithy', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;
    const likeConfig = {
      totalLikes: 42,
    };

    const { baseElement } = render(
      <NFTCard
        address={address}
        tokenId={tokenId}
        like={likeConfig}
        type="pithy"
        price={{
          value: 139999n,
        }}
      />,
    );

    expect(
      baseElement.querySelector('.ant-nft-card-body .ant-nft-card-serial-number'),
    ).toBeTruthy();
    expect(
      baseElement.querySelector('.ant-nft-card-body .ant-nft-card-serial-number')?.textContent,
    ).toBe('No:123');
  });

  it('`tokenId` can not pass', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const likeConfig = {
      totalLikes: 42,
    };

    const { baseElement } = render(
      <NFTCard
        address={address}
        like={likeConfig}
        price={{
          value: 139999n,
        }}
      />,
    );

    expect(baseElement.querySelector('.ant-nft-card-serial-number')).toBeFalsy();
  });

  it('`pithy` mode should not render tokenId', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const likeConfig = {
      totalLikes: 42,
    };

    const { baseElement } = render(
      <NFTCard
        address={address}
        like={likeConfig}
        type="pithy"
        price={{
          value: 139999n,
        }}
      />,
    );

    expect(baseElement.querySelector('.ant-nft-card-serial-number')).toBeFalsy();
  });

  it('render skeleton when loading', () => {
    const { baseElement } = render(
      <NFTCard
        address="test"
        tokenId={123}
        getNFTMetadata={() => {
          return new Promise<any>((resolve) => {
            setTimeout(() => {
              resolve({});
            }, 3000);
          });
        }}
      />,
    );

    expect(baseElement.querySelector('.ant-nft-card-skeleton-wrap')).toBeTruthy();
    expect(baseElement.querySelector('.ant-nft-card-skeleton-content')).toBeTruthy();
    expect(baseElement.querySelector('.ant-nft-card-skeleton-body')).toBeTruthy();
    expect(baseElement.querySelector('.ant-nft-card-skeleton-button')).toBeTruthy();
    expect(baseElement.querySelector('.ant-nft-card-skeleton-footer')).toBeTruthy();
  });
});
