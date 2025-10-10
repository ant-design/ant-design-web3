import { describe, expect, it, vi } from 'vitest';

import { getPlatform, writeCopyText } from '../browser';
import { browsers, mockBrowser, readCopyText } from '../test-utils';

describe('utils/browser', () => {
  it('getPlatform', () => {
    Object.keys(browsers).forEach((key) => {
      const reset = mockBrowser(key);
      expect(getPlatform()).toBe(key);
      reset();
    });
    expect(getPlatform()).toBe('Other');
  });

  it('writeCopyText & readCopyText', async () => {
    const test = 'test copy text';
    writeCopyText(test);
    await vi.waitFor(() => {
      expect(readCopyText()).resolves.toBe(test);
    });
  });
});
