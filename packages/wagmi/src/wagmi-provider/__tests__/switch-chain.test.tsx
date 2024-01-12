import EventEmitter from 'events';
import React, { useEffect } from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { Chain as WagmiChain } from 'wagmi/chains';
import { mainnet, polygon } from 'wagmi/chains';

import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

const event = new EventEmitter();

const mockConnector = {
  name: 'MetaMask',
};

vi.mock('wagmi', () => {
  return {
    useConfig: () => {
      return {};
    },
    // https://wagmi.sh/react/hooks/useAccount

    useAccount: () => {
      const [currentChain, setCurrentChain] = React.useState<WagmiChain | undefined>(mainnet);
      useEffect(() => {
        event.on('switchChain', (c) => {
          setCurrentChain(c);
        });
      }, [event]);
      return {
        chain: currentChain,
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
    useSwitchChain: () => {
      return {
        switchChain: ({ chainId }: any) => {
          if (chainId === Polygon.id) {
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

describe('switch chain when connect', () => {
  it('switch chain when connect', async () => {
    const App = () => (
      <AntDesignWeb3ConfigProvider
        availableConnectors={[]}
        availableChains={[mainnet, polygon]}
        walletFactorys={[MetaMask()]}
        chainAssets={[Mainnet, Polygon]}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
      '0x21CD...Fd3B',
    );
    expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')?.textContent).toBe(
      'Ethereum',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button-chain-select')!);
    expect(
      baseElement.querySelector('.ant-dropdown-menu-item .ant-web3-icon-polygon-circle-colorful'),
    ).not.toBeNull();
    expect(
      baseElement.querySelector('.ant-dropdown-menu-item .ant-web3-icon-ethereum-circle-colorful'),
    ).not.toBeNull();
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[1]);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')?.textContent).toBe(
        'Polygon',
      );
    });
  });
});
