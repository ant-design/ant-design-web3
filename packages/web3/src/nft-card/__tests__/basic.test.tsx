import { NFTCard } from '@ant-design/web3';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('NFTCard', () => {
  const imageUrl =
    'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*jlrDRrBXZiEAAAAAAAAAAAAADlrGAQ/original';

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
    expect(baseElement.querySelector('.ant-web3-nft-card-like-value')).toBeNull();
    expect(baseElement.querySelector('.ant-web3-crypto-price-balance')).toBeNull();
  });

  it('renders footer content when footer prop is provided', () => {
    const { baseElement } = render(
      <NFTCard
        image="https://ipfs.io/ipfs/QmXVH2TsfCXJ5pDM3cabHKW1Z7M6fAtu5yV6LuifVWPsoP"
        footer={<div>Additional information</div>}
      />,
    );

    expect(baseElement.querySelector('.ant-web3-nft-card-footer')).toBeTruthy();
  });

  it('render tokenId when `type` is default', async () => {
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
      expect(
        baseElement.querySelector('.ant-web3-nft-card-content .ant-web3-nft-card-serial-number'),
      ).toBeTruthy();
      expect(
        baseElement.querySelector('.ant-web3-nft-card-content .ant-web3-nft-card-serial-number')
          ?.textContent,
      ).toBe('#123');
    });
  });

  it('render tokenId when `type` is pithy', async () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;
    const likeConfig = {
      totalLikes: 42,
    };

    const { baseElement } = render(
      <NFTCard
        getNFTMetadata={async () => {
          return {
            image: 'https://ipfs.io/ipfs/QmXVH2TsfCXJ5pDM3cabHKW1Z7M6fAtu5yV6LuifVWPsoP',
          };
        }}
        address={address}
        tokenId={tokenId}
        like={likeConfig}
        type="pithy"
        price={{
          value: 139999n,
        }}
      />,
    );
    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-nft-card-body .ant-web3-nft-card-serial-number'),
      ).toBeTruthy();
      expect(
        baseElement.querySelector('.ant-web3-nft-card-body .ant-web3-nft-card-serial-number')
          ?.textContent,
      ).toBe('No:123');
    });
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

    expect(baseElement.querySelector('.ant-web3-nft-card-serial-number')).toBeFalsy();
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

    expect(baseElement.querySelector('.ant-web3-nft-card-serial-number')).toBeFalsy();
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

    expect(baseElement.querySelector('.ant-web3-nft-card-skeleton-wrap')).toBeTruthy();
    expect(baseElement.querySelector('.ant-web3-nft-card-skeleton-content')).toBeTruthy();
    expect(baseElement.querySelector('.ant-web3-nft-card-skeleton-body')).toBeTruthy();
    expect(baseElement.querySelector('.ant-web3-nft-card-skeleton-button')).toBeTruthy();
    expect(baseElement.querySelector('.ant-web3-nft-card-skeleton-footer')).toBeTruthy();
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
      '.ant-web3-nft-card-content .ant-image-img',
    );

    expect(imgEle).toBeTruthy();
    expect(imgEle?.src).toBe(imageUrl);
    expect(imgEle?.alt).toBe('test');
  });

  it('render image when error image', async () => {
    const { baseElement } = render(<NFTCard image="" />);

    const imgEle = baseElement.querySelector<HTMLImageElement>(
      '.ant-web3-nft-card-content .ant-image-img',
    );

    expect(imgEle).toBeTruthy();
    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-nft-card-content .ant-image-img')?.getAttribute('src'),
      ).toBe('');
    });
  });

  it('render warning result when request error', async () => {
    const { baseElement } = render(
      <NFTCard
        getNFTMetadata={async () => {
          throw new Error('This is an error');
        }}
        address="0x79fcdef22feed20eddacbb2587640e45491b757f"
        tokenId={42n}
      />,
    );
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-result-subtitle')?.textContent).toBe(
        'This is an error',
      );
    });
  });

  it('errorRender', async () => {
    const { baseElement } = render(
      <NFTCard
        getNFTMetadata={async () => {
          throw new Error('This is an error');
        }}
        errorRender={(e: Error) => <div className="custom-error">Custom Error {e.message}</div>}
        address="0x79fcdef22feed20eddacbb2587640e45491b757f"
        tokenId={42n}
      />,
    );
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.custom-error')?.textContent).toBe(
        'Custom Error This is an error',
      );
    });
  });

  it('render image when pass react node', () => {
    const { baseElement } = render(
      <NFTCard image={<img className="test-nft-image" src={imageUrl} alt="test" />} />,
    );

    const imgEle = baseElement.querySelector<HTMLImageElement>(
      '.ant-web3-nft-card-content .test-nft-image',
    );

    expect(imgEle).toBeTruthy();
    expect(imgEle?.src).toBe(imageUrl);
    expect(imgEle?.alt).toBe('test');
  });

  it('render footer when pass `footer`', () => {
    const { baseElement } = render(<NFTCard image={imageUrl} footer="test" />);

    expect(baseElement.querySelector('.ant-web3-nft-card-footer')).toBeTruthy();
    expect(baseElement.querySelector('.ant-web3-nft-card-footer')?.textContent).toBe('test');
  });
});
