import { describe, it, expect } from 'vitest';
import { browsers, mockBrowser, mockClipboard } from '../test-utils';
import { getPlatform, readCopyText, writeCopyText } from '../browser';

describe('utils', () => {
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
