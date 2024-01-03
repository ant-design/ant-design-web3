import { describe, expect, it } from 'vitest';

import { mergeReactNodeProps } from '../utils';

describe('ConnectModal utils', () => {
  it('mergeReactNodeProps', () => {
    expect(mergeReactNodeProps(null, null)).toBe(null);
    expect(mergeReactNodeProps(false, false)).toBe(false);
  });
});
