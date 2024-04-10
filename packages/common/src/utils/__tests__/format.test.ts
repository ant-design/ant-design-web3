import { describe, expect, it } from 'vitest';

import { fillAddressWith0x, parseNumberToBigint } from '../format';

describe('utils.format', () => {
  it('should fill address with 0x', () => {
    expect(fillAddressWith0x('0x123')).toBe('0x123');
    expect(fillAddressWith0x('123')).toBe('0x123');
  });

  it('should parse number to bigint', () => {
    expect(parseNumberToBigint(123)).toBe(123n);
    expect(parseNumberToBigint(123n)).toBe(123n);
  });
});
