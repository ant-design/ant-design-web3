import { ConnectButton, Connector, useConnection } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it, vi } from 'vitest';

import { XverseWallet } from '../../wallets';
import { BitcoinWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

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

vi.mock('@mempool/mempool.js', async () => {
  return {
    default: () => ({
      bitcoin: {
        addresses: {
          getAddress: () =>
            Promise.resolve({
              chain_stats: {
                funded_txo_sum: 1000,
                spent_txo_count: 100,
              },
            }),
        },
      },
    }),
  };
});

describe('BitcoinWeb3ConfigProvider', () => {
  it('connect and disconnect', async () => {
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
