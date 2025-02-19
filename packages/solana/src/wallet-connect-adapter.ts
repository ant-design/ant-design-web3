/* v8 ignore start */
import type { WalletName } from '@solana/wallet-adapter-base';
import {
  BaseSignerWalletAdapter,
  isVersionedTransaction,
  WalletConnectionError,
  WalletDisconnectedError,
  WalletDisconnectionError,
  WalletNotConnectedError,
  WalletNotReadyError,
  WalletPublicKeyError,
  WalletReadyState,
  WalletSignMessageError,
  WalletSignTransactionError,
} from '@solana/wallet-adapter-base';
import type { TransactionVersion, VersionedTransaction } from '@solana/web3.js';
import { PublicKey, Transaction } from '@solana/web3.js';
import type { UniversalProviderOpts } from '@walletconnect/universal-provider';
import { parseAccountId, parseChainId } from '@walletconnect/utils';
import base58 from 'bs58';

import type { SolanaChainConfig } from './chains';
import type { IUniversalProvider } from './types';

export const WalletConnectWalletName = 'WalletConnect' as WalletName<'WalletConnect'>;

export type WalletConnectConfig = {
  walletConnect?: UniversalProviderOpts;
  currentChain?: SolanaChainConfig;
  rpcEndpoint: string;
};

export const WalletConnectChainID: Record<string, string> = {
  'mainnet-beta': 'solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ',
  devnet: 'solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K',
};

export class WalletConnectWalletAdapter extends BaseSignerWalletAdapter {
  name = WalletConnectWalletName;
  url = 'https://walletconnect.org';
  icon =
    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMwMCAxODUiIHdpZHRoPSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6IiBmaWxsPSIjM2I5OWZjIi8+PC9zdmc+';
  // V0 transactions are supported via the `transaction` parameter, and is off-spec.
  // Legacy transactions have these [parameters](https://docs.walletconnect.com/2.0/advanced/rpc-reference/solana-rpc#solana_signtransaction)
  readonly supportedTransactionVersions: ReadonlySet<TransactionVersion> = new Set(['legacy', 0]);

  private _publicKey?: PublicKey;
  private _connecting: boolean;
  private _walletProvider?: IUniversalProvider;
  private _getWalletConnectProvider?: () => Promise<IUniversalProvider | undefined>;
  private _getWalletConnectConfigGetter?: () => WalletConnectConfig;
  private _readyState: WalletReadyState =
    typeof window === 'undefined' ? WalletReadyState.Unsupported : WalletReadyState.Loadable;

  constructor() {
    super();

    this._connecting = false;
  }

  get publicKey() {
    return this._publicKey || null;
  }

  get connecting() {
    return this._connecting;
  }

  get readyState() {
    return this._readyState;
  }

  public setWalletConnectProviderGetter(
    providerGetter: () => Promise<IUniversalProvider | undefined>,
  ) {
    this._getWalletConnectProvider = () => providerGetter();
  }

  public setWalletConnectConfigGetter(configGetter: () => WalletConnectConfig) {
    this._getWalletConnectConfigGetter = configGetter;
  }

  async connect(): Promise<void> {
    try {
      if (this.connected || this.connecting) return;

      if (this._readyState !== WalletReadyState.Loadable) throw new WalletNotReadyError();

      const walletConnectConfig = this._getWalletConnectConfigGetter?.();
      if (!walletConnectConfig) throw new Error('WalletConnect config not available');

      const chain =
        walletConnectConfig.currentChain &&
        WalletConnectChainID[walletConnectConfig.currentChain.network];
      if (!chain) throw new WalletConnectionError('Chain not supported');

      this._connecting = true;
      const provider = await this._getWalletConnectProvider?.();

      if (!provider) throw new Error('WalletConnect provider not available');

      this._walletProvider = provider;

      try {
        const hasPairing = this._walletProvider.client.session.map.size > 0;

        await provider.connect({
          namespaces: {
            solana: {
              chains: [chain],
              methods: ['solana_signMessage', 'solana_signTransaction'],
              events: [],
              rpcMap: {
                [parseChainId(chain).reference]: walletConnectConfig.rpcEndpoint,
              },
            },
          },
          skipPairing: hasPairing,
        });
      } catch (error: any) {
        throw new WalletConnectionError(error?.message, error);
      }

      provider.on('session_delete', this._disconnected);

      const { address } = parseAccountId(
        this._walletProvider!.session!.namespaces.solana.accounts[0],
      );
      this._publicKey = new PublicKey(address);

      this.emit('connect', this.publicKey!);
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }

  async disconnect(): Promise<void> {
    const provider = this._walletProvider;
    if (provider) {
      provider.off('session_delete', this._disconnected);

      this._walletProvider = undefined;
      this._publicKey = undefined;

      try {
        await provider.disconnect();
      } catch (error: any) {
        this.emit('error', new WalletDisconnectionError(error?.message, error));
      }
    }

    this.emit('disconnect');
  }

  async signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T> {
    try {
      const provider = this._walletProvider;
      if (!provider) throw new WalletNotConnectedError();

      if (!this.publicKey) throw new WalletPublicKeyError();

      const network = this._getWalletConnectConfigGetter?.().currentChain?.network;
      const chain = network && WalletConnectChainID[network];

      let rawTransaction: string;
      let legacyTransaction: Transaction | VersionedTransaction | undefined;

      if (isVersionedTransaction(transaction)) {
        rawTransaction = Buffer.from(transaction.serialize()).toString('base64');

        if (transaction.version === 'legacy') {
          legacyTransaction = Transaction.from(transaction.serialize());
        }
      } else {
        rawTransaction = transaction
          .serialize({
            requireAllSignatures: false,
            verifySignatures: false,
          })
          .toString('base64');
        legacyTransaction = transaction;
      }

      try {
        const { signature } = await provider.request<{ signature: string }>(
          {
            method: 'solana_signTransaction',
            params: {
              pubkey: this.publicKey?.toString(),
              ...legacyTransaction,
              transaction: rawTransaction,
            },
          },
          chain,
        );

        transaction.addSignature(this.publicKey!, Buffer.from(base58.decode(signature)));
        return transaction;
      } catch (error: any) {
        throw new WalletSignTransactionError(error?.message, error);
      }
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    try {
      const provider = this._walletProvider;
      if (!provider) throw new WalletNotConnectedError();

      const network = this._getWalletConnectConfigGetter?.().currentChain?.network;
      const chain = network && WalletConnectChainID[network];

      try {
        const { signature } = await provider.request<{ signature: string }>(
          {
            method: 'solana_signMessage',
            params: { pubkey: this.publicKey?.toString(), message: base58.encode(message) },
          },
          chain,
        );

        return base58.decode(signature);
      } catch (error: any) {
        throw new WalletSignMessageError(error?.message, error);
      }
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  private _disconnected = () => {
    const provider = this._walletProvider;
    if (provider) {
      provider.off('session_delete', this._disconnected);

      this._walletProvider = undefined;
      this._publicKey = undefined;

      this.emit('error', new WalletDisconnectedError());
      this.emit('disconnect');
    }
  };
}
