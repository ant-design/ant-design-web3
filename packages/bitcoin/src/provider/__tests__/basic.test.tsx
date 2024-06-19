import { ConnectButton, Connector, useConnection } from '@ant-design/web3';
import { metadata_Xverse } from '@ant-design/web3-assets';
import { fireEvent, waitFor } from '@testing-library/react';
import { Button } from 'antd';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getBalanceByMempool, getInscriptionsByAddress } from '../../helpers';
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

    global.localStorage = {
      setItem: vi.fn(),
      getItem: vi.fn(),
      removeItem: vi.fn(),
    } as any;
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

  it("can't get inscriptions", async () => {
    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue(() => Promise.resolve({ ok: false }));
    try {
      await getInscriptionsByAddress({ address: 'bc1p', limit: 10, offset: 0 });
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

  it('available `autoConnect`', async () => {
    const getItem = () => metadata_Xverse.name;
    global.localStorage = {
      setItem: vi.fn(),
      getItem: getItem,
      removeItem: vi.fn(),
    } as any;

    const App = () => {
      return (
        <BitcoinWeb3ConfigProvider wallets={[XverseWallet()]} autoConnect>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
        </BitcoinWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    const connectBtn = selector('.connect')!;

    await waitFor(() => {
      expect(connectBtn.textContent).toBe('123...123');
    });
  });

  it('get inscriptions', async () => {
    const inscriptionResponse = {
      results: [
        {
          id: '5002c2871b6258a1dfe6548e4e38cf4304dac81cf3731a76e27e86517d4d52e4i0',
          number: 70532078,
          address: 'bc1pz7wkcn4h3dgdrxfzrkuj73gp7wk6dume2falkn636uzptcpjcyusekzz6u',
          genesis_tx_id: '5002c2871b6258a1dfe6548e4e38cf4304dac81cf3731a76e27e86517d4d52e4',
          tx_id: '5002c2871b6258a1dfe6548e4e38cf4304dac81cf3731a76e27e86517d4d52e4',
          location: '5002c2871b6258a1dfe6548e4e38cf4304dac81cf3731a76e27e86517d4d52e4:0:0',
          output: '5002c2871b6258a1dfe6548e4e38cf4304dac81cf3731a76e27e86517d4d52e4:0',
          value: '546',
          offset: '0',
          content_type: 'image/png',
          content_length: 529,
          timestamp: 1714413742000,
        },
      ],
      total: 1,
    };

    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue(createFetchResponse(inscriptionResponse));

    try {
      await getInscriptionsByAddress({ address: 'bc1p', limit: 10, offset: 0 });
    } catch (e: any) {
      console.log(e.message);
    }

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
        <BitcoinWeb3ConfigProvider wallets={[XverseWallet()]}>
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
