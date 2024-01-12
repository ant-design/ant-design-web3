import { SafeheronWallet } from '@ant-design/web3-wagmi';
import { describe, expect, it, vi } from 'vitest';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

describe('Safeheron', () => {
  it('The wallet name should be "Safeheron" as well as the connector name.', async () => {
    const wallet = SafeheronWallet().create();
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target() {
            return {
              name: 'Safeheron',
              id: 'safeheron',
              provider: {
                request: () => {},
                on: () => {},
              } as any,
            };
          },
        }),
      ],
    });
    const connector = config.connectors[0];
    expect(wallet.name).toBe('Safeheron');
    expect(wallet.name).toBe(connector.name);
  });

  it('provider is ready', async () => {
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target() {
            return {
              name: 'Safeheron',
              id: 'safeheron',
              provider: {
                request: () => {},
                on: () => {},
              } as any,
            };
          },
        }),
      ],
    });
    const wallet = SafeheronWallet().create(config.connectors);
    await expect(wallet.hasWalletReady?.()).resolves.toBe(true);
  });

  it('provider not ready', async () => {
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target() {
            return {
              name: 'Safeheron',
              id: 'safeheron',
              provider: undefined as any,
            };
          },
        }),
      ],
    });
    const wallet = SafeheronWallet().create(config.connectors);
    await expect(wallet.hasWalletReady?.()).resolves.toBe(false);
  });

  it('custom metadata', () => {
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target() {
            return {
              name: 'Safeheron',
              id: 'safeheron',
              provider: undefined as any,
            };
          },
        }),
      ],
    });
    const wallet = SafeheronWallet({
      group: 'TestGroup',
    }).create(config.connectors);
    expect(wallet.group).toBe('TestGroup');
  });
});
