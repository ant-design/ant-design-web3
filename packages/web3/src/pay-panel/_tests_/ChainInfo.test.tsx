import { Mainnet } from '@ant-design/web3-assets';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ChainInfo } from '../ChainInfo';

describe('ChainInfo', () => {
  it('initially ChainInfo renders', () => {
    expect(() => render(<ChainInfo chainInfo={Mainnet} />)).toBeTruthy();
  });
});
