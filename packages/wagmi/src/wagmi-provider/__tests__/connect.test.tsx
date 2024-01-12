import EventEmitter from 'events';
import React, { useEffect } from 'react';
import { useProvider } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Connector } from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

const mockConnector = {
  name: 'MetaMask',
} as Connector;

const event = new EventEmitter();

const connectAsync = vi.fn();
const disconnectAsync = vi.fn();

vi.mock('wagmi', () => {
  return {
    useConfig: () => {
      return {};
    },
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
        connectAsync: () => {
          connectAsync();
          event.emit('connectChanged', true);
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
    useSwitchChain: () => {
      return {
        switchChain: () => {},
      };
    },
    useBalance: () => {
      return {};
    },
  };
});

describe('WagmiWeb3ConfigProvider connect', () => {
  it('connect', async () => {
    const CustomConnector = () => {
      const { connect, account, disconnect } = useProvider();
      return (
        <div>
          <div
            className="custom-text"
            onClick={() => {
              if (account) {
                disconnect?.();
                return;
              }
              connect?.(MetaMask().create([mockConnector]));
            }}
          >
            {account ? account?.address : 'Connect'}
          </div>
        </div>
      );
    };

    const App = () => (
      <AntDesignWeb3ConfigProvider
        availableChains={[mainnet]}
        availableConnectors={[mockConnector]}
        walletFactorys={[MetaMask()]}
        chainAssets={[Mainnet]}
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
          <div
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
          </div>
        </div>
      );
    };

    const App = () => (
      <AntDesignWeb3ConfigProvider
        availableChains={[mainnet]}
        availableConnectors={[mockConnector]}
        walletFactorys={[MetaMask()]}
        chainAssets={[Mainnet]}
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
