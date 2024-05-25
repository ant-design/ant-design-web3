import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ChainList } from '../ChainList';

describe('ChainList', () => {
  it('initially ChainList renders', () => {
    expect(() => render(<ChainList onChainSelected={vi.fn()} />)).toBeTruthy();
  });
});
