import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { CHAIN } from '../../index';
import TonConnectSdk from '../TonConnectSdk';

global.fetch = vi.fn();
function createFetchResponse(data: any) {
  return Promise.resolve({ ok: true, json: () => new Promise((resolve) => resolve(data)) });
}

describe('TonSDK', () => {
  beforeEach(() => {
    // @ts-ignore: vi.fn().mockReset
    global.fetch.mockReset();
  });

  afterAll(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  it('get balance success', async () => {
    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue(createFetchResponse({ balance: '1000000000000' }));
    const connector = new TonConnectSdk({ chain: CHAIN.TESTNET });
    const balance = await connector.getBalance(
      `${connector.api}/account?address=0QCWb5WbnAAqfMrmsBA8uZ_rfx-_8sDMByoqlC4HsbnG_VEy`,
    );
    expect(balance).not.toBe('0');
  });

  it('get balance failed', async () => {
    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue({ ok: false });
    const connector = new TonConnectSdk({ chain: CHAIN.TESTNET });
    const errorThrowingFunctionWithUrl = async () => {
      return connector.getBalance(
        `${connector.api}/account?address=0QCWb5WbnAAqfMrmsBA8uZ_rfx-_8sDMByoqlC4HsbnG_VEy`,
      );
    };

    expect(errorThrowingFunctionWithUrl()).rejects.toThrow();
    const balance = await connector.getBalance();
    expect(balance).toBe(0n);
  });

  it('switch network', () => {
    const connector = new TonConnectSdk({});
    console.log(connector.account);
    expect(connector.api).toBe('https://toncenter.com/api/v3');
    expect(connector.network).toBe(CHAIN.MAINNET);

    connector.network = CHAIN.TESTNET;
    expect(connector.api).toBe('https://testnet.toncenter.com/api/v3');
    expect(connector.network).toBe(CHAIN.TESTNET);
  });
});
