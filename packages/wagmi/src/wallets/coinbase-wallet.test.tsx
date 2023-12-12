import { describe, it, expect, vi } from 'vitest';
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

  it('not installed', async () => {
    const wallet = CoinbaseWallet.create();
    const install = await wallet.hasBrowserExtensionInstalled?.();
    expect(install).toBe(false);
  });

  it('installed', async () => {
    const wallet = CoinbaseWallet.create();
    vi.stubGlobal('coinbaseWalletExtension', {});
    const install = await wallet.hasBrowserExtensionInstalled?.();
    expect(install).toBe(true);
  });
});
