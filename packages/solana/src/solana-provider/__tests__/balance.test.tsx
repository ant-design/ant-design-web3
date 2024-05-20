import { type FC } from 'react';
import { useProvider } from '@ant-design/web3';
import type { ConnectionContextState } from '@solana/wallet-adapter-react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { SolanaWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

type TestConnection = Partial<ConnectionContextState['connection']>;

describe('SolanaWeb3ConfigProvider balance', () => {
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
    const mfjs =
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      await vi.importActual<typeof import('@metaplex-foundation/js')>('@metaplex-foundation/js');
    const PublicKey = mfjs.PublicKey;

    const publicKey = new PublicKey(mockedData.address.value);

    const ConnectionProvider: FC<React.PropsWithChildren<{ endpoint: string }>> = ({
      children,
    }) => <div>{children}</div>;
    const WalletProvider: FC<React.PropsWithChildren> = ({ children }) => <>{children}</>;

    return {
      ...originModules,
      useWallet: () => {
        return {
          publicKey,
          connected: true,
          connect: () => {},
          select: () => {},
          disconnect: () => {},
          wallet: { name: 'Coinbase Wallet' },
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

  it('available show balance', async () => {
    const BalanceDisplay: FC = () => {
      const { balance } = useProvider();

      return <div className="shown-balance">{balance?.value?.toString()}</div>;
    };

    const App: FC = () => (
      <SolanaWeb3ConfigProvider balance wallets={[]}>
        <div className="content">test</div>
        <BalanceDisplay />
      </SolanaWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');
    const shownBalance = selector('.shown-balance');

    await vi.waitFor(() => {
      expect(shownBalance?.textContent).toBe(mockedData.balance.toString());
    });
  });
});
