import type { WalletExtensionItem } from '@ant-design/web3-common';

export const readCopyText = async (): Promise<string> => {
  // @ts-ignore
  return global.copiedText;
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
