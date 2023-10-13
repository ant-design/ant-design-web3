import { ConnectButton } from '..';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('ConnectButton', () => {
  it('mount correctly', () => {
    expect(() => render(<ConnectButton />)).not.toThrow();
  });
});
