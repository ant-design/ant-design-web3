import { Connector, useProvider, type ConnectorTriggerProps } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { CoinbaseWallet, MetaMask, Polygon, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { createConfig, http } from 'wagmi';
import { base, goerli, mainnet, polygon } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

describe('WagmiWeb3ConfigProvider', () => {
  it('mount correctly', () => {
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
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
    const config = createConfig({
      chains: [polygon, mainnet],
      transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
      },
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
    const config = createConfig({
      chains: [base, polygon],
      transports: {
        [base.id]: http(),
        [polygon.id]: http(),
      },
      connectors: [],
    });

    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { chain, onSwitchChain } = props;
      return (
        <div
          onClick={() => {
            onSwitchChain?.(polygon);
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
      <WagmiWeb3ConfigProvider chains={assets} config={config}>
        <Connector switchChain={switchChain}>
          <CustomButton />
        </Connector>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('TEST Chain show text');
    fireEvent.click(baseElement.querySelector('.content')!);
    expect(switchChain).toBeCalledWith(polygon);
  });

  it('avaliable chains', () => {
    const config = createConfig({
      chains: [polygon, goerli, mainnet],
      transports: {
        [goerli.id]: http(),
        [mainnet.id]: http(),
        [polygon.id]: http(),
      },
      connectors: [
        injected({
          target: 'metaMask',
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
    expect(baseElement.querySelector('.chains-name')?.textContent).toBe('Ethereum');
  });

  it('avaliable chains with assets', () => {
    const config = createConfig({
      chains: [polygon, mainnet, base, goerli],
      transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
        [base.id]: http(),
        [goerli.id]: http(),
      },
      connectors: [
        injected({
          target: 'metaMask',
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
        chains={[
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
    expect(baseElement.querySelector('.chains-name')?.textContent).toBe('Polygon,Ethereum,Base');
  });

  it('empty connectors', () => {
    const chains = [polygon, mainnet];
    const config = createConfig({
      chains: [polygon, mainnet],
      transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
      },
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
      ],
    });

    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider config={config} wallets={[MetaMask()]}>
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('MetaMask');
  });

  it('avaliable wallets with assets', () => {
    const chains = [polygon, mainnet];
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
      ],
    });

    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider wallets={[MetaMask(), CoinbaseWallet()]} config={config}>
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('MetaMask');
  });
});
