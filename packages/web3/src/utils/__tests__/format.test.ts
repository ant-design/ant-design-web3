import { describe, expect, it } from 'vitest';

import { fillWithPrefix, formatBalance } from '../format';

describe('utils/format', () => {
  it('formatBalance', () => {
    expect(formatBalance(1000000000000000000n, 18)).toBe('1');
    expect(formatBalance(1230000000000000000n, 18)).toBe('1.23');
    expect(formatBalance(11234000000000000000n, 18)).toBe('11.234');
    expect(formatBalance(1000000000000000000n, 18, 2)).toBe('1.00');
    expect(formatBalance(10000000000000000n, 18)).toBe('0.01');
    expect(formatBalance(12345, 5)).toBe('0.12345');
  });

  it('fillWithPrefix', () => {
    const address = '21CDf0974d53a6e96eF05d7B324a9803735fFd3B';

    // normal
    expect(fillWithPrefix(address)).toBe(`0x${address}`);

    // pass props
    expect(fillWithPrefix(address, '0x')).toBe(`0x${address}`);
    expect(fillWithPrefix(address, false)).toBe(address);

    // pass context
    expect(fillWithPrefix(address, undefined, '??')).toBe(`??${address}`);
    expect(fillWithPrefix(address, undefined, false)).toBe(address);

    // pass both
    expect(fillWithPrefix(address, '0x', '??')).toBe(`0x${address}`);
    expect(fillWithPrefix(address, '0x', false)).toBe(`0x${address}`);
    expect(fillWithPrefix(address, false, '??')).toBe(`${address}`);
    expect(fillWithPrefix(address, false, false)).toBe(address);
  });
});
