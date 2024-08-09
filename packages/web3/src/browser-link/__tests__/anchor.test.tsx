import { Mainnet } from '@ant-design/web3-assets';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { BrowserLink } from '..';

/**
 * Test suite for BrowserLink component's anchor tag properties.
 */
describe('BrowserLink a tag props', () => {
  const mockProps = {
    address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    chain: Mainnet,
  };

  it('get defaults rel and target return null when not provided', () => {
    const { baseElement } = render(<BrowserLink {...mockProps} />);
    const link = baseElement.querySelector('a');
    expect(link).not.toBeNull();
    expect(link?.getAttribute('rel')).toBeNull();
    expect(link?.getAttribute('target')).toBeNull();
  });

  it('passes rel and target to the a tag', () => {
    const { baseElement } = render(
      <BrowserLink {...mockProps} rel="noopener noreferrer" target="_blank" />,
    );
    const link = baseElement.querySelector('a');
    expect(link).not.toBeNull();
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    expect(link?.getAttribute('target')).toBe('_blank');
  });
});
