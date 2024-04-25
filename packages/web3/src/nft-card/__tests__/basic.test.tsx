import { NFTCard } from '@ant-design/web3';
import { render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

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
    expect(baseElement.querySelector('.ant-web3-nft-card-like-value')).toBeNull();
    expect(baseElement.querySelector('.ant-web3-crypto-price-balance')).toBeNull();
  });

  it('renders footer content when footer prop is provided', () => {
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;

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
    const fallBackUrl =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==';

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
