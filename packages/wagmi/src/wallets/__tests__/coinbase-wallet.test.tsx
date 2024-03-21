import { CoinbaseWallet } from '@ant-design/web3-wagmi';
import { describe, expect, it } from 'vitest';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

describe('CoinbaseWallet', async () => {
  it('name', async () => {
    try {
      const config = createConfig({
        chains: [mainnet],
        transports: {
          [mainnet.id]: http(),
        },
        connectors: [
          coinbaseWallet({
            appName: 'testname',
          }),
        ],
      });
      const wagmiWallet = config.connectors[0];
      const wallet = CoinbaseWallet().create();
      expect(wallet.name).toBe('Coinbase Wallet');
      expect(wallet.name).toBe(wagmiWallet.name);
    } catch (error) {}
  });

  it('always return true for hasWalletReady', async () => {
    const wallet = CoinbaseWallet().create();
    const install = await wallet.hasWalletReady?.();
    expect(install).toBe(true);
  });

  it('custom metadata', async () => {
    const wallet = CoinbaseWallet({
      group: 'TestGroup',
    }).create();
    expect(wallet.group).toBe('TestGroup');
  });
});
