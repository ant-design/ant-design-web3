import { NFTCard } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type * as Wagmi from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { wagmiBaseMock } from '../__mocks__/wagmiBaseMock';
import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

vi.mock('wagmi/actions', () => ({
  readContract: async () => {
    return 'http://nft-metadata.com';
  },
  getAccount: () => ({}),
  disconnect: () => {},
}));

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
  };
});

describe('WagmiWeb3ConfigProvider getMetadata', () => {
  it('NFT Metadata', async () => {
    vi.spyOn(window, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return {
            name: 'NFT name',
            description: 'NFT description',
            image: 'http://nft-metadata.com',
          };
        },
      } as any);
    });

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
        walletFactories={[MetaMask()]}
        chainAssets={[Mainnet]}
        wagimConfig={config}
      >
        <NFTCard tokenId={213} address="0x1234" />
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    await waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-nft-card-name')?.textContent).toBe('NFT name');
    });
  });
});
