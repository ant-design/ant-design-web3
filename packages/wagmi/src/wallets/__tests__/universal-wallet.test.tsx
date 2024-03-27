import { describe, expect, it } from 'vitest';
import { createConfig, http, type Connector } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

import { UniversalWallet } from '../universal-wallet';

describe('UniversalWallet', async () => {
  it('only has app', async () => {
    const factory = new UniversalWallet({
      name: 'TestWallet',
      remark: 'TestWallet remark',
      app: {
        link: 'https://app.download',
      },
    });
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
      ],
    });
    const wallet = factory.create(config.connectors);

    expect(factory.connectors).toEqual(['WalletConnect']);
    expect(wallet.name).toEqual('TestWallet');
    expect(wallet.remark).toEqual('TestWallet remark');
    expect(await wallet.hasWalletReady?.()).toBeTruthy();
    expect(wallet.getQrCode).toBeTruthy();
    expect(await wallet.hasExtensionInstalled?.()).toBeFalsy();
    expect((await wallet.getWagmiConnector?.())?.name).toEqual('WalletConnect');
  });

  it('getQrCode', async () => {
    const factory = new UniversalWallet({
      name: 'TestWallet',
      remark: 'TestWallet remark',
      app: {
        link: 'https://app.download',
      },
    });

    const wallet = factory.create([
      {
        name: 'WalletConnect',
        getProvider: async () => {
          return {
            on: (type: string, handler: any) => {
              if (type === 'display_uri') {
                setTimeout(() => {
                  handler('https://qr.com');
                }, 10);
              }
            },
          };
        },
      } as unknown as Connector,
    ]);
    expect(await wallet.getQrCode?.()).toEqual({
      uri: 'https://qr.com',
    });
  });

  it('get qr code in second times', async () => {
    let eventFired = false;

    const factory = new UniversalWallet({
      name: 'TestWallet',
      remark: 'TestWallet remark',
      app: {
        link: 'https://app.download',
      },
    });

    const wallet = factory.create([
      {
        name: 'WalletConnect',
        getProvider: async () => {
          return {
            on: (type: string, handler: any) => {
              if (eventFired) {
                return;
              }
              eventFired = true;
              if (type === 'display_uri') {
                setTimeout(() => {
                  handler('https://web3.ant.design');
                }, 10);
              }
            },
          };
        },
      } as unknown as Connector,
    ]);

    const qrCode = await wallet.getQrCode?.();
    expect(qrCode?.uri).toBe('https://web3.ant.design');
    const qrCode2 = await wallet.getQrCode?.();
    expect(qrCode2?.uri).toBe('https://web3.ant.design');
  });

  it('only has extension, without install', async () => {
    const factory = new UniversalWallet({
      name: 'TestWallet',
      remark: 'TestWallet remark',
      extensions: [
        {
          key: 'Chrome',
          browserIcon: 'https://extension.icon',
          browserName: 'Chrome',
          description: 'Chrome extension',
          link: 'https://extension.download',
        },
      ],
    });
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target() {
            return {
              id: 'testWallet',
              name: 'TestWallet',
              provider: (window as any).testWallet?.ethereum,
            };
          },
        }),
      ],
    });
    const wallet = factory.create(config.connectors);

    expect(factory.connectors).toEqual(['TestWallet']);
    expect(wallet.name).toEqual('TestWallet');
    expect(wallet.remark).toEqual('TestWallet remark');
    expect(await wallet.hasWalletReady?.()).toBeFalsy();
    expect(wallet.getQrCode).toBeFalsy();
    expect(await wallet.hasExtensionInstalled?.()).toBeFalsy();
    expect(await wallet.getWagmiConnector?.()).toBeUndefined();
  });

  it('only has extension, installed', async () => {
    const factory = new UniversalWallet({
      name: 'TestWalletInjectedConnector',
      remark: 'TestWalletInjectedConnector remark',
      extensions: [
        {
          key: 'Chrome',
          browserIcon: 'https://extension.icon',
          browserName: 'Chrome',
          description: 'Chrome extension',
          link: 'https://extension.download',
        },
      ],
    });
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target() {
            return {
              id: 'testWallet',
              name: 'TestWalletInjectedConnector',
              provider: {
                request: () => {},
                on: () => {},
              } as any,
            };
          },
        }),
      ],
    });
    const wallet = factory.create(config.connectors);

    expect(factory.connectors).toEqual(['TestWalletInjectedConnector']);
    expect(wallet.name).toEqual('TestWalletInjectedConnector');
    expect(wallet.remark).toEqual('TestWalletInjectedConnector remark');
    expect(await wallet.hasWalletReady?.()).toBeTruthy();
    expect(wallet.getQrCode).toBeFalsy();
    expect(await wallet.hasExtensionInstalled?.()).toBeTruthy();
    expect((await wallet.getWagmiConnector?.())?.name).toEqual('TestWalletInjectedConnector');
  });

  it('both has extension and app, installed', async () => {
    const factory = new UniversalWallet({
      name: 'TestWalletInjectedConnector',
      remark: 'TestWalletInjectedConnector remark',
      app: {
        link: 'https://app.download',
      },
      extensions: [
        {
          key: 'Chrome',
          browserIcon: 'https://extension.icon',
          browserName: 'Chrome',
          description: 'Chrome extension',
          link: 'https://extension.download',
        },
      ],
    });
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target() {
            return {
              id: 'testWallet',
              name: 'TestWalletInjectedConnector',
              provider: {
                request: () => {},
                on: () => {},
              } as any,
            };
          },
        }),
        walletConnect({
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID',
        }),
      ],
    });
    const wallet = factory.create(config.connectors);

    expect(factory.connectors).toEqual(['TestWalletInjectedConnector', 'WalletConnect']);
    expect(wallet.name).toEqual('TestWalletInjectedConnector');
    expect(wallet.remark).toEqual('TestWalletInjectedConnector remark');
    expect(await wallet.hasWalletReady?.()).toBeTruthy();
    expect(wallet.getQrCode).toBeTruthy();
    expect(await wallet.hasExtensionInstalled?.()).toBeTruthy();
    expect((await wallet.getWagmiConnector?.())?.name).toEqual('TestWalletInjectedConnector');
    expect(
      (
        await wallet.getWagmiConnector?.({
          connectType: 'extension',
        })
      )?.name,
    ).toEqual('TestWalletInjectedConnector');
    expect(
      (
        await wallet.getWagmiConnector?.({
          connectType: 'qrCode',
        })
      )?.name,
    ).toEqual('WalletConnect');
    expect((await wallet.getWagmiConnector?.({}))?.name).toEqual('TestWalletInjectedConnector');
  });

  it('both has extension and app, without install', async () => {
    const factory = new UniversalWallet({
      name: 'TestWalletInjectedConnector',
      remark: 'TestWalletInjectedConnector remark',
      app: {
        link: 'https://app.download',
      },
      extensions: [
        {
          key: 'Chrome',
          browserIcon: 'https://extension.icon',
          browserName: 'Chrome',
          description: 'Chrome extension',
          link: 'https://extension.download',
        },
      ],
    });
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target() {
            return {
              id: 'testWallet',
              name: 'TestWalletInjectedConnector',
              provider: undefined as any,
            };
          },
        }),
        walletConnect({
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID',
        }),
      ],
    });
    const wallet = factory.create(config.connectors);

    expect(factory.connectors).toEqual(['TestWalletInjectedConnector', 'WalletConnect']);
    expect(wallet.name).toEqual('TestWalletInjectedConnector');
    expect(wallet.remark).toEqual('TestWalletInjectedConnector remark');
    expect(await wallet.hasWalletReady?.()).toBeTruthy();
    expect(wallet.getQrCode).toBeTruthy();
    expect(await wallet.hasExtensionInstalled?.()).toBeFalsy();
    expect((await wallet.getWagmiConnector?.())?.name).toEqual('WalletConnect');
  });
});
