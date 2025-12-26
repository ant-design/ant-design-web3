import React from 'react';
import { ConnectButton, Connector, useProvider } from '@ant-design/web3';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { TonConnectorContext, TonWeb3ConfigProvider } from '../';
import { tonkeeper } from '../../wallets';

global.fetch = vi.fn();

const mockGetBalance = vi.fn().mockResolvedValue(1000000000000n);

vi.mock('../TonConnectSdk', async () => {
  const originModules = await vi.importActual('../TonConnectSdk');
  const wallet = {
    name: 'Tonkeeper',
    appName: 'tonkeeper',
    imageUrl: 'https://tonkeeper.com/assets/tonconnect-icon.png',
    aboutUrl: 'https://tonkeeper.com',
    tondns: 'tonkeeper.ton',
    platforms: ['ios', 'android', 'chrome', 'firefox', 'macos'],
    bridgeUrl: 'https://bridge.tonapi.io/bridge',
    universalLink: 'https://app.tonkeeper.com/ton-connect',
    deepLink: 'tonkeeper-tc://',
    jsBridgeKey: 'tonkeeper',
    injected: true,
    embedded: false,
  };

  return {
    ...originModules,
    default: class {
      account = {};
      cb = (s: any) => {
        console.log('mock class');
      };
      constructor() {
        this.cb = () => {};
      }

      getWallets = async () =>
        Promise.resolve(
          Promise.resolve([
            wallet,
            {
              appName: 'safepalwallet',
              imageUrl: 'https://s.pvcliping.com/web/public_image/SafePal_x288.png',
            },
          ]),
        );

      restoreConnection = () => {};

      getBalance = mockGetBalance;

      connect = () => {
        this.account = {
          address: '0:966f959b9c002a7ccae6b0103cb99feb7f1fbff2c0cc072a2a942e07b1b9c6fd',
        };

        this.cb({ account: this.account });
      };
      onStatusChange = (s: any) => {
        this.cb = s;
      };

      disconnect = () => {
        this.account = {};
        this.cb(null);
      };
    },
  };
});

describe('TonWeb3ConfigProvider', () => {
  beforeEach(() => {
    // @ts-ignore: vi.fn().mockReset
    global.fetch.mockReset();
  });

  afterAll(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  it('mount correctly', () => {
    const App = () => (
      <TonWeb3ConfigProvider wallets={[tonkeeper]}>
        <div className="content">test</div>
      </TonWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });

  it('show balance', async () => {
    const App = () => {
      return (
        <TonWeb3ConfigProvider wallets={[tonkeeper]} balance reconnect={false}>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
        </TonWeb3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    const modalBtn = baseElement.querySelector('.connect') as HTMLButtonElement;
    fireEvent.click(modalBtn);
    await waitFor(() => {
      const connectBtn = baseElement.querySelector('.ant-list-item')!;
      expect(connectBtn).toBeTruthy();
      fireEvent.click(connectBtn);
    });
    await waitFor(() => {
      expect(modalBtn.textContent).include('1000 TON');
    });
  });

  it('show address', async () => {
    const Address = () => {
      const provider = React.useContext(TonConnectorContext ?? {});
      return <div className="address">{provider?.tonSelectWallet?.account?.address}</div>;
    };

    const App = () => {
      return (
        <TonWeb3ConfigProvider wallets={[tonkeeper]} reconnect={false}>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
          <Address />
        </TonWeb3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    const modalBtn = baseElement.querySelector('.connect') as HTMLButtonElement;
    fireEvent.click(modalBtn);
    await vi.waitFor(() => {
      const connectBtn = baseElement.querySelector('.ant-list-item')!;
      fireEvent.click(connectBtn);
      expect(connectBtn).toBeTruthy();
    });

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.address')?.textContent).toBe(
        '0:966f959b9c002a7ccae6b0103cb99feb7f1fbff2c0cc072a2a942e07b1b9c6fd',
      );
    });
  });

  it('disconnect', async () => {
    const App = () => {
      return (
        <TonWeb3ConfigProvider wallets={[tonkeeper]} balance>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
        </TonWeb3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    const modalBtn = baseElement.querySelector('.connect') as HTMLButtonElement;
    fireEvent.click(modalBtn);
    await waitFor(() => {
      const connectBtn = baseElement.querySelector('.ant-list-item')!;
      expect(connectBtn).toBeTruthy();
      fireEvent.click(connectBtn);
    });

    await waitFor(() => {
      expect(baseElement.querySelector('.connect')?.textContent).include('1000 TON');
    });

    fireEvent.click(modalBtn);

    await waitFor(() => {
      const disconnect = screen.getByText('Disconnect');
      expect(disconnect).toBeTruthy();
      fireEvent.click(screen.getByText('Disconnect'));
    });
    expect(baseElement.querySelector('.connect')?.textContent).toBe('Connect Wallet');
  });

  it('show icon', async () => {
    const App = () => {
      return (
        <TonWeb3ConfigProvider wallets={[tonkeeper, { key: 'safepalwallet' }]} balance>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
        </TonWeb3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    const modalBtn = baseElement.querySelector('.connect') as HTMLButtonElement;
    fireEvent.click(modalBtn);
    await waitFor(() => {
      const icons = baseElement.querySelector('.ant-web3-icon-tonkeeper-colorful')!;
      expect(icons).toBeTruthy();
    });
    await waitFor(() => {
      const items = baseElement.querySelectorAll('.ant-list-item')!;
      expect(items.length).toBe(2);
      const item = baseElement.querySelector('.ant-web3-connect-modal-img')!;
      expect(item.getAttribute('src')).toBeTruthy();
    });
  });

  it('should ignore config when ignoreConfig is true', async () => {
    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <TonWeb3ConfigProvider wallets={[tonkeeper]}>
        <TonWeb3ConfigProvider ignoreConfig={true} wallets={[tonkeeper]}>
          <CustomConnector />
        </TonWeb3ConfigProvider>
      </TonWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    // Should use parent config, not the ignored one
    await waitFor(() => {
      expect(baseElement.querySelector('.wallets-name')?.textContent).toContain('Tonkeeper');
    });
  });

  it('should use active provider config when one is ignored', async () => {
    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <TonWeb3ConfigProvider ignoreConfig={true} wallets={[tonkeeper]}>
        <TonWeb3ConfigProvider wallets={[tonkeeper]}>
          <CustomConnector />
        </TonWeb3ConfigProvider>
      </TonWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    // Should use active provider config, not the ignored one
    await waitFor(() => {
      expect(baseElement.querySelector('.wallets-name')?.textContent).toContain('Tonkeeper');
    });
  });
});
