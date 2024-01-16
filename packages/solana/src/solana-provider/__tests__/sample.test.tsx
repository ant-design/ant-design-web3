import { useState, type FC } from 'react';
import { useProvider } from '@ant-design/web3';
import { metadata_CoinbaseWallet } from '@ant-design/web3-assets';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-wallets';
import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { mainnet } from 'wagmi/chains';

import { solana } from '../../chains';
import { SolanaWeb3ConfigProvider } from '../../index';
import { WalletFactory } from '../../wallets/factory';
import { AntDesignWeb3ConfigProvider } from '../config-provider';
import { xrender } from './utils';

// sample tests that not need mock any modules
describe('Solana Provider sample test', () => {
  it('warning if want to connect chain that not Solana', async () => {
    const CustomConnector: FC = () => {
      const { connect, availableWallets } = useProvider();
      return (
        <div>
          <button
            className="btn"
            onClick={() => {
              connect?.(availableWallets?.[0]);
            }}
          >
            Connect to Ethereum
          </button>
        </div>
      );
    };
    const App: FC = () => {
      return (
        <WalletProvider wallets={[new CoinbaseWalletAdapter()]}>
          <AntDesignWeb3ConfigProvider
            availableChains={[solana]}
            currentChain={mainnet}
            availableWallets={[
              WalletFactory(new CoinbaseWalletAdapter(), metadata_CoinbaseWallet).create(),
            ]}
          >
            <CustomConnector />
          </AntDesignWeb3ConfigProvider>
        </WalletProvider>
      );
    };

    const { selector } = xrender(App);

    const btn = selector('.btn')!;

    const consoleWranSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    fireEvent.click(btn);

    await vi.waitFor(() => {
      expect(consoleWranSpy).toHaveBeenCalled();
    });
    expect(consoleWranSpy).toHaveBeenCalledWith(
      'SolanaWeb3ConfigProvider only support Solana chain.',
    );

    consoleWranSpy.mockRestore();
  });

  it('throw error if want to connect chain that not Solana', async () => {
    const CustomConnector: FC = () => {
      const { switchChain } = useProvider();
      const [error, setError] = useState<Error>();

      return (
        <div>
          <button
            onClick={async () => {
              try {
                await switchChain?.(mainnet);
              } catch (e) {
                setError(e as Error);
              }
            }}
          >
            Switch Chain
          </button>
          <div className="error-message">{error?.message}</div>
        </div>
      );
    };

    const App: FC = () => {
      return (
        <SolanaWeb3ConfigProvider>
          <CustomConnector />
        </SolanaWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const btn = selector('button')!;
    const errorMsg = selector('.error-message');

    fireEvent.click(btn);
    await vi.waitFor(() => {
      expect(errorMsg?.textContent).toBe('SolanaWeb3ConfigProvider only support Solana chain.');
    });
  });
});
