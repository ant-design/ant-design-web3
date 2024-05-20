/* eslint-disable @typescript-eslint/consistent-type-imports */

import { ConnectButton, Connector, useProvider } from '@ant-design/web3';
import { metadata_CoinbaseWallet } from '@ant-design/web3-assets';
import { SolanaDevnet } from '@ant-design/web3-assets/solana';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-coinbase';
import type { ConnectionContextState } from '@solana/wallet-adapter-react';
import { fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { solana, solanaDevnet, solanaTestnet } from '../../chains';
import { WalletFactory } from '../../wallets/factory';
import { AntDesignWeb3ConfigProvider } from '../config-provider';
import { SolanaWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

type TestConnection = Partial<ConnectionContextState['connection']>;

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

vi.mock('@solana/wallet-adapter-react', async () => {
  const adapterReact = await vi.importActual('@solana/wallet-adapter-react');
  const mfjs =
    await vi.importActual<typeof import('@metaplex-foundation/js')>('@metaplex-foundation/js');
  const PublicKey = mfjs.PublicKey;

  const publicKey = new PublicKey(mockedData.address.value);

  return {
    ...adapterReact,
    useWallet: () => {
      return {
        publicKey,
        connected: true,
        connect: () => {},
        select: () => {},
        disconnect: () => {},
        wallet: {
          name: 'Coinbase',
        },
      };
    },
    useConnection: () => {
      const connection: TestConnection = {
        getBalance: async (_publicKey: any) => {
          return 10001;
        },
      };

      return { connection };
    },
  };
});

describe('Switch network', () => {
  afterEach(() => {
    vi.resetModules();
  });

  it('default is mainnet if chains not set', () => {
    const Display = () => {
      const { availableChains, chain } = useProvider();

      return (
        <div>
          <div className="default-chain">{chain?.name}</div>
          <div className="available-chains">{availableChains?.map((v) => v.name).join(',')}</div>
        </div>
      );
    };
    const App = () => (
      <SolanaWeb3ConfigProvider>
        <Display />
      </SolanaWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    const defaultChainDom = selector('.default-chain')!;
    const availableChainsDom = selector('.available-chains')!;

    expect(defaultChainDom.textContent).toBe(solana.name);
    expect(availableChainsDom.textContent).toBe(solana.name);
  });

  it('current chain need repect `chains` config', () => {
    const Display = () => {
      const { availableChains, chain } = useProvider();

      return (
        <div>
          <div className="default-chain">{chain?.name}</div>
          <div className="available-chains">{availableChains?.map((v) => v.name).join(',')}</div>
        </div>
      );
    };
    const App = () => (
      <SolanaWeb3ConfigProvider chains={[solanaDevnet, solanaTestnet]}>
        <Display />
      </SolanaWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    const defaultChainDom = selector('.default-chain')!;
    const availableChainsDom = selector('.available-chains')!;

    expect(defaultChainDom.textContent).toBe(solanaDevnet.name);
    expect(availableChainsDom.textContent).toBe(
      [solanaDevnet, solanaTestnet].map((v) => v.name).join(','),
    );
  });

  it('switch network when connected', async () => {
    const App = () => {
      return (
        <SolanaWeb3ConfigProvider
          balance={false}
          autoConnect
          chains={[solana, solanaDevnet, solanaTestnet]}
          wallets={[WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet)]}
        >
          <Connector>
            <ConnectButton />
          </Connector>
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector, selectors } = xrender(App);

    fireEvent.click(selector('.ant-web3-connect-button-chain-select')!);

    await vi.waitFor(() => {
      expect(selector('.ant-web3-connect-button-text')?.textContent).toBe(mockedData.address.short);
      expect(selector('.ant-web3-connect-button-chain-select')?.textContent).toBe('Solana');
    });

    fireEvent.click(selector('.ant-web3-connect-button-chain-select')!);

    expect(selector('.ant-dropdown-menu-item .ant-web3-icon-solana-colorful')).not.toBeNull();

    fireEvent.click(selectors('.ant-dropdown-menu-item')[1]);

    await vi.waitFor(() => {
      expect(selector('.ant-web3-connect-button-chain-select')?.textContent).toBe('Solana Devnet');
      expect(selector('.ant-web3-connect-button-text')?.textContent).toBe(mockedData.address.short);
    });
  });

  it('default use first chain when switchChain target not in `chains`', async () => {
    const mockSwitchChain = vi.fn();

    const CustomConnector = () => {
      const { switchChain } = useProvider();
      return (
        <div>
          <button
            className="btn-switch"
            onClick={() => {
              switchChain?.(solanaTestnet);
            }}
          >
            Switch chain
          </button>
        </div>
      );
    };
    const App = () => {
      return (
        <AntDesignWeb3ConfigProvider
          availableChains={[solanaDevnet]}
          balance={false}
          availableWallets={[
            WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet).create(),
          ]}
          onCurrentChainChange={(chain) => {
            mockSwitchChain(chain?.id);
          }}
          chainAssets={[SolanaDevnet]}
        >
          <CustomConnector />
        </AntDesignWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const btn = selector('.btn-switch');
    expect(btn?.textContent).toBe('Switch chain');

    fireEvent.click(btn!);

    await vi.waitFor(() => {
      expect(mockSwitchChain).toBeCalledWith(solanaDevnet.id);
    });
  });
});
