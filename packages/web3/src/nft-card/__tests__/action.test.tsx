import { NFTCard } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('NFTCard actions', () => {
  it('render action and onActionClick work', () => {
    const actionFn = vi.fn();
    const address = '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B';
    const tokenId = 123;

    const { baseElement } = render(
      <NFTCard
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
    // Ensure the like and price elements are rendered
    expect(baseElement.querySelector('.ant-nft-card-action')?.textContent).toBe('ActionTest');
    fireEvent.click(baseElement.querySelector('.ant-nft-card-action .ant-btn')!);
    expect(actionFn).toHaveBeenCalled();
  });
});
