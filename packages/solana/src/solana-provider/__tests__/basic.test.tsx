import { useEffect, useState } from 'react';
import { Connector, useProvider, type ConnectorTriggerProps } from '@ant-design/web3';
import type { ConnectionContextState } from '@solana/wallet-adapter-react';
import { fireEvent, render } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { solana } from '../../chains';
import { SolanaWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

type TestConnection = Partial<ConnectionContextState['connection']>;
const mockCreateConnectionInstance = vi.fn();

describe('SolanaWeb3ConfigProvider', () => {
  beforeEach(() => {
    mockCreateConnectionInstance.mockClear();

    vi.resetAllMocks();
  });

  afterAll(() => {
    vi.resetModules();
  });

  const mockedData = vi.hoisted(() => {
    const mockAddress = '8dQE449ozUAS2XPyvao6hEpkAtGALo1A1q4TApayFfCo';
    const mockAddressShort = '8dQE44...FfCo';
    const balance = 10002;

    const mockedDisconnect = vi.fn();

    return {
      address: {
        value: mockAddress,
        short: mockAddressShort,
      },
      balance,
      mockedDisconnect,
    };
  });

  vi.mock('@solana/wallet-adapter-react', async () => {
    const originModules = await vi.importActual('@solana/wallet-adapter-react');
    const { remember } = await import('./utils');
    const mfjs =
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      await vi.importActual<typeof import('@metaplex-foundation/js')>('@metaplex-foundation/js');
    const PublicKey = mfjs.PublicKey;

    const publicKey = new PublicKey(mockedData.address.value);

    const ConnectionProvider: React.FC<
      React.PropsWithChildren<{ endpoint: string; config: any }>
    > = ({
      children,
      endpoint,
      // default value: copy from ConnectionProvider in @solana/wallet-adapter-react
      config = { commitment: 'confirmed' },
    }) => {
      useEffect(() => {
        mockCreateConnectionInstance(endpoint, config?.commitment);
      }, [endpoint, config]);

      return (
        <div>
          <div className="endpoint">{endpoint}</div>
          <div className="commitment">{config?.commitment}</div>
          {children}
        </div>
      );
    };

    const WalletProvider: React.FC<React.PropsWithChildren> = ({ children }) => <>{children}</>;

    const connectedRef = remember(false);
    const currentWalletRef = remember<any>(null);

    return {
      ...originModules,
      useWallet: () => {
        // provide a state to emit re-render
        const [, setConnected] = useState(connectedRef.value);
        const [, setCurrentWallet] = useState(currentWalletRef.value);

        return {
          publicKey,
          connected: connectedRef.value,
          connect: () => {
            connectedRef.value = true;
            setConnected(true);
          },
          select: (_wallet: any) => {
            currentWalletRef.value = _wallet;
            setCurrentWallet(_wallet);
          },
          disconnect: () => {
            mockedData.mockedDisconnect();
          },
          wallet: currentWalletRef.value,
        };
      },
      useConnection: () => {
        const connection: TestConnection = {
          getBalance: async (_publicKey: any) => {
            return mockedData.balance;
          },
        };

        return { connection };
      },
      ConnectionProvider,
      WalletProvider,
    };
  });

  it('mount correctly', () => {
    const App = () => (
      <SolanaWeb3ConfigProvider>
        <div className="content">test</div>
      </SolanaWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });

  it('print error if not solana chain', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const fakeChain = {
      id: 1000_000 as any,
      name: 'fake solana chain',
      network: 'fake solana network',
      rpcUrls: {},
    };

    const App = () => (
      <SolanaWeb3ConfigProvider chains={[fakeChain]}>
        <div>test</div>
      </SolanaWeb3ConfigProvider>
    );

    render(<App />);

    await vi.waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `Can not find chain ${fakeChain.id}, SolanaWeb3ConfigProvider only support Solana`,
    );

    consoleErrorSpy.mockRestore();
  });

  it('available custom trigger', () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { chain, onSwitchChain } = props;

      return (
        <button
          type="button"
          onClick={() => {
            onSwitchChain?.(solana);
          }}
          className="content"
        >
          {chain?.name}
        </button>
      );
    };

    const switchChain = vi.fn();

    const App = () => (
      <SolanaWeb3ConfigProvider>
        <Connector switchChain={switchChain}>
          <CustomButton />
        </Connector>
      </SolanaWeb3ConfigProvider>
    );

    // const { baseElement } = render(<App />);
    // expect(baseElement.querySelector('.content')?.textContent).toBe('Solana');
  });

  it('available custom rpcProvider by function', () => {
    const mockRpcEndpoint = 'https://fake-api.mainnet-beta.solana.com/';
    const mockRpcProvider = vi.fn(() => mockRpcEndpoint);

    const App = () => (
      <SolanaWeb3ConfigProvider rpcProvider={mockRpcProvider}>
        <div className="content">test</div>
      </SolanaWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');

    expect(mockRpcProvider).toBeCalled();
  });

  it('available endpoint', () => {
    const App = () => (
      <SolanaWeb3ConfigProvider rpcProvider={() => 'https://main-beta.fake-domain.com/'}>
        <div className="content">test</div>
      </SolanaWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    expect(selector('.endpoint')?.textContent).toBe('https://main-beta.fake-domain.com/');
  });

  it('available connectionConfig and is optimized by default when creating connection', async () => {
    const connectionConfig = { commitment: 'processed' };

    const App = ({ config }: { config?: any }) => (
      <SolanaWeb3ConfigProvider
        rpcProvider={() => `https://api.zan.top/node/v1/solana/mainnet/${'YOUR_ZAN_API_KEY'}`}
        connectionConfig={config}
      >
        <div className="content">test</div>
      </SolanaWeb3ConfigProvider>
    );

    const { selector, rerender } = xrender(App);
    expect(selector('.commitment')?.textContent).toBe('confirmed');

    // simulate multiple renderings
    rerender(<App />);
    rerender(<App />);

    expect(mockCreateConnectionInstance).toBeCalledTimes(1);

    // simulate re-render with different connectionConfig
    rerender(<App config={connectionConfig} />);

    expect(selector('.commitment')?.textContent).toBe('processed');
    expect(mockCreateConnectionInstance).toBeCalledTimes(2);
  });

  it('available show account address', async () => {
    const { useWallet } = await import('@solana/wallet-adapter-react');
    const connectRunned = vi.fn();

    const Address: React.FC = () => {
      const { account } = useProvider();
      return <div className="address">{account?.address}</div>;
    };

    const App = () => {
      const { connect } = useWallet();
      return (
        <SolanaWeb3ConfigProvider>
          <div>
            <div className="content">test</div>
            <button
              type="button"
              className="connect"
              onClick={async () => {
                await connect();
                connectRunned();
              }}
            >
              Connect
            </button>
            <Address />
          </div>
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');

    const connectBtn = selector('.connect')!;
    const address = selector('.address');

    expect(connectBtn).not.toBeNull();

    // default address is empty
    expect(address?.textContent).toBe('');

    fireEvent.click(connectBtn);

    await vi.waitFor(() => {
      expect(connectRunned).toBeCalled();
      expect(address?.textContent).toBe(mockedData.address.value);
    });
  });

  it('available disconnect', () => {
    const CustomConnector: React.FC = () => {
      const { disconnect } = useProvider();
      return (
        <div>
          <button type="button" onClick={async () => await disconnect?.()}>
            Disconnect
          </button>
        </div>
      );
    };

    const App: React.FC = () => {
      return (
        <SolanaWeb3ConfigProvider>
          <CustomConnector />
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const btn = selector('button')!;

    expect(btn?.textContent).toBe('Disconnect');
    fireEvent.click(btn);

    expect(mockedData.mockedDisconnect).toBeCalled();
  });

  it('should ignore config when ignoreConfig is true', () => {
    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const { selector } = xrender(() => (
      <SolanaWeb3ConfigProvider chains={[solana]}>
        <SolanaWeb3ConfigProvider ignoreConfig={true} chains={[solana]}>
          <CustomConnector />
        </SolanaWeb3ConfigProvider>
      </SolanaWeb3ConfigProvider>
    ));
    // Should use parent config, not the ignored one
    expect(selector('.chains-name')?.textContent).toBe('Solana');
  });

  it('should use active provider config when one is ignored', () => {
    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const { selector } = xrender(() => (
      <SolanaWeb3ConfigProvider ignoreConfig={true} chains={[solana]}>
        <SolanaWeb3ConfigProvider chains={[solana]}>
          <CustomConnector />
        </SolanaWeb3ConfigProvider>
      </SolanaWeb3ConfigProvider>
    ));
    // Should use active provider config, not the ignored one
    expect(selector('.chains-name')?.textContent).toBe('Solana');
  });
});
