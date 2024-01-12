import { useProvider } from '@ant-design/web3';
import {
  metadata_MetaMask,
  metadata_TokenPocket,
  MetaMask,
  UniversalWallet,
  WagmiWeb3ConfigProvider,
} from '@ant-design/web3-wagmi';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { createConfig, http } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

describe('WagmiWeb3ConfigProvider with UniversalWallet', () => {
  it('avaliable wallets with assets', () => {
    const config = createConfig({
      chains: [polygon, mainnet],
      transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
      },
      connectors: [
        injected({
          target: 'metaMask',
        }),
        walletConnect({
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        }),
        injected({
          target: 'tokenPocket',
        }),
      ],
    });

    const CustomConnector: React.FC = () => {
      const { availableWallets, connect } = useProvider();
      return (
        <div
          className="wallets-name"
          onClick={() => {
            connect?.();
          }}
        >
          {availableWallets?.map((item) => item.name).join(',')}
        </div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider
        wallets={[MetaMask(), new UniversalWallet(metadata_TokenPocket)]}
        config={config}
      >
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('MetaMask,TokenPocket');
  });

  it('custom wallet', () => {
    const config = createConfig({
      chains: [polygon, mainnet],
      transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
      },
      connectors: [
        injected({
          target: 'metaMask',
        }),
        walletConnect({
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        }),
        injected({
          target: 'tokenPocket',
        }),
        injected({
          target() {
            return {
              id: 'testWallet',
              name: 'TestWallet',
              provider: window.ethereum,
            };
          },
        }),
      ],
    });

    const CustomConnector: React.FC = () => {
      const { availableWallets, connect } = useProvider();
      return (
        <div
          className="wallets-name"
          onClick={() => {
            connect?.();
          }}
        >
          {availableWallets?.map((item) => `${item.name}-${item.group}`).join(',')}
        </div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider
        wallets={[
          new UniversalWallet({
            ...metadata_TokenPocket,
            group: 'Popular',
          }),
          {
            connectors: ['TestWallet'],
            create: () => {
              return {
                name: 'TestWallet',
                remark: 'My TestWallet',
                hasWalletReady: async () => {
                  return !!(window as any).testWallet;
                },
                hasExtensionInstalled: async () => {
                  return !!(window as any).testWallet;
                },
              };
            },
          },
          new UniversalWallet({
            ...metadata_MetaMask,
            group: 'More',
          }),
        ]}
        config={config}
      >
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe(
      'TokenPocket-Popular,TestWallet-undefined,MetaMask-More',
    );
  });
});
