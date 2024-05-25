import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ShowCode } from '../ShowCode';

describe('ShowCode', () => {
  it('renders the ShowCode component', () => {
    expect(() => render(<ShowCode selectedChainId={1} onReturn={vi.fn()} />)).toBeTruthy();
  });
});
