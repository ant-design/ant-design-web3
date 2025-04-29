import { RainbowWallet } from '@ant-design/web3-wagmi';
import { describe, expect, it } from 'vitest';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

describe('RainbowWallet', () => {
  const config = createConfig({
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(),
    },
    connectors: [
      walletConnect({
        showQrModal: false,
        projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID',
      }),
      injected({
        target() {
          return {
            id: 'rainbowwallet',
            name: 'RainbowWallet',
            // @ts-ignore
            provider: window.rainbowwallet,
          };
        },
      }),
    ],
  });

  const wallet = RainbowWallet().create(config.connectors);

  it('name', async () => {
    expect(wallet.name).toBe('Rainbow Wallet');
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
    const customWallet = RainbowWallet({
      group: 'TestGroup',
    }).create(config.connectors);
    expect(customWallet.group).toBe('TestGroup');
  });

  it('createWagmiConnector', () => {
    const connectorFn = RainbowWallet().createWagmiConnector?.();
    expect(typeof connectorFn).toBe('function');
  });
});
