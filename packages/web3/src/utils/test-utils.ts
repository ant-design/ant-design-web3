import type { WalletExtensionItem } from '@ant-design/web3-common';

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

export const browsers: Record<WalletExtensionItem['key'], string> = {
  Chrome: 'chrome',
  Edge: 'edge',
  Firefox: 'firefox',
  Safari: 'safari',
};

export function mockBrowser(browser: WalletExtensionItem['key']) {
  const oriUserAgent = window.navigator.userAgent;
  Object.defineProperty(window, 'navigator', {
    value: {
      userAgent: browsers[browser],
    },
  });
  return () => {
    Object.defineProperty(window, 'navigator', {
      value: {
        userAgent: oriUserAgent,
      },
    });
  };
}
