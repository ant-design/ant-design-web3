import { describe, it, expect } from 'vitest';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { CoinbaseWallet } from '@ant-design/web3-wagmi';

describe('CoinbaseWallet', async () => {
  it('name', async () => {
    const wallet = CoinbaseWallet.create();
    const wagmiWallet = new CoinbaseWalletConnector({
      options: {
        appName: 'testname',
      },
    });
    expect(wallet.name).toBe('Coinbase Wallet');
    expect(wallet.name).toBe(wagmiWallet.name);
  });

  it('always return true for hasWalletReady', async () => {
    const wallet = CoinbaseWallet.create();
    const install = await wallet.hasWalletReady?.();
    expect(install).toBe(true);
  });
});
