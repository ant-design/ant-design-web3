import EventEmitter from 'events';
import React, { useEffect } from 'react';
import { useProvider } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { Connector } from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { TokenPocket } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

const injectConnector = {
  name: 'TokenPocket',
  getProvider: async () => (window as any).tokenpocket?.ethereum,
} as Connector;

const walletConnetor = {
  name: 'WalletConnect',
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
        connector: injectConnector,
      };
    },
    useConnect: () => {
      return {
        connectors: [walletConnetor, injectConnector],
        connectAsync: (options: any) => {
          connectAsync(options);
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

describe('WagmiWeb3ConfigProvider connect with UniversalWallet', () => {
  it('connect with wallet connect', async () => {
    const CustomConnector = () => {
      const { connect, account, disconnect, availableWallets } = useProvider();
      return (
        <div>
          <div
            className="custom-text"
            onClick={() => {
              if (account) {
                disconnect?.();
                return;
              }
              connect?.(availableWallets?.[0]);
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
        availableConnectors={[injectConnector, walletConnetor]}
        walletFactorys={[TokenPocket()]}
        chainAssets={[Mainnet]}
      >
        <CustomConnector />
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.custom-text')?.textContent).toBe('Connect');
    fireEvent.click(baseElement.querySelector('.custom-text')!);
    await vi.waitFor(() => {
      expect(connectAsync).toBeCalledWith({
        chainId: 1,
        connector: walletConnetor,
      });

      expect(baseElement.querySelector('.custom-text')?.textContent).toBe(
        '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      );
    });

    fireEvent.click(baseElement.querySelector('.custom-text')!);
    await vi.waitFor(() => {
      expect(disconnectAsync).toBeCalled();
    });
  });

  it('connect with inject connector', async () => {
    vi.stubGlobal('tokenpocket', {
      ethereum: {
        request: () => {},
      },
    });
    const CustomConnector = () => {
      const { connect, account, disconnect, availableWallets } = useProvider();
      return (
        <div>
          <div
            className="custom-text"
            onClick={() => {
              if (account) {
                disconnect?.();
                return;
              }
              connect?.(availableWallets?.[0]);
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
        availableConnectors={[injectConnector, walletConnetor]}
        walletFactorys={[TokenPocket()]}
        chainAssets={[Mainnet]}
      >
        <CustomConnector />
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.custom-text')?.textContent).toBe('Connect');
    fireEvent.click(baseElement.querySelector('.custom-text')!);
    await vi.waitFor(() => {
      expect(connectAsync).toBeCalledWith({
        chainId: 1,
        connector: injectConnector,
      });

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
