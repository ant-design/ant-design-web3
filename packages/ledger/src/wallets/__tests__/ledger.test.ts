import { describe, expect, it, vi } from 'vitest';

import type { LedgerWallet } from '../../types';
import { Ledger } from '../ledger';

describe('Ledger wallet', () => {
  it('should create Ledger wallet factory', () => {
    const walletFactory = Ledger();
    expect(walletFactory.name).toBe('Ledger');
    expect(walletFactory.create).toBeDefined();
  });

  it('should create Ledger wallet adapter', () => {
    const walletFactory = Ledger();
    const wallet = walletFactory.create();

    expect(wallet.name).toBe('Ledger');
    expect(wallet.adapter).toBeDefined();
    expect(wallet.group).toBe('Hardware');
  });

  it('should have connect and disconnect methods', async () => {
    const walletFactory = Ledger();
    const wallet = walletFactory.create();

    expect(wallet.adapter?.connect).toBeDefined();
    expect(wallet.adapter?.disconnect).toBeDefined();
  });
});
