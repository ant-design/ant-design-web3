import { TokenPocket } from '@ant-design/web3-wagmi';
import { describe, expect, it } from 'vitest';
import { s } from 'vitest/dist/reporters-O4LBziQ_';
import { Connector } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

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
    const wallet = factory.create([
      new WalletConnectConnector({
        options: {
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        },
      }),
    ]);

    expect(factory.name).toEqual(['WalletConnect']);
    expect(wallet.name).toEqual('TestWallet');
    expect(wallet.remark).toEqual('TestWallet remark');
    expect(await wallet.hasWalletReady?.()).toBeTruthy();
    expect(wallet.getQrCode).toBeTruthy();
    expect(await wallet.hasExtensionInstalled?.()).toBeFalsy();
    expect(wallet.getWagmiConnector?.()?.name).toEqual('WalletConnect');
  });

  it('without getQrCode', async () => {
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
      } as Connector,
    ]);
    expect(wallet.getQrCode).toBeUndefined();
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
        options: {
          showQrModal: false,
        },
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
      } as Connector,
    ]);
    expect(await wallet.getQrCode?.()).toEqual({
      uri: 'https://qr.com',
    });
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
    const wallet = factory.create([
      new InjectedConnector({
        options: {
          name: 'TestWallet',
          getProvider: () => (window as any).testWallet?.ethereum,
        },
      }),
    ]);

    expect(factory.name).toEqual(['TestWallet']);
    expect(wallet.name).toEqual('TestWallet');
    expect(wallet.remark).toEqual('TestWallet remark');
    expect(await wallet.hasWalletReady?.()).toBeFalsy();
    expect(wallet.getQrCode).toBeFalsy();
    expect(await wallet.hasExtensionInstalled?.()).toBeFalsy();
    expect(wallet.getWagmiConnector?.()).toBeUndefined();
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
    const wallet = factory.create([
      new InjectedConnector({
        options: {
          name: 'TestWalletInjectedConnector',
          getProvider: () => {
            return {
              request: () => {},
            } as any;
          },
        },
      }),
    ]);

    expect(factory.name).toEqual(['TestWalletInjectedConnector']);
    expect(wallet.name).toEqual('TestWalletInjectedConnector');
    expect(wallet.remark).toEqual('TestWalletInjectedConnector remark');
    expect(await wallet.hasWalletReady?.()).toBeTruthy();
    expect(wallet.getQrCode).toBeFalsy();
    expect(await wallet.hasExtensionInstalled?.()).toBeTruthy();
    expect(wallet.getWagmiConnector?.()?.name).toEqual('TestWalletInjectedConnector');
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
    const wallet = factory.create([
      new InjectedConnector({
        options: {
          name: 'TestWalletInjectedConnector',
          getProvider: () => {
            return {
              request: () => {},
            } as any;
          },
        },
      }),
      new WalletConnectConnector({
        options: {
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        },
      }),
    ]);

    expect(factory.name).toEqual(['TestWalletInjectedConnector', 'WalletConnect']);
    expect(wallet.name).toEqual('TestWalletInjectedConnector');
    expect(wallet.remark).toEqual('TestWalletInjectedConnector remark');
    expect(await wallet.hasWalletReady?.()).toBeTruthy();
    expect(wallet.getQrCode).toBeTruthy();
    expect(await wallet.hasExtensionInstalled?.()).toBeTruthy();
    expect(wallet.getWagmiConnector?.()?.name).toEqual('TestWalletInjectedConnector');
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
    const wallet = factory.create([
      new InjectedConnector({
        options: {
          name: 'TestWalletInjectedConnector',
          getProvider: () => {
            return undefined;
          },
        },
      }),
      new WalletConnectConnector({
        options: {
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        },
      }),
    ]);

    expect(factory.name).toEqual(['TestWalletInjectedConnector', 'WalletConnect']);
    expect(wallet.name).toEqual('TestWalletInjectedConnector');
    expect(wallet.remark).toEqual('TestWalletInjectedConnector remark');
    expect(await wallet.hasWalletReady?.()).toBeTruthy();
    expect(wallet.getQrCode).toBeTruthy();
    expect(await wallet.hasExtensionInstalled?.()).toBeFalsy();
    expect(wallet.getWagmiConnector?.()?.name).toEqual('WalletConnect');
  });
});
