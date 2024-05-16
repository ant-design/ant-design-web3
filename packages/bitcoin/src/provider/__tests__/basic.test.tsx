import { ConnectButton, Connector, useConnection } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { Button } from 'antd';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getBalanceByMempool } from '../../helpers';
import { XverseWallet } from '../../wallets';
import { BitcoinWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

// mock fetch
global.fetch = vi.fn();
function createFetchResponse(data: any) {
  return Promise.resolve({ ok: true, json: () => new Promise((resolve) => resolve(data)) });
}

vi.mock('sats-connect', async () => {
  const originModules = await vi.importActual('sats-connect');
  return {
    ...originModules,
    request: (method: string) => {
      if (method === 'getAccounts') {
        return Promise.resolve({
          status: 'success',
          result: [
            {
              address: '123',
            },
            {
              address: '456',
            },
          ],
        });
      }
      return;
    },
    getProviderById: () => ({}),
  };
});

describe('BitcoinWeb3ConfigProvider', () => {
  beforeEach(() => {
    // @ts-ignore: vi.fn().mockReset
    global.fetch.mockReset();
  });

  it('mount correctly', () => {
    const App = () => (
      <BitcoinWeb3ConfigProvider>
        <div className="content">test</div>
      </BitcoinWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');
  });

  it("can't get balance", async () => {
    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue(() => Promise.resolve({ ok: false }));
    try {
      await getBalanceByMempool('bc1p');
    } catch (e: any) {
      console.log(e.message);
    }
  });

  it('connect and disconnect', async () => {
    const addressResponse = {
      chain_stats: {
        funded_txo_sum: 1000,
        spent_txo_sum: 100,
      },
    };

    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue(createFetchResponse(addressResponse));

    const Disconnect = () => {
      const { disconnect } = useConnection();
      return (
        <Button className="disconnect" onClick={() => disconnect?.()}>
          disconnect
        </Button>
      );
    };

    const App = () => {
      return (
        <BitcoinWeb3ConfigProvider wallets={[XverseWallet()]} balance>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
          <Disconnect />
        </BitcoinWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    const modalBtn = selector('.connect')!;
    fireEvent.click(modalBtn);
    // select wallet
    const connectBtn = selector('.ant-list-item')!;
    expect(connectBtn.textContent).not.toBeNull();
    fireEvent.click(connectBtn);
    // disconnect
    const disconnectBtn = selector('.disconnect')!;
    fireEvent.click(disconnectBtn);
  });
});
