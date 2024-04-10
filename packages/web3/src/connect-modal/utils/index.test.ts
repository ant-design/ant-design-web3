import { describe, expect, it } from 'vitest';

import { defaultGroupOrder } from './index';

describe('ConnectModal/utils', () => {
  it('defaultGroupOrder', () => {
    expect(defaultGroupOrder('a', 'b')).toBe(-1);
    expect(defaultGroupOrder('b', 'a')).toBe(1);
    expect(defaultGroupOrder('More', 'a')).toBe(1);
    expect(defaultGroupOrder('Popular', 'A')).toBe(-1);
  });
});
