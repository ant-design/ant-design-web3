import { vi } from 'vitest';

const oriClipboard = window.navigator.clipboard;
// 代理 navigator.clipboard 方法用于测试复制文本到粘贴板的功能
export const mockClipboard = () => {
  const clipboard = {
    text: '',
    writeText: (text: string) => {
      clipboard.text = text;
      return Promise.resolve();
    },
    readText: () => {
      return Promise.resolve(clipboard.text);
    },
  };
  Object.defineProperty(window, 'navigator', {
    value: {
      clipboard,
    },
  });

  return () => {
    Object.defineProperty(window, 'navigator', {
      value: {
        clipboard: oriClipboard,
      },
    });
  };
};

/**
 * Wait for a time delay. Will wait `advanceTime * times` ms.
 *
 * @param advanceTime Default 1000
 * @param times Default 20
 */
export async function waitFakeTimer(advanceTime = 1000, times = 20) {
  for (let i = 0; i < times; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await vi.waitFor(async () => {
      await Promise.resolve();

      if (advanceTime > 0) {
        vi.advanceTimersByTime(advanceTime);
      } else {
        vi.runAllTimers();
      }
    });
  }
}
