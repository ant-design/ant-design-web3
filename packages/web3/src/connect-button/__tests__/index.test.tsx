import { ConnectButton } from '..';
import { render } from '@testing-library/react';

describe('ConnectButton', () => {
  it('mount correctly', () => {
    expect(() => render(<ConnectButton />)).not.toThrow();
  });
});
