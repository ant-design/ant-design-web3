import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

const mockConnector = {
  name: 'MetaMask',
};

vi.mock('@wagmi/core', () => ({
  getAccount: () => ({}),
  disconnect: () => {},
}));

vi.mock('wagmi', () => {
  return {
    useConfig: () => {
      return {};
    },
    // https://wagmi.sh/react/hooks/useAccount
    useAccount: () => {
      return {
        chain: undefined,
        address: undefined,
        connector: mockConnector,
      };
    },
    useConnect: () => {
      return {
        connectors: [mockConnector],
        connectAsync: () => {},
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
      return {};
    },
  };
});

describe('WagmiWeb3ConfigProvider unconnected', () => {
  it('when currentWagmiChain is undefined', async () => {
    const App = () => (
      <AntDesignWeb3ConfigProvider
        availableChains={[]}
        availableConnectors={[]}
        walletFactorys={[MetaMask()]}
        chainAssets={[Mainnet]}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button-text')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
        'Connect Wallet',
      );
      expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')).toBeNull();
    });
  });
});
