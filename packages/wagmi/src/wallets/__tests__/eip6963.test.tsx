import { describe, expect, it } from 'vitest';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

import { EIP6963Wallet } from '../eip6963';

describe('EIP6963', () => {
  it("The wallet's metadata should match the connector's metadata", async () => {
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target() {
            return {
              icon: 'mockIconData',
              id: 'com.mock.wallet',
              name: 'mockWallet',
              provider: undefined as any,
            };
          },
        }),
      ],
    });
    const wallet = EIP6963Wallet().create(config.connectors);
    const connector = config.connectors[0];
    expect(wallet.icon).toBe(connector.icon);
    expect(wallet.name).toBe(connector.name);
    expect(wallet.remark).toBe('Wallet mockWallet detected');
    expect(wallet.key).toBe(connector.id);
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
              icon: 'mockIconData',
              id: 'com.mock.wallet',
              name: 'mockWallet',
              provider: {
                request: () => {},
                on: () => {},
              } as any,
            };
          },
        }),
      ],
    });
    const wallet = EIP6963Wallet().create(config.connectors);
    await expect(wallet.hasWalletReady?.()).resolves.toBe(true);
    await expect(wallet.hasExtensionInstalled?.()).resolves.toBe(true);
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
              icon: 'mockIconData',
              id: 'com.mock.wallet',
              name: 'mockWallet',
              provider: undefined as any,
            };
          },
        }),
      ],
    });
    const wallet = EIP6963Wallet().create(config.connectors);
    await expect(wallet.hasWalletReady?.()).resolves.toBe(false);
    await expect(wallet.hasExtensionInstalled?.()).resolves.toBe(false);
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
              icon: 'mockIconData',
              id: 'com.mock.wallet',
              name: 'mockWallet',
              provider: undefined as any,
            };
          },
        }),
      ],
    });
    const wallet = EIP6963Wallet({
      group: 'TestGroup',
    }).create(config.connectors);
    expect(wallet.group).toBe('TestGroup');
  });
});
