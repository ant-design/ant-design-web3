import { ConnectButton } from '..';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// 代理 navigator.clipboard 方法用于测试复制文本到粘贴板的功能
const mockClipboard = () => {
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
};

mockClipboard();

describe('ConnectButton', () => {
  it('mount correctly', () => {
    expect(() => render(<ConnectButton />)).not.toThrow();
  });
  it('display tooltip', () => {
    const { baseElement } = render(
      <ConnectButton address="3ea2cfd153b8d8505097b81c87c11f5d05097c18" tooltip={{ open: true }} />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent).toBe('0x3ea2cf...097c18');
    expect(baseElement.querySelector('.anticon-copy')).not.toBeNull();
  });
  it('disabled copyable in tooltip', () => {
    const { baseElement } = render(
      <ConnectButton
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        tooltip={{ open: true, copyable: false }}
      />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent?.trim()).toBe(
      '0x3ea2cf...097c18',
    );
    expect(baseElement.querySelector('.anticon-copy')).toBeNull();
  });
  it('custom title in tooltip', () => {
    const { baseElement } = render(
      <ConnectButton
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        tooltip={{ open: true, title: 'aaaaaabbbbbbcccccc' }}
      />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent?.trim()).toBe(
      'aaaaaabbbbbbcccccc',
    );
  });
  it('should not display tooltip when not custom title and without address in tooltip', () => {
    const { baseElement } = render(<ConnectButton tooltip />);
    expect(baseElement.querySelector('.ant-tooltip')).toBeNull();
  });
  it('should copy text after click copy icon', async () => {
    const { baseElement } = render(
      <ConnectButton address="3ea2cfd153b8d8505097b81c87c11f5d05097c18" tooltip={{ open: true }} />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent).toBe('0x3ea2cf...097c18');
    expect(baseElement.querySelector('.anticon-copy')).not.toBeNull();
    fireEvent.click(baseElement.querySelector('.anticon-copy')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-message')).not.toBeNull();
      expect(baseElement.querySelector('.ant-message-notice-content')?.textContent).toBe(
        'Address Copied!',
      );
      expect(navigator.clipboard.readText()).resolves.toBe(
        '0x3ea2cfd153b8d8505097b81c87c11f5d05097c18',
      );
    });
  });
});
