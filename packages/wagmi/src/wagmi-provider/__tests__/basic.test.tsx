import { Connector, useProvider, type ConnectorTriggerProps } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { CoinbaseWallet, Polygon, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { configureChains, createConfig } from 'wagmi';
import { base, goerli, mainnet, polygon } from 'wagmi/chains';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';

describe('WagmiWeb3ConfigProvider', () => {
  it('mount correctly', () => {
    const { publicClient } = configureChains([mainnet], [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [],
    });

    const App = () => (
      <WagmiWeb3ConfigProvider config={config}>
        <div className="content">test</div>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });

  it('chains', () => {
    const chains = [polygon, mainnet];
    const { publicClient } = configureChains(chains, [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [],
    });

    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { chain, onSwitchChain } = props;
      return (
        <div
          onClick={() => {
            onSwitchChain?.(Mainnet);
          }}
          className="content"
        >
          {chain?.name}
        </div>
      );
    };

    const switchChain = vi.fn();

    const App = () => (
      <WagmiWeb3ConfigProvider config={config}>
        <Connector switchChain={switchChain}>
          <CustomButton />
        </Connector>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('Polygon');
    fireEvent.click(baseElement.querySelector('.content')!);
    expect(switchChain).toBeCalledWith(Mainnet);
  });

  it('custom assets', () => {
    const chains = [base, polygon];
    const { publicClient } = configureChains(chains, [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [],
    });

    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { chain, onSwitchChain } = props;
      return (
        <div
          onClick={() => {
            onSwitchChain?.(chains[0]);
          }}
          className="content"
        >
          {chain?.name}
        </div>
      );
    };

    const switchChain = vi.fn();
    const assets = [
      {
        name: 'TEST Chain show text',
        id: base.id,
        icon: <div>icon</div>,
        nativeCurrency: {
          name: 'Base',
          symbol: 'base',
          decimals: 18,
        },
      },
    ];

    const App = () => (
      <WagmiWeb3ConfigProvider assets={assets} config={config}>
        <Connector switchChain={switchChain}>
          <CustomButton />
        </Connector>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('TEST Chain show text');
    fireEvent.click(baseElement.querySelector('.content')!);
    expect(switchChain).toBeCalledWith(chains[0]);
  });

  it('avaliable chains', () => {
    const chains = [polygon, mainnet];
    const { publicClient } = configureChains(chains, [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [
        new MetaMaskConnector({ chains: [base] }),
        new CoinbaseWalletConnector({
          chains: [polygon, base, goerli],
          options: {
            appName: 'ant.design.web3',
            jsonRpcUrl: `https://api.zan.top/node/v1/eth/mainnet/test`,
          },
        }),
      ],
    });

    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider config={config}>
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.chains-name')?.textContent).toBe('Goerli,Ethereum');
  });

  it('avaliable chains with assets', () => {
    const chains = [polygon, mainnet];
    const { publicClient } = configureChains(chains, [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [
        new MetaMaskConnector({ chains: [base] }),
        new CoinbaseWalletConnector({
          chains: [polygon, base, goerli],
          options: {
            appName: 'ant.design.web3',
            jsonRpcUrl: `https://api.zan.top/node/v1/eth/mainnet/test`,
          },
        }),
      ],
    });

    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider
        config={config}
        assets={[
          Polygon,
          {
            id: base.id,
            name: 'Base',
          },
        ]}
      >
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.chains-name')?.textContent).toBe(
      'Base,Polygon,Goerli,Ethereum',
    );
  });

  it('empty connectors', () => {
    const chains = [polygon, mainnet];
    const { publicClient } = configureChains(chains, [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
    });

    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider config={config}>
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('');
  });

  it('avaliable wallets', () => {
    const chains = [polygon, mainnet];
    const { publicClient } = configureChains(chains, [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [
        new MetaMaskConnector({ chains: [base] }),
        new CoinbaseWalletConnector({
          chains: [polygon, base, goerli],
          options: {
            appName: 'ant.design.web3',
            jsonRpcUrl: `https://api.zan.top/node/v1/eth/mainnet/test`,
          },
        }),
      ],
    });

    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider config={config}>
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('MetaMask');
  });

  it('avaliable wallets with assets', () => {
    const chains = [polygon, mainnet];
    const { publicClient } = configureChains(chains, [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [
        new MetaMaskConnector({ chains: [base] }),
        new CoinbaseWalletConnector({
          chains: [polygon, base, goerli],
          options: {
            appName: 'ant.design.web3',
            jsonRpcUrl: `https://api.zan.top/node/v1/eth/mainnet/test`,
          },
        }),
      ],
    });

    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider assets={[CoinbaseWallet]} config={config}>
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe(
      'MetaMask,Coinbase Wallet',
    );
  });
});
