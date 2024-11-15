import { ConnectButton, Connector } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const mockConnectAsync = vi.fn();

describe('WagmiWeb3ConfigProvider with EIP6963 Wallet', () => {
  it('Should correctly show all wallets discovered via EIP6963', () => {
    const target1 = {
      icon: 'icon1',
      id: 'com.mock.wallet1',
      name: 'mockWallet1',
      provider: undefined as any,
    };

    const target2 = {
      icon: 'icon2',
      id: 'com.mock.wallet2',
      name: 'mockWallet2',
      provider: undefined as any,
    };

    const mockDiscoveredConnectorsViaEIP6963 = [
      injected({
        target: target1,
      }),
      injected({
        target: target2,
      }),
    ];

    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: mockDiscoveredConnectorsViaEIP6963,
    });

    const App = () => (
      <WagmiWeb3ConfigProvider
        eip6963={{
          autoAddInjectedWallets: true,
        }}
        config={config}
      >
        <Connector
          modalProps={{
            group: true,
          }}
        >
          <ConnectButton />
        </Connector>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    const btn = baseElement.querySelector('.ant-web3-connect-button');
    fireEvent.click(btn!);
    const walletItems = baseElement.querySelectorAll('.ant-web3-connect-modal-wallet-item');
    expect(walletItems.length).toBe(mockDiscoveredConnectorsViaEIP6963.length);
    expect(walletItems[0].querySelector('.ant-web3-connect-modal-name')?.textContent).toBe(
      target1.name,
    );
    expect(walletItems[1].querySelector('.ant-web3-connect-modal-name')?.textContent).toBe(
      target2.name,
    );
    expect(walletItems[0].querySelector('.ant-web3-connect-modal-img')?.getAttribute('src')).toBe(
      target1.icon,
    );
    expect(walletItems[1].querySelector('.ant-web3-connect-modal-img')?.getAttribute('src')).toBe(
      target2.icon,
    );
    const groupTitle = baseElement.querySelector('.ant-web3-connect-modal-group-title');
    expect(groupTitle?.textContent).toBe('More');
  });

  it('Should correctly connect the selected wallet', async () => {
    vi.mock('wagmi', async () => {
      const actual = await vi.importActual('wagmi');
      return {
        ...actual,
        useConnect: () => {
          return {
            connectAsync: async (...args: any[]) => {
              mockConnectAsync(...args);
              return {};
            },
          };
        },
      };
    });
    const target = {
      icon: 'icon1',
      id: 'com.mock.wallet1',
      name: 'mockWallet1',
      provider: {
        request: () => {},
        on: () => {},
      } as any,
    };

    const mockDiscoveredConnectorsViaEIP6963 = [
      injected({
        target,
      }),
    ];

    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: mockDiscoveredConnectorsViaEIP6963,
    });

    const App = () => (
      <WagmiWeb3ConfigProvider
        eip6963={{
          autoAddInjectedWallets: true,
        }}
        config={config}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    const btn = baseElement.querySelector('.ant-web3-connect-button');
    fireEvent.click(btn!);
    const walletItem = baseElement.querySelector('.ant-web3-connect-modal-wallet-item');
    fireEvent.click(walletItem!);
    await vi.waitFor(() => {
      expect(mockConnectAsync).toHaveBeenCalledWith({
        connector: config.connectors[0],
        chainId: config.chains[0].id,
      });
    });
  });
});
