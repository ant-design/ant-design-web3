import { describe, it, expect } from 'vitest';
import { mergeReactNodeProps } from '../utils';

describe('ConnectModal utils', () => {
  it('mergeReactNodeProps', () => {
    expect(mergeReactNodeProps(null, null)).toBe(null);
    expect(mergeReactNodeProps(false, false)).toBe(false);
  });
});
