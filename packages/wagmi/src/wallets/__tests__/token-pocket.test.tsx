import { TokenPocket } from '@ant-design/web3-wagmi';
import { mainnet } from 'viem/chains';
import { describe, expect, it } from 'vitest';
import { createConfig, http } from 'wagmi';
import { injected, walletConnect } from 'wagmi/connectors';

describe('TokenPocket', () => {
  const config = createConfig({
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(),
    },
    connectors: [
      walletConnect({
        showQrModal: false,
        projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
      }),
      injected({
        target() {
          return {
            id: 'testWallet',
            name: 'TokenPocket',
            provider: undefined as any,
          };
        },
      }),
    ],
  });

  const wallet = TokenPocket().create(config.connectors);

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

  it('custom metadata', () => {
    const customWallet = TokenPocket({
      group: 'TestGroup',
    }).create(config.connectors);
    expect(customWallet.group).toBe('TestGroup');
  });
});
