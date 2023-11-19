import { ConnectButton } from '..';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

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
});
