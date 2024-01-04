import { TokenPocket } from '@ant-design/web3-wagmi';
import { describe, expect, it } from 'vitest';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

describe('TokenPocket', () => {
  const wallet = TokenPocket.create([
    new WalletConnectConnector({
      options: {
        showQrModal: false,
        projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
      },
    }),
    new InjectedConnector({
      options: {
        name: 'TokenPocket',
        getProvider: () => (window as any).tokenpocket?.ethereum,
      },
    }),
  ]);

  it('name', async () => {
    expect(wallet.name).toBe('TokenPocket');
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
