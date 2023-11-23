import { ConnectButton } from '..';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mockClipboard } from '../../utils/test-utils';

describe('ConnectButton', () => {
  let resetMockClipboard: () => void;
  beforeEach(() => {
    resetMockClipboard = mockClipboard();
  });
  afterEach(() => {
    resetMockClipboard();
  });

  it('mount correctly', () => {
    expect(() => render(<ConnectButton />)).not.toThrow();
  });

  it('display name', () => {
    const { baseElement } = render(
      <ConnectButton
        name="wanderingearth.eth"
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        connected
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('wanderingearth.eth');
  });

  it('display addresss when not has name', () => {
    const { baseElement } = render(
      <ConnectButton address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" connected />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('0x21CD...Fd3B');
  });

  it('display name when not has address', () => {
    const { baseElement } = render(<ConnectButton name="wanderingearth.eth" connected />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('wanderingearth.eth');
  });

  it('tooltip show address when has name', () => {
    const { baseElement } = render(
      <ConnectButton
        name="wanderingearth.eth"
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        connected
        tooltip={{ open: true }}
      />,
    );
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('wanderingearth.eth');
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent).toBe('0x3ea2cf...097c18');
    expect(baseElement.querySelector('.anticon-copy')).not.toBeNull();
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

  it('should copy text after click copy icon in custom title mode', async () => {
    const { baseElement } = render(
      <ConnectButton tooltip={{ open: true, title: 'aaaaaabbbbbbcccccc' }} />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent?.trim()).toBe(
      'aaaaaabbbbbbcccccc',
    );
    expect(baseElement.querySelector('.anticon-copy')).not.toBeNull();
    fireEvent.click(baseElement.querySelector('.anticon-copy')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-message')).not.toBeNull();
      expect(baseElement.querySelector('.ant-message-notice-content')?.textContent).toBe(
        'Address Copied!',
      );
      expect(navigator.clipboard.readText()).resolves.toBe('aaaaaabbbbbbcccccc');
    });
  });
});
