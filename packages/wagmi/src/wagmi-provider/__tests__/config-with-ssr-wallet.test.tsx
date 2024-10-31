import { useProvider } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type * as Wagmi from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

// Mock necessary modules
vi.mock('wagmi', async (importOriginal) => {
  const actual = await importOriginal<typeof Wagmi>();
  return {
    ...actual,
    useConfig: () => ({ ssr: true }),
    useAccount: () => ({ isDisconnected: true }),
    useConnect: () => ({ connectAsync: vi.fn() }),
    useSwitchChain: () => ({ switchChain: vi.fn() }),
    useBalance: () => ({ data: {} }),
    useEnsName: () => ({ data: null }),
    useEnsAvatar: () => ({ data: null }),
  };
});

describe('WagmiWeb3ConfigProvider with SSR', () => {
  it('should render correctly in SSR environment', async () => {
    const { createConfig, http } = await import('wagmi');

    const mockConfig = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        injected({
          target: 'metaMask',
        }),
      ],
      ssr: true,
    });

    const CustomConnector: React.FC = () => {
      const { availableWallets, availableChains } = useProvider();
      return (
        <div>
          <div data-testid="wallets">{availableWallets?.length}</div>
          <div data-testid="chains">{availableChains?.length}</div>
          <div data-testid="firstWalletName">{availableWallets![0]?.name}</div>
          <div data-testid="firstChainId">{availableChains![0]?.id}</div>
        </div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider config={mockConfig} chains={[Mainnet]} wallets={[MetaMask()]}>
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { getByTestId } = render(<App />);

    // Check if the provider renders without errors
    expect(getByTestId('wallets')).toBeDefined();
    expect(getByTestId('chains')).toBeDefined();

    // Verify that wallets and chains are available
    expect(getByTestId('wallets').textContent).toBe('1');
    expect(getByTestId('chains').textContent).toBe('1');

    // Verify that the first wallet is MetaMask
    expect(getByTestId('firstWalletName').textContent).toBe('MetaMask');

    // Verify that the first chain is Ethereum Mainnet (chainId: 1)
    expect(getByTestId('firstChainId').textContent).toBe('1');
  });
});
