import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LedgerWeb3ConfigProvider } from '../index';

describe('LedgerWeb3ConfigProvider', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <LedgerWeb3ConfigProvider>
        <div>Test</div>
      </LedgerWeb3ConfigProvider>,
    );
    expect(container).toBeTruthy();
  });

  it('should render children', () => {
    const { getByText } = render(
      <LedgerWeb3ConfigProvider>
        <div>Test Content</div>
      </LedgerWeb3ConfigProvider>,
    );
    expect(getByText('Test Content')).toBeTruthy();
  });
});
