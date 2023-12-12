import { describe, it, expect } from 'vitest';
import { formatBalance } from '../format';

describe('utils/format', () => {
  it('formatBalance', () => {
    expect(formatBalance(1000000000000000000n, 18)).toBe('1');
    expect(formatBalance(1230000000000000000n, 18)).toBe('1.23');
    expect(formatBalance(11234000000000000000n, 18)).toBe('11.234');
    expect(formatBalance(1000000000000000000n, 18, 2)).toBe('1.00');
    expect(formatBalance(10000000000000000n, 18)).toBe('0.01');
    expect(formatBalance(12345, 5)).toBe('0.12345');
  });
});
