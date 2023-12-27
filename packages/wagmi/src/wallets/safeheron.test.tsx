import { describe, it, expect, vi } from 'vitest';
import { SafeheronWallet } from '@ant-design/web3-wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

describe('Safeheron', () => {
  it('The wallet name should be "Safeheron" as well as the connector name.', async () => {
    const wallet = SafeheronWallet.create();
    const connector = new InjectedConnector({
      options: {
        name: 'Safeheron',
      },
    });
    expect(wallet.name).toBe('Safeheron');
    expect(wallet.name).toBe(connector.name);
  });

  it('The return value of hasWalletReady should always be the same as the value of connector.ready', async () => {
    const connector = new InjectedConnector({
      options: {
        name: 'Safeheron',
      },
    });
    vi.spyOn(connector, 'ready', 'get').mockReturnValue(true);
    const wallet = SafeheronWallet.create(connector);
    await expect(wallet.hasWalletReady?.()).resolves.toBe(true);
    vi.spyOn(connector, 'ready', 'get').mockReturnValue(false);
    await expect(wallet.hasWalletReady?.()).resolves.toBe(false);
  });
});
