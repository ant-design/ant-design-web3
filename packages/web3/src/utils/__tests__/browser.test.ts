import { describe, expect, it } from 'vitest';

import { getPlatform, readCopyText, writeCopyText } from '../browser';
import { browsers, mockBrowser, mockClipboard } from '../test-utils';

describe('utils/browser', () => {
  let resetMockClipboard: () => void;
  it('getPlatform', () => {
    Object.keys(browsers).forEach((key) => {
      const reset = mockBrowser(key);
      expect(getPlatform()).toBe(key);
      reset();
    });
    expect(getPlatform()).toBe('Other');
  });
  it('writeCopyText & readCopyText', () => {
    resetMockClipboard = mockClipboard();
    const test = 'test copy text';
    writeCopyText(test);
    expect(readCopyText()).resolves.toBe(test);
    resetMockClipboard();
  });
});
