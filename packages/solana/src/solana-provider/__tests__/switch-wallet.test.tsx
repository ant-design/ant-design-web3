import EventEmitter from 'node:events';
import React, { useEffect, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { metadata_CoinbaseWallet, metadata_Phantom } from '@ant-design/web3-assets';
import { Solana, SolanaDevnet } from '@ant-design/web3-assets/solana';
import { WalletReadyState, type Adapter } from '@solana/wallet-adapter-base';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-coinbase';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import type { Wallet } from '@solana/wallet-adapter-react';
import { fireEvent } from '@testing-library/react';
import { afterAll, describe, expect, it, vi } from 'vitest';

import { solana, solanaDevnet } from '../../chains';
import { WalletFactory } from '../../wallets/factory';
import { AntDesignWeb3ConfigProvider } from '../config-provider';
import { xrender } from './utils';

const mockFn = vi.fn();
const mockSelectWalletFn = vi.fn();

const mockedData = vi.hoisted(() => {
  const mockAddress = '8dQE449ozUAS2XPyvao6hEpkAtGALo1A1q4TApayFfCo';
  const mockAddressShort = '8dQE44...FfCo';

  return {
    address: {
      value: mockAddress,
      short: mockAddressShort,
    },
  };
});

const event = new EventEmitter();

vi.mock('@solana/wallet-adapter-react', async () => {
  const originModules = await vi.importActual('@solana/wallet-adapter-react');
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
  const WalletProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div className="mocked-walletprovider">{children}</div>
  );

  const adapters: Adapter[] = [new CoinbaseWalletAdapter(), new PhantomWalletAdapter()];

  return {
    ...originModules,
    useWallet: () => {
      const [currentWallet, setCurrentWallet] = useState<Wallet>(() => {
        return { adapter: adapters[0], readyState: WalletReadyState.Installed };
      });

      useEffect(() => {
        event.on('walletChange', (c: string) => {
          const foundAdapter = adapters.find((w) => w.name === c)!;
          setCurrentWallet({
            adapter: foundAdapter,
            readyState: WalletReadyState.Installed,
          });
        });
        return () => {
          event.removeAllListeners('walletChange');
        };
      });
      return {
        publicKey,
        connected: false,
        wallet: currentWallet,
        connect: () => {},
        select: (walletName: string) => {
          event.emit('walletChange', walletName);
          mockSelectWalletFn(walletName);
        },
        disconnect: () => {},
      };
    },
    ConnectionProvider,
    WalletProvider,
  };
});

describe('AntDesignWeb3ConfigProvider wallet', () => {
  afterAll(() => {
    mockFn.mockClear();
    vi.unmock('@ant-design/web3-common');
  });

  it('switchChain', async () => {
    const { WalletProvider, useWallet } = await import('@solana/wallet-adapter-react');

    const CustomConnector: React.FC = () => {
      const { switchChain } = useProvider();
      const { connected } = useWallet();

      return (
        <div className="customconnector">
          <button
            className="btn-switchchain"
            onClick={() => {
              switchChain?.(solanaDevnet);
            }}
          >
            Switch Chain
          </button>
          <div className="current-chain">{connected}</div>
        </div>
      );
    };

    const App: React.FC = () => {
      return (
        <WalletProvider wallets={[]}>
          <AntDesignWeb3ConfigProvider
            availableChains={[solana, solanaDevnet]}
            chainAssets={[Solana, SolanaDevnet]}
            availableWallets={[
              WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet).create(),
              WalletFactory(new PhantomWalletAdapter(), metadata_Phantom).create(),
            ]}
          >
            <CustomConnector />
          </AntDesignWeb3ConfigProvider>
        </WalletProvider>
      );
    };

    const { selector } = xrender(App);

    const btn = selector('.btn-switchchain')!;
    const shownCurrentChain = selector('.current-chain');

    expect(btn?.textContent).toBe('Switch Chain');
    expect(shownCurrentChain).not.toBeNull();

    fireEvent.click(btn);
  });
});
