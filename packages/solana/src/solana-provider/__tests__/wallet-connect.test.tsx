import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { type ConnectionContextState } from '@solana/wallet-adapter-react';
import { fireEvent } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { WalletConnectWalletAdapter } from '../../wallet-connect-adapter';
import { WalletConnectWallet } from '../../wallets/built-in';
import { SolanaWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

type TestConnection = Partial<ConnectionContextState['connection']>;

const mockWalletConnectConfig = vi.fn();
const mockSelectFn = vi.fn();

describe('SolanaWeb3ConfigProvider WalletConnect', () => {
  beforeEach(() => {
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

    const ConnectionProvider: React.FC<React.PropsWithChildren<{ endpoint: string }>> = ({
      children,
      endpoint,
    }) => (
      <div>
        <div className="endpoint">{endpoint}</div>
        {children}
      </div>
    );
    const WalletProvider: React.FC<
      React.PropsWithChildren<{
        wallets: any[];
      }>
    > = ({ children, wallets }) => {
      const walletConnectAdapter = useMemo(() => wallets?.[0], [wallets]);

      const checkGetWalletConnectConfigGetter = useCallback(async () => {
        const wcConfig = await walletConnectAdapter?._getWalletConnectConfigGetter();
        if (wcConfig?.walletConnect && wcConfig.currentChain) {
          mockWalletConnectConfig(true);
        } else {
          mockWalletConnectConfig(false);
        }
      }, [walletConnectAdapter]);

      useEffect(() => {
        checkGetWalletConnectConfigGetter();
      }, [
        checkGetWalletConnectConfigGetter,
        walletConnectAdapter,
        walletConnectAdapter._getWalletConnectConfigGetter,
        wallets,
      ]);
      return <>{children}</>;
    };

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
            mockSelectFn(_wallet);
            currentWalletRef.value = _wallet;
            setCurrentWallet(_wallet);
          },
          disconnect: () => {
            mockedData.mockedDisconnect();
          },
          wallet: currentWalletRef.value,
          wallets: [
            {
              adapter: new WalletConnectWalletAdapter(),
            },
          ],
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

  it('available walletconnect', async () => {
    const ConnectBtn = () => {
      const { connect, availableWallets } = useProvider();
      return (
        <button
          type="button"
          onClick={() => {
            connect?.(availableWallets![0], { connectType: 'qrCode' });
          }}
        >
          Click to connect
        </button>
      );
    };

    const App = () => {
      return (
        <SolanaWeb3ConfigProvider
          walletConnect={{
            projectId: 'fake_wallet_connect_project_id',
          }}
          wallets={[WalletConnectWallet()]}
        >
          <ConnectBtn />
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const btn = selector('button')!;
    expect(btn.textContent).toBe('Click to connect');

    await vi.waitFor(() => {
      expect(mockWalletConnectConfig).toBeCalledWith(true);
    });

    fireEvent.click(btn);

    // check wallet-connect config can be created
    await vi.waitFor(() => {
      expect(mockSelectFn).toBeCalledTimes(2);
    });
  });

  it('wallet connect is not a plugin', async () => {
    const Display = () => {
      const { availableWallets } = useProvider();

      return (
        <div className="plugin-check">
          {availableWallets![0].hasExtensionInstalled === undefined ? 'true' : 'false'}
        </div>
      );
    };

    const App = () => {
      return (
        <SolanaWeb3ConfigProvider
          walletConnect={{
            projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID',
          }}
          wallets={[WalletConnectWallet()]}
        >
          <Display />
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const dom = selector('.plugin-check')!;

    await vi.waitFor(() => {
      expect(dom.textContent).toBe('true');
    });
  });
});
