import { describe, expect, it } from 'vitest';

import { getWeb3AssetUrl, requestWeb3Asset } from '../request';
import { mockFetch } from '../test-utils';

describe('request', () => {
  it('getWeb3AssetUrl', () => {
    expect(getWeb3AssetUrl('')).toEqual('');
    expect(getWeb3AssetUrl('ipfs://test.com/xxxxx')).toEqual('https://ipfs.io/ipfs/test.com/xxxxx');
  });
  it('requestWeb3Asset', () => {
    const res = { test: 'test' };
    mockFetch(res);
    expect(requestWeb3Asset('')).rejects.toThrowError('URL not set');
    expect(requestWeb3Asset('ipfs://test.com/xxxxx')).resolves.toMatchObject(res);
  });
});
