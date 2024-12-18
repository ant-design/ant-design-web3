import { useProvider } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type * as Wagmi from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { wagmiBaseMock } from '../__mocks__/wagmiBaseMock';
import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

vi.mock('wagmi/actions', () => {
  return {
    getAccount: () => ({}),
    disconnect: () => {},
  };
});

vi.mock('wagmi', async (importOriginal) => {
  const actual = await importOriginal<typeof Wagmi>();
  return {
    ...actual,
    ...wagmiBaseMock,
    // https://wagmi.sh/react/hooks/useAccount
    useAccount: () => {
      return {
        chain: mainnet,
        isDisconnected: false,
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      };
    },
    useEnsName: ({ address }: { address: string }) => {
      if (address === '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B') {
        return { data: 'wanderingearth.eth' };
      }
      return {};
    },
    useEnsAvatar: () => ({
      data: 'test-avatar',
    }),
  };
});

describe('WagmiWeb3ConfigProvider ens', () => {
  it('connect', async () => {
    const CustomConnector = () => {
      const { account } = useProvider();
      return (
        <div>
          <div className="custom-text">
            {account ? account?.name || account?.address : 'Connect'}
          </div>
        </div>
      );
    };
    const { createConfig, http } = await import('wagmi');

    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [],
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        ens
        walletFactories={[MetaMask()]}
        chainAssets={[Mainnet]}
        wagimConfig={config}
      >
        <CustomConnector />
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);

    await waitFor(() => {
      expect(baseElement.querySelector('.custom-text')?.textContent).toBe('wanderingearth.eth');
    });
  });

  it('should display avatar', async () => {
    const CustomConnector = () => {
      const { account } = useProvider();
      return (
        <div>
          <div className="custom-text">{account ? account?.avatar : 'Connect'}</div>
        </div>
      );
    };

    const { createConfig, http } = await import('wagmi');

    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [],
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        ens
        walletFactories={[MetaMask()]}
        chainAssets={[Mainnet]}
        wagimConfig={config}
      >
        <CustomConnector />
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);

    await waitFor(() => {
      expect(baseElement.querySelector('.custom-text')?.textContent).toBe('test-avatar');
    });
  });
});
