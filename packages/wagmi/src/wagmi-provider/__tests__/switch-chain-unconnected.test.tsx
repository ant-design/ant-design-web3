import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type * as Wagmi from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';

import { wagmiBaseMock } from '../__mocks__/wagmiBaseMock';
import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

const mockConnector = {
  name: 'MetaMask',
};

vi.mock('wagmi/actions', () => ({
  getAccount: () => ({}),
  disconnect: () => {},
}));

vi.mock('wagmi', async (importOriginal) => {
  const actual = await importOriginal<typeof Wagmi>();
  return {
    ...actual,
    ...wagmiBaseMock,
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

describe('switch chain when not connected', () => {
  it('switch chain when not connected', async () => {
    const { createConfig, http } = await import('wagmi');

    const config = createConfig({
      chains: [mainnet, polygon],
      transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
      },
      connectors: [],
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        walletFactories={[MetaMask()]}
        chainAssets={[Mainnet, Polygon]}
        wagimConfig={config}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
      'Connect Wallet',
    );
    expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')?.textContent).toBe(
      'Ethereum',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button-chain-select')!);
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[1]);
    expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')?.textContent).toBe(
      'Polygon',
    );
  });
});
