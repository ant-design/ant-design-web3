import { Connector, useProvider, type ConnectorTriggerProps } from '@ant-design/web3';
import {
  Goerli,
  Mainnet,
  MetaMask,
  OkxWallet,
  Polygon,
  TokenPocket,
  WagmiWeb3ConfigProvider,
} from '@ant-design/web3-wagmi';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { http } from 'wagmi';
import { base } from 'wagmi/chains';

describe('WagmiWeb3ConfigProvider', () => {
  it('mount correctly', () => {
    const App = () => (
      <WagmiWeb3ConfigProvider
        transports={{
          [Mainnet.id]: http(),
        }}
      >
        <div className="content">test</div>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });

  it('chains', () => {
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
      <WagmiWeb3ConfigProvider
        transports={{
          [Mainnet.id]: http(),
          [Polygon.id]: http(),
        }}
        chains={[Polygon, Mainnet]}
      >
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
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { chain, onSwitchChain } = props;
      return (
        <div
          onClick={() => {
            onSwitchChain?.(Polygon);
          }}
          className="content"
        >
          {chain?.name}
        </div>
      );
    };

    const switchChain = vi.fn();
    const chains = [
      {
        name: 'TEST Chain show text',
        id: base.id,
        icon: <div>icon</div>,
        nativeCurrency: {
          name: 'Base',
          symbol: 'base',
          decimals: 18,
        },
        wagmiChain: base,
      },
      Polygon,
    ];

    const App = () => (
      <WagmiWeb3ConfigProvider
        transports={{
          [base.id]: http(),
          [Polygon.id]: http(),
        }}
        chains={chains}
      >
        <Connector switchChain={switchChain}>
          <CustomButton />
        </Connector>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('TEST Chain show text');
    fireEvent.click(baseElement.querySelector('.content')!);
    expect(switchChain).toBeCalledWith(Polygon);
  });

  it('avaliable chains', () => {
    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider
        chains={[Goerli, Mainnet, Polygon]}
        transports={{
          [Goerli.id]: http(),
          [Mainnet.id]: http(),
          [Polygon.id]: http(),
        }}
      >
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.chains-name')?.textContent).toBe('Goerli,Ethereum,Polygon');
  });

  it('avaliable wallets', () => {
    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider
        wallets={[MetaMask(), TokenPocket(), OkxWallet()]}
        chains={[Polygon, Goerli, Mainnet]}
        transports={{
          [Goerli.id]: http(),
          [Mainnet.id]: http(),
          [Polygon.id]: http(),
        }}
      >
        <CustomConnector />
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe(
      'MetaMask,TokenPocket,OKX Wallet',
    );
  });
});
