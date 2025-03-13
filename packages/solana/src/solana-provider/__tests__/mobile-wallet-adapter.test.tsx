import React, { useEffect, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { WalletReadyState } from '@solana/wallet-adapter-base';
import { type ConnectionContextState } from '@solana/wallet-adapter-react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { OKXWallet, PhantomWallet, SolflareWallet } from '../../wallets/built-in';
import { MWA_WALLET_NAME } from '../config-provider';
import { SolanaWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

type TestConnection = Partial<ConnectionContextState['connection']>;

const mockSelectFn = vi.fn();

describe('SolanaWeb3ConfigProvider standard mobile wallet adapter', () => {
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
              adapter: {
                name: MWA_WALLET_NAME,
                readyState: WalletReadyState.Installed,
              },
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
      // WalletProvider,
    };
  });

  // it('available standard wallet ready state', async () => {
  //   const WalletReady = () => {
  //     const { availableWallets } = useProvider();
  //     const [walletReady, setWalletReady] = useState(false);

  //     useEffect(() => {
  //       availableWallets![0]?.hasWalletReady?.().then((v) => {
  //         setWalletReady(v);
  //       });
  //     }, [availableWallets]);

  //     return <div className="is-ready">ready:{walletReady ? 'true' : 'false'}</div>;
  //   };

  //   const App = () => {
  //     return (
  //       <SolanaWeb3ConfigProvider wallets={[OKXWallet(), SolflareWallet()]}>
  //         <WalletReady />
  //       </SolanaWeb3ConfigProvider>
  //     );
  //   };

  //   const { selector } = xrender(App);

  //   const readyDom = selector('.is-ready')!;

  //   // check wallet-connect config can be created
  //   await vi.waitFor(async () => {
  //     expect(readyDom.textContent).toBe('ready:true');
  //   });
  // });

  it('available handle `autoAddRegisteredWallets`', async () => {
    const WalletReady = () => {
      const { availableWallets } = useProvider();
      const [autoAddedReady, setAutoAddedReady] = useState(false);
      const [autoAddedExtInstalled, setAddedExtInstalled] = useState(false);

      // 1. Mobile Wallet Adapter
      const walletNames = availableWallets?.map((v) => v.name).join(', ');

      useEffect(() => {
        if (availableWallets?.length === 1) {
          availableWallets
            .at(0)!
            .hasWalletReady?.()
            .then((v) => {
              setAutoAddedReady(v);
            });

          availableWallets
            .at(0)!
            .hasExtensionInstalled?.()
            .then((v) => {
              setAddedExtInstalled(v);
            });
        }
      }, [availableWallets]);

      return (
        <div>
          <div className="wallet-names">{walletNames}</div>
          <div className="added-ready">{autoAddedReady ? 'true' : 'false'}</div>
          <div className="added-ext-installed">{autoAddedExtInstalled ? 'true' : 'false'}</div>
        </div>
      );
    };

    const App = () => {
      return (
        <SolanaWeb3ConfigProvider autoAddRegisteredWallets>
          <WalletReady />
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const namesDom = selector('.wallet-names')!;
    const readyDom = selector('.added-ready')!;
    const extInstalledDom = selector('.added-ext-installed')!;

    // check wallet-connect config can be created
    await vi.waitFor(async () => {
      expect(namesDom.textContent).toBe(MWA_WALLET_NAME);

      expect(readyDom.textContent).toBe('true');

      // MWA is not a browser extension
      expect(extInstalledDom.textContent).toBe('false');
    });
  });
});
