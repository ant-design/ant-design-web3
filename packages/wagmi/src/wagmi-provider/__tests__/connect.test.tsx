import EventEmitter from 'node:events';
import React, { useEffect } from 'react';
import { useProvider } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { Connector, Config as WagmiConfig } from 'wagmi';
import type * as Wagmi from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { wagmiBaseMock } from '../__mocks__/wagmiBaseMock';
import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

const mockConnector = {
  name: 'MetaMask',
} as Connector;

const event = new EventEmitter();

const connectAsync = vi.fn();
const disconnectAsync = vi.fn();

vi.mock('wagmi/actions', () => ({
  getAccount: () => ({}),
  disconnect: () => {
    disconnectAsync();
    event.emit('connectChanged', false);
  },
}));

vi.mock('wagmi', async (importOriginal) => {
  const actual = await importOriginal<typeof Wagmi>();
  return {
    ...actual,
    ...wagmiBaseMock,
    // https://wagmi.sh/react/hooks/useAccount
    useAccount: () => {
      const [connected, setConnected] = React.useState(false);
      useEffect(() => {
        event.on('connectChanged', (c) => {
          setConnected(c);
        });
      }, []);
      return {
        chain: mainnet,
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        isDisconnected: !connected,
        connector: mockConnector,
      };
    },
    useConnect: () => {
      return {
        connectors: [mockConnector],
        connectAsync: async () => {
          connectAsync();
          event.emit('connectChanged', true);
          return {
            accounts: [
              '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
              '0x0212f0974d53a6e96eF05d7B324a9803735fFd3B',
            ],
          };
        },
      };
    },
    useDisconnect: () => {
      return {
        disconnectAsync: () => {
          disconnectAsync();
          event.emit('connectChanged', false);
        },
      };
    },
  };
});

describe('WagmiWeb3ConfigProvider connect', () => {
  it('connect', async () => {
    const onConnected = vi.fn();
    const CustomConnector = () => {
      const { connect, account, disconnect } = useProvider();
      return (
        <div>
          <button
            type="button"
            className="custom-text"
            onClick={async () => {
              if (account) {
                disconnect?.();
                return;
              }
              const res = await connect?.(MetaMask().create([mockConnector]));
              onConnected(res);
            }}
          >
            {account ? account?.address : 'Connect'}
          </button>
        </div>
      );
    };

    const { createConfig, http } = await import('wagmi');

    const mockWagmiConfig: WagmiConfig = {
      ...createConfig({
        chains: [mainnet],
        transports: {
          [mainnet.id]: http(),
        },
      }),
      connectors: [mockConnector],
    };

    const App = () => (
      <AntDesignWeb3ConfigProvider
        walletFactories={[MetaMask()]}
        chainAssets={[Mainnet]}
        wagimConfig={mockWagmiConfig}
      >
        <CustomConnector />
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.custom-text')?.textContent).toBe('Connect');
    fireEvent.click(baseElement.querySelector('.custom-text')!);
    await vi.waitFor(() => {
      expect(connectAsync).toBeCalled();

      expect(baseElement.querySelector('.custom-text')?.textContent).toBe(
        '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      );
    });

    expect(onConnected).toBeCalledWith({
      addresses: [
        '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        '0x0212f0974d53a6e96eF05d7B324a9803735fFd3B',
      ],
      address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    });

    fireEvent.click(baseElement.querySelector('.custom-text')!);
    await vi.waitFor(() => {
      expect(disconnectAsync).toBeCalled();
    });
  });

  it('connect not available connector', async () => {
    const CustomConnector = () => {
      const { connect, account, disconnect } = useProvider();
      const [error, setError] = React.useState<Error | undefined>();
      return (
        <div>
          <button
            type="button"
            className="custom-text"
            onClick={async () => {
              if (account) {
                disconnect?.();
                return;
              }
              try {
                await connect?.({
                  name: 'test',
                } as any);
              } catch (e) {
                setError(e as Error);
              }
            }}
          >
            {error ? error.message : account?.name}
          </button>
        </div>
      );
    };

    const { createConfig, http } = await import('wagmi');

    const mockWagmiConfig: WagmiConfig = {
      ...createConfig({
        chains: [mainnet],
        transports: {
          [mainnet.id]: http(),
        },
      }),
      connectors: [mockConnector],
    };

    const App = () => (
      <AntDesignWeb3ConfigProvider
        walletFactories={[MetaMask()]}
        chainAssets={[Mainnet]}
        wagimConfig={mockWagmiConfig}
      >
        <CustomConnector />
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    fireEvent.click(baseElement.querySelector('.custom-text')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.custom-text')?.textContent).toBe(
        'Can not find connector for test',
      );
    });
  });
});
