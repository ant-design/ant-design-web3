import { NFTCard } from '@ant-design/web3';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('NFTCard', () => {
  const imageUrl =
    'https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp';

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

  it('render image when pass url', () => {
    const { baseElement } = render(
      <NFTCard
        image={imageUrl}
        antdImageProps={{
          alt: 'test',
        }}
      />,
    );

    const imgEle = baseElement.querySelector<HTMLImageElement>(
      '.ant-nft-card-content .ant-image-img',
    );

    expect(imgEle).toBeTruthy();
    expect(imgEle?.src).toBe(imageUrl);
    expect(imgEle?.alt).toBe('test');
  });

  it('render image when pass react node', () => {
    const { baseElement } = render(
      <NFTCard image={<img className="test-nft-image" src={imageUrl} alt="test" />} />,
    );

    const imgEle = baseElement.querySelector<HTMLImageElement>(
      '.ant-nft-card-content .test-nft-image',
    );

    expect(imgEle).toBeTruthy();
    expect(imgEle?.src).toBe(imageUrl);
    expect(imgEle?.alt).toBe('test');
  });

  it('render footer when pass `footer`', () => {
    const { baseElement } = render(<NFTCard image={imageUrl} footer="test" />);

    expect(baseElement.querySelector('.ant-nft-card-footer')).toBeTruthy();
    expect(baseElement.querySelector('.ant-nft-card-footer')?.textContent).toBe('test');
  });
});
