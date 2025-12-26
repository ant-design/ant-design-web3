import React from 'react';
import { Connector, useProvider, type ConnectorTriggerProps } from '@ant-design/web3';
import type { WalletConnectOptions, WalletFactory } from '@ant-design/web3-wagmi';
import {
  Goerli,
  Mainnet,
  MetaMask,
  OkxWallet,
  Polygon,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { http } from 'wagmi';
import { base } from 'wagmi/chains';

describe('WagmiWeb3ConfigProvider', () => {
  it('mount correctly', () => {
    const App = () => (
      <WagmiWeb3ConfigProvider>
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
        <button
          type="button"
          className="content"
          onClick={() => {
            onSwitchChain?.(Mainnet);
          }}
        >
          {chain?.name}
        </button>
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
        <button
          type="button"
          className="content"
          onClick={() => {
            onSwitchChain?.(Polygon);
          }}
        >
          {chain?.name}
        </button>
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

  it('refresh wallets', () => {
    const CustomConnector: React.FC<{
      onClick: () => void;
    }> = ({ onClick }) => {
      const { availableWallets } = useProvider();
      return (
        <button type="button" className="wallets-name" onClick={onClick}>
          {availableWallets?.map((item) => item.name).join(',')}
        </button>
      );
    };

    const App = () => {
      const [wallets, setWallets] = React.useState<WalletFactory[]>([
        MetaMask(),
        TokenPocket(),
        OkxWallet(),
      ]);
      return (
        <WagmiWeb3ConfigProvider
          wallets={wallets}
          chains={[Polygon, Goerli, Mainnet]}
          transports={{
            [Goerli.id]: http(),
            [Mainnet.id]: http(),
            [Polygon.id]: http(),
          }}
        >
          <CustomConnector
            onClick={() => {
              setWallets([MetaMask()]);
            }}
          />
        </WagmiWeb3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe(
      'MetaMask,TokenPocket,OKX Wallet',
    );
    fireEvent.click(baseElement.querySelector('.wallets-name')!);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('MetaMask');
  });

  it('wallet connect', () => {
    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-qrcode">
          {availableWallets
            ?.map((item) => `${typeof item.getQrCode}-${item.customQrCodePanel}`)
            .join(',')}
        </div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider
        wallets={[
          MetaMask(),
          TokenPocket(),
          OkxWallet(),
          WalletConnect({
            useWalletConnectOfficialModal: true,
          }),
        ]}
        chains={[Polygon, Goerli, Mainnet]}
        walletConnect={{
          projectId: 'test',
        }}
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
    expect(baseElement.querySelector('.wallets-qrcode')?.textContent).toBe(
      'function-undefined,function-undefined,function-undefined,function-true',
    );
  });

  it('wallet connect with customQrCodePanel', () => {
    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-qrcode">
          {availableWallets
            ?.map((item) => `${typeof item.getQrCode}-${item.customQrCodePanel}`)
            .join(',')}
        </div>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider
        wallets={[MetaMask(), TokenPocket(), OkxWallet(), WalletConnect()]}
        chains={[Polygon, Goerli, Mainnet]}
        walletConnect={{
          projectId: 'test',
          useWalletConnectOfficialModal: true,
        }}
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
    expect(baseElement.querySelector('.wallets-qrcode')?.textContent).toBe(
      'function-true,function-true,function-true,function-true',
    );
  });

  it('refresh walletConnect', () => {
    const CustomConnector: React.FC<{
      onClick: () => void;
    }> = ({ onClick }) => {
      const { availableWallets } = useProvider();
      return (
        <button type="button" className="wallets-qrcode" onClick={onClick}>
          {availableWallets?.map((item) => (item.getQrCode ? 'qrcode' : 'noqrcode')).join(',')}
        </button>
      );
    };

    const App = () => {
      const [walletConnectConfig, setWalletConnectConfig] = React.useState<
        WalletConnectOptions | false
      >({
        projectId: 'test',
      });
      return (
        <WagmiWeb3ConfigProvider
          wallets={[MetaMask(), TokenPocket(), OkxWallet()]}
          chains={[Polygon, Goerli, Mainnet]}
          walletConnect={walletConnectConfig}
          transports={{
            [Goerli.id]: http(),
            [Mainnet.id]: http(),
            [Polygon.id]: http(),
          }}
        >
          <CustomConnector
            onClick={() => {
              setWalletConnectConfig(false);
            }}
          />
        </WagmiWeb3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.wallets-qrcode')?.textContent).toBe('qrcode,qrcode,qrcode');
    fireEvent.click(baseElement.querySelector('.wallets-qrcode')!);
    expect(baseElement.querySelector('.wallets-qrcode')?.textContent).toBe(
      'noqrcode,noqrcode,noqrcode',
    );
  });

  it('should ignore config when ignoreConfig is true', () => {
    const CustomConnector: React.FC = () => {
      const { availableChains, availableWallets } = useProvider();
      return (
        <>
          <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
          <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
        </>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider
        chains={[Mainnet]}
        transports={{
          [Mainnet.id]: http(),
        }}
        wallets={[MetaMask()]}
      >
        <WagmiWeb3ConfigProvider
          ignoreConfig={true}
          chains={[Polygon]}
          transports={{
            [Polygon.id]: http(),
          }}
          wallets={[TokenPocket()]}
        >
          <CustomConnector />
        </WagmiWeb3ConfigProvider>
      </WagmiWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    // Should use parent config, not the ignored one
    expect(baseElement.querySelector('.chains-name')?.textContent).toBe('Ethereum');
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('MetaMask');
  });

  it('should use active provider config when one is ignored', () => {
    const CustomConnector: React.FC = () => {
      const { availableChains, availableWallets } = useProvider();
      return (
        <>
          <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
          <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
        </>
      );
    };

    const App = () => (
      <WagmiWeb3ConfigProvider
        ignoreConfig={true}
        chains={[Mainnet]}
        transports={{
          [Mainnet.id]: http(),
        }}
        wallets={[MetaMask()]}
      >
        <WagmiWeb3ConfigProvider
          chains={[Polygon]}
          transports={{
            [Polygon.id]: http(),
          }}
          wallets={[TokenPocket()]}
        >
          <CustomConnector />
        </WagmiWeb3ConfigProvider>
      </WagmiWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    // Should use active provider config, not the ignored one
    expect(baseElement.querySelector('.chains-name')?.textContent).toBe('Polygon');
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('TokenPocket');
  });
});
