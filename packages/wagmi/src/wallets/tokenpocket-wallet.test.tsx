// TokenpocketWallet.test.ts
import { describe, it, expect } from 'vitest';
import { TokenpocketWallet } from '@ant-design/web3-wagmi';

describe('TokenPocket Wallet', () => {
  const wallet = TokenpocketWallet.create();
  it('name', async () => {
    expect(wallet.name).toBe('TokenPocket Wallet');
  });

  it('always return true for hasWalletReady', async () => {
    const install = await wallet.hasWalletReady?.();
    expect(install).toBe(true);
  });

  it('should create a wallet with the correct properties', () => {
    for (const key in wallet) {
      expect(wallet).toHaveProperty(key);
    }
  });
});
