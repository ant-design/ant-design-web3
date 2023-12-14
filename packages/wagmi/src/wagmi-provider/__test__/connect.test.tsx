import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { mainnet } from 'wagmi/chains';
import React, { useEffect } from 'react';
import { useProvider } from '@ant-design/web3';
import { AntDesignWeb3ConfigProvider } from '../config-provider';
import { Mainnet } from '@ant-design/web3-assets';
import { MetaMask } from '../../wallets';
import EventEmitter from 'events';

const mockConnector = {
  name: 'MetaMask',
};

const event = new EventEmitter();

const connectAsync = vi.fn();
const disconnectAsync = vi.fn();

vi.mock('wagmi', () => {
  return {
    // https://wagmi.sh/react/hooks/useAccount
    useAccount: () => {
      const [connected, setConnected] = React.useState(false);
      useEffect(() => {
        event.on('connectChanged', (c) => {
          setConnected(c);
        });
      }, []);
      return {
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
    useNetwork: () => {
      return {
        chain: mainnet,
      };
    },
    useSwitchNetwork: () => {
      return {
        switchNetwork: () => {},
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
              connect?.();
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
        availableConnectors={[]}
        assets={[Mainnet, MetaMask]}
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
});
