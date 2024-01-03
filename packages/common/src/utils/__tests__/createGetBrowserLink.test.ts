import { describe, expect, it, vi } from 'vitest';

import { createGetBrowserLink } from '../createGetBrowserLink';

describe('createGetBrowserLink', () => {
  it('should return a function that generates the correct link for the given address', () => {
    const getBrowserLink = createGetBrowserLink('https://etherscan.io');
    const result = getBrowserLink('0x1234', 'address');

    expect(result).toEqual('https://etherscan.io/address/0x1234');
  });

  it('should return a function that generates the correct link for the given transaction address', () => {
    const getBrowserLink = createGetBrowserLink('https://etherscan.io');
    const result = getBrowserLink('0x1234', 'transaction');

    expect(result).toEqual('https://etherscan.io/tx/0x1234');
  });

  it('should throw error when type is incorrect', () => {
    const fn = vi.fn();
    const getBrowserLink = createGetBrowserLink('https://etherscan.io');

    try {
      getBrowserLink('0x1234', 'unknown');
    } catch (e) {
      fn(e);
    }

    expect(fn).toBeCalled();
  });
});
