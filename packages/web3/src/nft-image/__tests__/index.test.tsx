import { NFTImage } from '..';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

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
});
