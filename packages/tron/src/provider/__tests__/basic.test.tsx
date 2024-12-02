import { useEffect, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { TronWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

const mockCreateConnectionInstance = vi.fn();

describe('TronWeb3ConfigProvider', () => {
  beforeEach(() => {
    mockCreateConnectionInstance.mockClear();

    vi.resetAllMocks();
  });

  afterAll(() => {
    vi.resetModules();
  });

  const mockedData = vi.hoisted(() => {
    const mockAddress = 'TUguNkmfvjeHanGyQZLGJfj28w1tMtvNDT';
    const balance = 10002;

    const mockedDisconnect = vi.fn();

    return {
      address: {
        value: mockAddress,
      },
      balance,
      mockedDisconnect,
    };
  });

  vi.mock('@solana/wallet-adapter-react', async () => {
    const originModules = await vi.importActual('@solana/wallet-adapter-react');
    const { remember } = await import('./utils');

    const address = mockedData.address.value;

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
          address,
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
      ConnectionProvider,
      WalletProvider,
    };
  });

  it('mount correctly', () => {
    const App = () => (
      <TronWeb3ConfigProvider>
        <div className="content">test</div>
      </TronWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });

  it('available show account address', async () => {
    const { useWallet } = await import('@tronweb3/tronwallet-adapter-react-hooks');
    const connectRunned = vi.fn();

    const Address: React.FC = () => {
      const { account } = useProvider();
      return <div className="address">{account?.address}</div>;
    };

    const App = () => {
      const { connect } = useWallet();
      return (
        <TronWeb3ConfigProvider>
          <div>
            <div className="content">test</div>
            <button
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
        </TronWeb3ConfigProvider>
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
          <button onClick={async () => await disconnect?.()}>Disconnect</button>
        </div>
      );
    };

    const App: React.FC = () => {
      return (
        <TronWeb3ConfigProvider>
          <CustomConnector />
        </TronWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const btn = selector('button')!;

    expect(btn?.textContent).toBe('Disconnect');
    fireEvent.click(btn);

    expect(mockedData.mockedDisconnect).toBeCalled();
  });
});
