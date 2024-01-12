import { describe, expect, it, vi } from 'vitest';
import type { Config } from 'wagmi';

import { addNameToAccount } from '../index';

vi.mock('@wagmi/core', () => {
  return {
    getEnsName: (_: any, { address }: { address: string }) => {
      if (address === '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B') {
        return 'wanderingearth,eth';
      }
      return null;
    },
  };
});

describe('wagmi-provider/methods/index.ts', () => {
  it('addNameToAccount', async () => {
    const accountA = await addNameToAccount({} as Config, {
      address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    });
    expect(accountA).toEqual({
      address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      name: 'wanderingearth,eth',
    });

    const accountB = await addNameToAccount({} as Config, {
      address: '0x21CDf0974d53a6e96eF05d7B324a9803735f0000',
    });
    expect(accountB).toEqual({
      address: '0x21CDf0974d53a6e96eF05d7B324a9803735f0000',
    });
  });
});
