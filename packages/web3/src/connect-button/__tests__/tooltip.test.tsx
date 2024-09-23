import { fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ConnectButton } from '..';
import { readCopyText } from '../../utils/test-utils';

describe('ConnectButton', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('when tooltip is boolean, ant-tooltip not toBeNull', async () => {
    const App = () => {
      return (
        <ConnectButton
          account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
          tooltip={true}
        />
      );
    };
    const { baseElement, rerender } = render(<App />);
    const btn = baseElement.querySelector('.ant-web3-address.ant-typography span')!;
    fireEvent.mouseEnter(btn);
    rerender(<App />);
    // When the tooltip's title is string, baseElement.outerHTML does not contain '.ant-tooltip'.
    // mouseEnterDelay defaults is 0.1s and waitFakeTimer is required.
    await vi.runAllTimersAsync();
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
  });
  it('when mergedTitle does not exist, ant-tooltip toBeNull', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
        tooltip={{ open: true, copyable: true, title: undefined }}
      />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).toBeNull();
  });

  it('display tooltip', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
        }}
        tooltip={{ open: true }}
      />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent?.trim()).toBe(
      '0x3ea2cfd153b8d8505097b81c87c11f5d05097c18',
    );
    expect(baseElement.querySelector('.anticon-copy')).not.toBeNull();
  });

  it('disabled copyable in tooltip', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
        tooltip={{ open: true, copyable: false }}
      />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent?.trim()).toBe(
      '0x3ea2cfd153b8d8505097b81c87c11f5d05097c18',
    );
    expect(baseElement.querySelector('.anticon-copy')).toBeNull();
  });

  it('Enable copyable in tooltip', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
        tooltip={{ open: true, copyable: true }}
      />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent?.trim()).toBe(
      '0x3ea2cfd153b8d8505097b81c87c11f5d05097c18',
    );
    expect(baseElement.querySelector('.anticon-copy')).toBeTruthy();
  });

  it('custom title in tooltip', () => {
    const { baseElement } = render(
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
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

  it('should not display tooltip when without tooltip in tooltip', () => {
    const { baseElement } = render(<ConnectButton />);
    expect(baseElement.querySelector('.ant-tooltip')).toBeNull();
  });

  it('should copy text after click copy icon', async () => {
    const { baseElement } = render(
      <ConnectButton
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
        tooltip={{ open: true }}
      />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent?.trim()).toBe(
      '0x3ea2cfd153b8d8505097b81c87c11f5d05097c18',
    );
    expect(baseElement.querySelector('.anticon-copy')).not.toBeNull();
    fireEvent.click(baseElement.querySelector('.anticon-copy')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-message')).not.toBeNull();
      expect(baseElement.querySelector('.ant-message-notice-content')?.textContent).toBe('Copied!');
      expect(readCopyText()).resolves.toBe('0x3ea2cfd153b8d8505097b81c87c11f5d05097c18');
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
      expect(baseElement.querySelector('.ant-message-notice-content')?.textContent?.trim()).toBe(
        'Copied!',
      );
      expect(readCopyText()).resolves.toBe('aaaaaabbbbbbcccccc');
    });
  });
  it('should display formatted when pass format into tooltip', async () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x3ea2cfd153b8d8505097b81c87c11f5d05097c18',
        }}
        tooltip={{ open: true, format: true }}
      />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(
      baseElement.querySelector('.ant-web3-connect-button-tooltip-content')?.textContent?.trim(),
    ).toBe('0x 3ea2 cfd1 53b8 d850 5097 b81c 87c1 1f5d 0509 7c18');
    expect(baseElement.querySelector('.anticon-copy')).not.toBeNull();
    fireEvent.click(baseElement.querySelector('.anticon-copy')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-message')).not.toBeNull();
      expect(baseElement.querySelector('.ant-message-notice-content')?.textContent?.trim()).toBe(
        'Copied!',
      );
      expect(readCopyText()).resolves.toBe('0x3ea2cfd153b8d8505097b81c87c11f5d05097c18');
    });
  });
  it('should display formatted by custom formatter when pass format into tooltip', async () => {
    const { baseElement } = render(
      <ConnectButton
        account={{
          address: '0x3ea2cfd153b8d8505097b81c87c11f5d05097c18',
        }}
        tooltip={{ open: true, format: (address) => address.slice(0, 10) }}
      />,
    );
    expect(baseElement.querySelector('.ant-tooltip')).not.toBeNull();
    expect(
      baseElement.querySelector('.ant-web3-connect-button-tooltip-content')?.textContent?.trim(),
    ).toBe('0x3ea2cfd1');
    expect(baseElement).toMatchSnapshot();
  });
});
