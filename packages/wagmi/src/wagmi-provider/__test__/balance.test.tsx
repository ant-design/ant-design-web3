import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { mainnet } from 'wagmi/chains';
import { Connector, ConnectButton } from '@ant-design/web3';
import { AntDesignWeb3ConfigProvider } from '../config-provider';
import { Mainnet } from '@ant-design/web3-assets';
import { MetaMask } from '../../wallets';

const mockConnector = {
  name: 'MetaMask',
};

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
      <AntDesignWeb3ConfigProvider balance availableChains={[mainnet]} assets={[Mainnet, MetaMask]}>
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
      <AntDesignWeb3ConfigProvider availableChains={[mainnet]} assets={[Mainnet, MetaMask]}>
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
