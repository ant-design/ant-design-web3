import { describe, expect, it } from 'vitest';

import { lighten, setAlpha } from '../useStyle';

describe('useStyle', () => {
  it('setAlpha', () => {
    expect(setAlpha('#fff', 0.5)).toBe('rgba(255, 255, 255, 0.5)');
  });
  it('lighten', () => {
    expect(lighten('#000', 50)).toBe('#808080');
  });
});
