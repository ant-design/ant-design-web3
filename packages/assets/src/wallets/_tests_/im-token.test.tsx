import { describe, expect, it } from 'vitest';

import { metadata_imToken } from '../im-token';

describe('transferQRCodeFormatter', () => {
  const formatterFunc = metadata_imToken.transferQRCodeFormatter!;

  const commonParams = {
    toAddress: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
    chainId: 1, // Mainnet
    amount: 1000000,
    decimal: 6,
  };

  it('returns the correct URL with token address', () => {
    const paramsWithTokenAddress = {
      ...commonParams,
      tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    };
    const result = formatterFunc(paramsWithTokenAddress);
    expect(result).toBe(
      `ethereum:${commonParams.toAddress}@${commonParams.chainId}?contractAddress=${paramsWithTokenAddress.tokenAddress}&decimal=${commonParams.decimal}&value=${commonParams.amount}`,
    );
  });

  it('returns the correct URL without token address', () => {
    const paramsWithoutTokenAddress = { ...commonParams, tokenAddress: '' };
    const result = formatterFunc(paramsWithoutTokenAddress);
    expect(result).toBe(
      `ethereum:${commonParams.toAddress}@${commonParams.chainId}?decimal=18&value=${commonParams.amount}`,
    );
  });
});
