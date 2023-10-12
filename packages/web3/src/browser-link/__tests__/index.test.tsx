import { BrowserLink } from '..';
import { render } from '@testing-library/react';

describe('BrowserLink', () => {
  it('mount correctly', () => {
    expect(() => render(<BrowserLink />)).not.toThrow();
  });
});
