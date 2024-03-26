import { useCallback, useEffect, useMemo, useState } from 'react';
import { type ConnectionContextState } from '@solana/wallet-adapter-react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { WalletConnectWallet } from '../../wallets/built-in';
import { SolanaWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

type TestConnection = Partial<ConnectionContextState['connection']>;

const mockWalletConnectConfig = vi.fn();

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
        if (wcConfig && wcConfig.walletConfig && wcConfig.currentChain) {
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

  it('wallet connect', async () => {
    const App = () => {
      return (
        <SolanaWeb3ConfigProvider
          walletConnect={{
            projectId: 'fake_wallet_connect_project_id',
          }}
          wallets={[WalletConnectWallet()]}
        >
          <button>Click</button>
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector, baseElement } = xrender(App);

    const btn = selector('button')!;
    expect(btn.textContent).toBe('Click');
    console.log(baseElement.innerHTML);

    // check wallet-connect config can be created
    vi.waitFor(async () => {
      expect(mockWalletConnectConfig).toBeCalledWith(true);
    });
  });
});
