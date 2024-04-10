import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { mainnet } from 'wagmi/chains';

import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

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
      return {
        chain: mainnet,
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
        switchChain: () => {},
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

describe('WagmiWeb3ConfigProvider balance', () => {
  it('show balance', () => {
    const App = () => (
      <AntDesignWeb3ConfigProvider
        availableConnectors={[]}
        balance
        availableChains={[mainnet]}
        walletFactorys={[MetaMask()]}
        chainAssets={[Mainnet]}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
      ' 1.23 WETH',
    );
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-filled')).toBeTruthy();
  });

  it('show address', () => {
    const App = () => (
      <AntDesignWeb3ConfigProvider
        availableConnectors={[]}
        availableChains={[mainnet]}
        walletFactorys={[MetaMask()]}
        chainAssets={[Mainnet]}
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
  });
});
