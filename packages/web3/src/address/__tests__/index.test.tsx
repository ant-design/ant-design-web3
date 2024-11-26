import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Address } from '..';

console.log(`get React version: ${React.version}`);

describe('Address', () => {
  it('mount correctly', () => {
    expect(() => render(<Address />)).not.toThrow();
  });

  it('display address', () => {
    const { baseElement } = render(
      <Address address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe(
      '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });

  it('display address with ellipsis', () => {
    const { baseElement } = render(
      <Address ellipsis address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe('0x21CD...Fd3B');
  });

  it('display address with ellipsis and custom clip', () => {
    const { baseElement } = render(
      <Address
        ellipsis={{
          headClip: 3,
          tailClip: 3,
        }}
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
      />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe('0x2...d3B');
  });

  it('display address with tooltip', async () => {
    const { baseElement } = render(
      <Address address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" ellipsis />,
    );

    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe('0x21CD...Fd3B');
    fireEvent.mouseEnter(baseElement.querySelector('.ant-web3-address.ant-typography span')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent).toBe(
        '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      );
    });
  });

  it('display address with default format', () => {
    const { baseElement } = render(
      <Address address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" format />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe(
      '0x 21CD f097 4d53 a6e9 6eF0 5d7B 324a 9803 735f Fd3B',
    );
    expect(baseElement.querySelector('.ant-web3-address')).toMatchSnapshot();
  });

  it('display address with custom format', () => {
    const { baseElement } = render(
      <Address
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        format={(input) => {
          return input.slice(0, 10);
        }}
      />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe('0x21CDf097');
  });

  it('display address with copyable', async () => {
    const promptMock = vi.fn();
    vi.spyOn(window, 'prompt').mockImplementation(promptMock);
    const { baseElement } = render(
      <Address address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" ellipsis copyable />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe('0x21CD...Fd3B');
    fireEvent.click(baseElement.querySelector('.anticon-copy')!);
    await vi.waitFor(async () => {
      expect(baseElement.querySelector('.anticon-check')).not.toBeNull();
      expect(baseElement.querySelector('.anticon-copy')).toBeNull();
      expect(baseElement.querySelector('.ant-typography-copy')?.getAttribute('aria-label')).toBe(
        'Address Copied!',
      );
      // copy-to-clipboard in antd can not mock with vitest, so test with prompt
      expect(promptMock).toBeCalledWith(
        'Copy to clipboard: Ctrl+C, Enter',
        '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      );
    });
  });

  it('does not display ellipsis if ellipsis is set to false', () => {
    const { baseElement } = render(
      <Address ellipsis={false} address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe(
      '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });

  it('does not display tooltip if tooltip is set to false', async () => {
    const { baseElement } = render(
      <Address tooltip={false} address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
    );
    fireEvent.mouseEnter(baseElement.querySelector('.ant-web3-address.ant-typography span')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-tooltip-inner')).toBeNull();
    });
  });

  it('does not apply any formatting if format is set to false', () => {
    const { baseElement } = render(
      <Address format={false} address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />,
    );
    expect(baseElement.querySelector('.ant-web3-address')?.textContent).toBe(
      '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });

  it('should display custom tooltip if tooltip is set custom', async () => {
    const { baseElement } = render(
      <Address
        ellipsis
        address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
        tooltip={<span>hello</span>}
      />,
    );
    fireEvent.mouseEnter(baseElement.querySelector('.ant-web3-address.ant-typography span')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-tooltip-inner')?.textContent).toBe('hello');
    });
  });

  it('should show copy icon after 3s', async () => {
    const { baseElement } = render(
      <Address address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" copyable />,
    );
    expect(baseElement.querySelector('.anticon-check')).toBeNull();
    fireEvent.click(baseElement.querySelector('.anticon-copy')!);
    expect(baseElement.querySelector('.anticon-check')).not.toBeNull();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.anticon-check')).toBeNull();
      expect(baseElement.querySelector('.anticon-copy')).not.toBeNull();
    });
  });
});
