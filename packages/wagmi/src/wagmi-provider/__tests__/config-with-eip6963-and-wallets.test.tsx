import { ConnectButton, Connector } from '@ant-design/web3';
import { ChromeCircleColorful } from '@ant-design/web3-icons';
import { MetaMask, UniversalWallet, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const mockConnectAsync = vi.fn();

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
    useEnsName: () => ({}),
    useEnsAvatar: () => ({}),
  };
});

describe('WagmiWeb3ConfigProvider with EIP6963 and custom wallets', () => {
  it('Should use user config wallet', async () => {
    const target1 = {
      icon: 'icon1',
      id: 'com.mock.wallet1',
      name: 'mockWallet1',
      provider: {
        request: () => {},
        on: () => {},
      } as any,
    };

    const target2 = {
      icon: 'icon2',
      id: 'com.mock.wallet2',
      name: 'mockWallet2',
      provider: {
        request: () => {},
        on: () => {},
      } as any,
    };

    const mockDiscoveredConnectorsViaEIP6963 = [
      injected({
        target: 'metaMask',
      }),
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
        wallets={[
          new UniversalWallet({
            extensions: [
              {
                key: 'Chrome',
                browserIcon: <ChromeCircleColorful />,
                browserName: 'Chrome',
                link: 'https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
                description: 'Access your wallet right from your favorite web browser.',
              },
            ],
            name: 'mockWallet1',
            remark: 'mockWallet1',
            icon: 'http://userconfig.com/icon',
          }),
        ]}
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
    expect(walletItems.length).toBe(2);
    expect(walletItems[0].querySelector('.ant-web3-connect-modal-name')?.textContent).toBe(
      target1.name,
    );
    expect(walletItems[1].querySelector('.ant-web3-connect-modal-name')?.textContent).toBe(
      target2.name,
    );
    expect(walletItems[0].querySelector('.ant-web3-connect-modal-img')?.getAttribute('src')).toBe(
      'http://userconfig.com/icon',
    );
    expect(walletItems[1].querySelector('.ant-web3-connect-modal-img')?.getAttribute('src')).toBe(
      target2.icon,
    );
    const groupTitle = baseElement.querySelector('.ant-web3-connect-modal-group-title');
    expect(groupTitle?.textContent).toBe('More');

    fireEvent.click(walletItems[0]!);
    await vi.waitFor(() => {
      expect(mockConnectAsync).toHaveBeenCalledWith({
        connector: config.connectors[1],
        chainId: config.chains[0].id,
      });
    });
  });

  it('Should use user config connector when not find with eip6963', async () => {
    const target1 = {
      icon: 'icon1',
      id: 'com.mock.wallet1',
      name: 'mockWallet1',
      provider: {
        request: () => {},
        on: () => {},
      } as any,
    };

    const target2 = {
      icon: 'icon2',
      id: 'com.mock.wallet2',
      name: 'mockWallet2',
      provider: {
        request: () => {},
        on: () => {},
      } as any,
    };

    const mockDiscoveredConnectorsViaEIP6963 = [
      injected({
        target: 'metaMask',
      }),
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
        wallets={[
          new UniversalWallet({
            extensions: [
              {
                key: 'Chrome',
                browserIcon: <ChromeCircleColorful />,
                browserName: 'Chrome',
                link: 'https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
                description: 'Access your wallet right from your favorite web browser.',
              },
            ],
            name: 'mockWallet1',
            remark: 'mockWallet1',
            icon: 'http://userconfig.com/icon',
          }),
          MetaMask(),
        ]}
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
    const walletItems = baseElement.querySelectorAll('.ant-web3-connect-modal-wallet-item');
    expect(walletItems.length).toBe(3);
    expect(walletItems[0].querySelector('.ant-web3-connect-modal-name')?.textContent).toBe(
      'MetaMask',
    );
    expect(walletItems[1].querySelector('.ant-web3-connect-modal-name')?.textContent).toBe(
      target1.name,
    );
    expect(walletItems[2].querySelector('.ant-web3-connect-modal-name')?.textContent).toBe(
      target2.name,
    );
    expect(walletItems[1].querySelector('.ant-web3-connect-modal-img')?.getAttribute('src')).toBe(
      'http://userconfig.com/icon',
    );
    expect(walletItems[2].querySelector('.ant-web3-connect-modal-img')?.getAttribute('src')).toBe(
      target2.icon,
    );
    const groupTitle = baseElement.querySelectorAll('.ant-web3-connect-modal-group-title');
    expect(groupTitle[0]?.textContent).toBe('Popular');
    expect(groupTitle[1]?.textContent).toBe('More');
  });
});
