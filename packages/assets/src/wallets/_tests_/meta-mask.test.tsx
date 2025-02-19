import { describe, expect, it } from 'vitest';

import { metadata_MetaMask } from '../meta-mask';

describe('transferQRCodeFormatter', () => {
  const formatterFunc = metadata_MetaMask.transferQRCodeFormatter!;

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
    const expectedValue = `ethereum:${paramsWithTokenAddress.tokenAddress}@${
      commonParams.chainId
    }/transfer?address=${commonParams.toAddress}&uint256=${
      paramsWithTokenAddress.amount * 10 ** (18 - commonParams.decimal)
    }`;
    expect(result).toBe(expectedValue);
  });

  it('returns the correct URL without token address', () => {
    const paramsWithoutTokenAddress = {
      ...commonParams,
      tokenAddress: '',
    };
    const result = formatterFunc(paramsWithoutTokenAddress);
    const expectedValue = `ethereum:${commonParams.toAddress}@${commonParams.chainId}?value=${paramsWithoutTokenAddress.amount}`;
    expect(result).toBe(expectedValue);
  });
});
