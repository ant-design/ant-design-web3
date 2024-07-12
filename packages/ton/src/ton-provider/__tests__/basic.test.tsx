import React, { useState, type FC, type PropsWithChildren } from 'react';
import {
  ConnectButton,
  Connector,
  useProvider,
  type ConnectorTriggerProps,
} from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { tonkeeper } from '../../wallets';
import TonConnectSdk from '../TonConnectSdk';
import { TonConnectorContext, TonWeb3ConfigProvider } from '../TonWeb3ConfigProvider';

global.fetch = vi.fn();

function createFetchResponse(data: any) {
  return Promise.resolve({ ok: true, json: () => new Promise((resolve) => resolve(data)) });
}

describe('TonWeb3ConfigProvider', () => {
  beforeEach(() => {
    // @ts-ignore: vi.fn().mockReset
    global.fetch.mockReset();

    vi.spyOn(TonConnect.prototype, 'getWallets').mockImplementation(() =>
      Promise.resolve([
        {
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
        },
      ]),
    );
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

  it('connect wallet', () => {
    const App = () => (
      <TonWeb3ConfigProvider wallets={[tonkeeper]} balance>
        <Connector>
          <ConnectButton className="connect" />
        </Connector>
      </TonWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    const connectBtn = baseElement.querySelector('.connect') as HTMLButtonElement;
    fireEvent.click(connectBtn);
    expect(connectBtn.textContent).not.toBeNull();
  });

  it('switch network', () => {
    const SwitchBtn: React.FC = () => {
      const provider = React.useContext(TonConnectorContext ?? {});
      const switchNetwork = () => {
        if (provider?.tonConnectSdk) {
          provider.tonConnectSdk.network = CHAIN.TESTNET;
        }
      };
      return (
        <Button
          className="switch"
          onClick={switchNetwork}
        >{`${provider?.tonConnectSdk?.network}-${provider?.tonConnectSdk?.api}`}</Button>
      );
    };

    const App = () => {
      return (
        <TonWeb3ConfigProvider wallets={[tonkeeper]} balance>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
          <SwitchBtn />
        </TonWeb3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);
    const switchBtn = baseElement.querySelector('.switch') as HTMLButtonElement;
    expect(switchBtn.textContent).toBe('-239-https://toncenter.com/api/v3');
    fireEvent.click(switchBtn);
    waitFor(() => {
      expect(switchBtn.textContent).toBe('-3-https://testnet.toncenter.com/api/v3');
    });
  });

  it('get balance success', async () => {
    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue(createFetchResponse({ balance: '1000000000000' }));
    const connector = new TonConnectSdk({ chain: CHAIN.TESTNET });
    const balance = await connector.getBalance(
      `${connector.api}/account?address=0QCWb5WbnAAqfMrmsBA8uZ_rfx-_8sDMByoqlC4HsbnG_VEy`,
    );
    expect(balance).not.toBe('0');
  });

  it('get balance failed', async () => {
    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue(Promise.resolve({ ok: false }));
    const connector = new TonConnectSdk({ chain: CHAIN.TESTNET });
    const balance = await connector.getBalance(
      `${connector.api}/account?address=0QCWb5WbnAAqfMrmsBA8uZ_rfx-_8sDMByoqlC4HsbnG_VEy`,
    );
    expect(balance).toBe('0');
  });

  it('show balance', async () => {
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
  });

  // it('connect and disconnect', () => {
  //   const Disconnect = () => {
  //     const provider = React.useContext(TonConnectorContext ?? {});
  //     return (
  //       <Button className="disconnect" onClick={() => provider?.tonConnectSdk?.disconnect?.()}>disconnect</Button>
  //     );
  //   };

  //     const App = () => {
  //       return (
  //         <TonWeb3ConfigProvider wallets={[tonkeeper]} balance>
  //           <Connector>
  //             <ConnectButton className="connect" />
  //           </Connector>
  //           <Disconnect />
  //         </TonWeb3ConfigProvider>
  //       );
  //     };

  //     const { baseElement } = render(<App />);
  //     const modalBtn = baseElement.querySelector('.connect') as HTMLButtonElement;
  //     fireEvent.click(modalBtn);
  //     waitFor(() => {
  //       const connectBtn = baseElement.querySelector('.ant-list-item')!;
  //       expect(connectBtn).not.toBeNull();
  //       fireEvent.click(connectBtn);
  //     })
  //     expect(modalBtn.textContent).toBe('123...123');
  //     const disconnectBtn = baseElement.querySelector('.disconnect')!;
  //     fireEvent.click(disconnectBtn);
  //   })
});
