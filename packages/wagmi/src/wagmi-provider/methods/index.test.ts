import { addNameToAccounts } from './index';
import { vi, describe, it, expect } from 'vitest';

vi.mock('@wagmi/core', () => {
  return {
    fetchEnsName: ({ address }: { address: string }) => {
      if (address === '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B') {
        return 'wanderingearth,eth';
      }
      return null;
    },
  };
});

describe('wagmi-provider/methods/index.ts', () => {
  it('addNameToAccounts', async () => {
    const accounts = await addNameToAccounts([
      {
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      },
      {
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735f0000',
      },
    ]);
    expect(accounts).toEqual([
      {
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        name: 'wanderingearth,eth',
      },
      {
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735f0000',
      },
    ]);
  });
});
