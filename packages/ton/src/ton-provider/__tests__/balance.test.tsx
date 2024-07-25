import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { CHAIN } from '../../index';
import TonConnectSdk from '../TonConnectSdk';

global.fetch = vi.fn();
function createFetchResponse(data: any) {
  return Promise.resolve({ ok: true, json: () => new Promise((resolve) => resolve(data)) });
}

describe('TonSdkWithMock', () => {
  beforeEach(() => {
    // @ts-ignore: vi.fn().mockReset
    global.fetch.mockReset();
  });

  afterAll(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  it('has address', async () => {
    vi.mock('@tonconnect/sdk', async () => {
      const originModules = await vi.importActual('@tonconnect/sdk');
      return {
        ...originModules,
        default: class {
          account = {
            address: '123',
          };
          constructor() {
            this.account = {
              address: '124',
            };
          }
          restoreConnection = () => {};
          onStatusChange = () => {};
        },
      };
    });
    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue(createFetchResponse({ balance: '1000000000000' }));
    const connector = new TonConnectSdk({ chain: CHAIN.TESTNET });
    const balance = await connector.getBalance();
    expect(balance).not.toBe('0');
  });
});
