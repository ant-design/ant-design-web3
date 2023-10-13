import { BrowserLink } from '..';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('BrowserLink', () => {
  it('mount correctly', () => {
    expect(() =>
      render(<BrowserLink address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B" />),
    ).not.toThrow();
  });
});
