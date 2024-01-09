import { describe, expect, it } from 'vitest';

import * as Chains from '../chains';

describe('Chains', async () => {
  it('chains id should unique', async () => {
    const chains = Object.values(Chains);

    const duplicateChain = chains.find(
      (chain, index) => chains.findIndex((c) => c.id === chain.id) !== index,
    );

    expect(duplicateChain).toBeUndefined();
  });
});
