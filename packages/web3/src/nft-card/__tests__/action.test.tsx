import { NFTCard } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('NFTCard actions', () => {
  it('render action and onActionClick work', async () => {
    const actionFn = vi.fn();
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;

    const { baseElement } = render(
      <NFTCard
        getNFTMetadata={async () => {
          return {
            image: 'https://ipfs.io/ipfs/QmXVH2TsfCXJ5pDM3cabHKW1Z7M6fAtu5yV6LuifVWPsoP',
          };
        }}
        address={address}
        tokenId={tokenId}
        actionText="ActionTest"
        showAction
        onActionClick={actionFn}
        price={{
          value: 139999n,
        }}
      />,
    );
    await vi.waitFor(() => {
      // Ensure the like and price elements are rendered
      expect(baseElement.querySelector('.ant-web3-nft-card-action')?.textContent).toBe(
        'ActionTest',
      );
      fireEvent.click(baseElement.querySelector('.ant-web3-nft-card-action .ant-btn')!);
      expect(actionFn).toHaveBeenCalled();
    });
  });
  it('render action and onActionClick work', async () => {
    const actionFn = vi.fn();
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;

    const { baseElement } = render(
      <NFTCard
        getNFTMetadata={async () => {
          return {
            image: 'https://ipfs.io/ipfs/QmXVH2TsfCXJ5pDM3cabHKW1Z7M6fAtu5yV6LuifVWPsoP',
          };
        }}
        address={address}
        tokenId={tokenId}
        showAction
        onActionClick={actionFn}
        price={{
          value: 139999n,
        }}
      />,
    );
    await vi.waitFor(() => {
      // Ensure the like and price elements are rendered
      expect(baseElement.querySelector('.ant-web3-nft-card-action')?.textContent).toBe('Buy Now');
      fireEvent.click(baseElement.querySelector('.ant-web3-nft-card-action .ant-btn')!);
      expect(actionFn).toHaveBeenCalled();
    });
  });
});
