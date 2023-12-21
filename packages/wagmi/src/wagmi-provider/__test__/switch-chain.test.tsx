import { describe, it, expect, vi } from 'vitest';
import React, { useEffect } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Chain as WagmiChain, mainnet, polygon } from 'wagmi/chains';
import { Connector, ConnectButton, type Chain } from '@ant-design/web3';
import { AntDesignWeb3ConfigProvider } from '../config-provider';
import { Mainnet, Polygon } from '@ant-design/web3-assets';
import EventEmitter from 'events';
import { MetaMask } from '../../wallets';

const event = new EventEmitter();

const mockConnector = {
  name: 'MetaMask',
};

describe('switch chain', () => {
  it('switch chain when not conncted', () => {
    vi.mock('wagmi', () => {
      return {
        // https://wagmi.sh/react/hooks/useAccount
        useAccount: () => {
          return {
            address: undefined,
            connector: mockConnector,
          };
        },
        useConnect: () => {
          return {
            connectors: [mockConnector],
          };
        },
        useDisconnect: () => {
          return {
            disconnectAsync: () => {},
          };
        },
        useNetwork: () => {
          return {
            chain: undefined,
          };
        },
        useSwitchNetwork: () => {
          return {
            switchNetwork: () => {},
          };
        },
        useBalance: () => {
          return {
            data: {
              value: 1230000000000000000,
              symbol: 'WETH',
              decimals: 18,
            },
          };
        },
      };
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        availableConnectors={[]}
        availableChains={[mainnet, polygon]}
        assets={[Mainnet, Polygon, MetaMask]}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')?.textContent).toBe(
      'Ethereum',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button-chain-select')!);
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[1]);
    expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')?.textContent).toBe(
      'Polygon',
    );
  });

  it('switch chain when connect', async () => {
    vi.mock('wagmi', () => {
      return {
        // https://wagmi.sh/react/hooks/useAccount
        useAccount: () => {
          return {
            address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
            connector: mockConnector,
          };
        },
        useConnect: () => {
          return {
            connectors: [mockConnector],
          };
        },
        useDisconnect: () => {
          return {
            disconnectAsync: () => {},
          };
        },
        useNetwork: () => {
          const [currentChain, setCurrentChain] = React.useState<WagmiChain | undefined>(mainnet);
          useEffect(() => {
            event.on('switchChain', (c) => {
              setCurrentChain(c);
            });
          }, [event]);
          return {
            chain: currentChain,
          };
        },
        useSwitchNetwork: () => {
          return {
            switchNetwork: (c: number) => {
              if (c === Polygon.id) {
                event.emit('switchChain', polygon);
              }
            },
          };
        },
        useBalance: () => {
          return {
            data: {
              value: 1230000000000000000,
              symbol: 'WETH',
              decimals: 18,
            },
          };
        },
      };
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        availableConnectors={[]}
        availableChains={[mainnet, polygon]}
        assets={[Mainnet, Polygon, MetaMask]}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')?.textContent).toBe(
      'Ethereum',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button-chain-select')!);
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[1]);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')?.textContent).toBe(
        'Polygon',
      );
    });
  });
});
