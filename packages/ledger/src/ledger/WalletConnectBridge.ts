import type { Account } from '@ant-design/web3-common';

import { LedgerError } from './errors';

/**
 * WalletConnect 桥接器，封装 WalletConnect Universal Provider 的连接、签名和 QR 码逻辑。
 *
 * 职责：
 * - 建立/断开 WalletConnect 会话，解析 EIP-155 账户
 * - 通过 personal_sign / eth_signTypedData_v4 发送签名请求
 * - 提供 getQrCodeUri() 获取 WalletConnect 配对 URI（供 QR 码展示）
 * - 监听 session_delete 事件，会话被远端删除时自动清理 account
 */
export class WalletConnectBridge {
  private _getProvider?: () => Promise<any>;
  private _account?: Account;
  private _sessionDeleteHandler?: () => void;

  setProviderGetter(getter: () => Promise<any>): void {
    this._getProvider = getter;
  }

  getAccount(): Account | undefined {
    return this._account;
  }

  // ---------------------------------------------------------------------------
  // Connection
  // ---------------------------------------------------------------------------

  async connect(): Promise<Account> {
    if (!this._getProvider) {
      throw new LedgerError('WALLETCONNECT_NOT_CONFIGURED', 'WalletConnect is not configured');
    }

    const provider = await this._getProvider();
    if (!provider) {
      throw new LedgerError(
        'WALLETCONNECT_PROVIDER_NOT_AVAILABLE',
        'WalletConnect provider not available',
      );
    }

    try {
      const hasSession = Boolean(provider.session);
      const hasPairing = provider.client?.session?.map?.size > 0;
      const skipPairing = hasSession || hasPairing;

      await provider.connect({
        namespaces: {
          eip155: {
            methods: [
              'eth_sendTransaction',
              'eth_signTransaction',
              'eth_sign',
              'eth_signTypedData',
              'personal_sign',
            ],
            chains: ['eip155:1'],
            events: ['chainChanged', 'accountsChanged'],
          },
        },
        skipPairing,
      });

      const session = provider.session;
      if (!session) {
        throw new LedgerError(
          'WALLETCONNECT_SESSION_NOT_AVAILABLE',
          'WalletConnect session not available',
        );
      }

      this._sessionDeleteHandler = () => {
        this._account = undefined;
      };
      provider.on('session_delete', this._sessionDeleteHandler);

      const accounts: string[] = session.namespaces.eip155?.accounts || [];
      if (accounts.length === 0) {
        throw new LedgerError(
          'WALLETCONNECT_NO_ACCOUNTS',
          'No accounts found in WalletConnect session',
        );
      }

      const address = accounts[0].split(':')[2];
      if (!address) {
        throw new LedgerError(
          'WALLETCONNECT_INVALID_ACCOUNT',
          'Invalid account format from WalletConnect',
        );
      }

      this._account = { address };

      // Ping so the mobile wallet can show "connected"
      try {
        const client = (
          provider as { client?: { ping?: (params: { topic: string }) => Promise<void> } }
        ).client;
        if (client?.ping && session.topic) {
          await client.ping({ topic: session.topic });
        }
      } catch {
        // Non-fatal
      }

      return this._account;
    } catch (error: any) {
      if (error instanceof LedgerError) throw error;
      throw new LedgerError(
        'WALLETCONNECT_CONNECTION_FAILED',
        error?.message || 'Failed to connect via WalletConnect',
      );
    }
  }

  async disconnect(): Promise<void> {
    if (this._getProvider) {
      try {
        const provider = await this._getProvider();
        if (provider) {
          if (this._sessionDeleteHandler) {
            provider.off('session_delete', this._sessionDeleteHandler);
            this._sessionDeleteHandler = undefined;
          }
          if (provider.session) {
            await provider.disconnect();
          }
        }
      } catch {
        // Ignore disconnect errors
      }
    }
    this._account = undefined;
  }

  // ---------------------------------------------------------------------------
  // Signing
  // ---------------------------------------------------------------------------

  async signMessage(message: string): Promise<string> {
    const { provider, chain } = await this._ensureReady();

    try {
      let messageHex: string;
      if (message.startsWith('0x')) {
        messageHex = message;
      } else {
        const encoder = new TextEncoder();
        const bytes = encoder.encode(message);
        messageHex = `0x${Array.from(bytes)
          .map((byte) => byte.toString(16).padStart(2, '0'))
          .join('')}`;
      }

      return (await provider.request(
        { method: 'personal_sign', params: [messageHex, this._account!.address] },
        chain,
      )) as string;
    } catch (error: any) {
      if (error instanceof LedgerError) throw error;
      throw new LedgerError(
        'SIGN_MESSAGE_FAILED',
        error?.message || 'Failed to sign message via WalletConnect',
      );
    }
  }

  async signTypedData(typedData: any): Promise<string> {
    const { provider, chain } = await this._ensureReady();

    try {
      const normalizedTypedData = {
        ...typedData,
        domain: {
          ...typedData.domain,
          chainId:
            typeof typedData.domain?.chainId === 'string'
              ? parseInt(typedData.domain.chainId, 10)
              : typedData.domain?.chainId,
        },
      };

      const address = this._account!.address;
      const dataStr = JSON.stringify(normalizedTypedData);

      let signature: string;
      try {
        signature = (await provider.request(
          { method: 'eth_signTypedData_v4', params: [address, dataStr] },
          chain,
        )) as string;
      } catch {
        signature = (await provider.request(
          { method: 'eth_signTypedData', params: [address, dataStr] },
          chain,
        )) as string;
      }

      return signature;
    } catch (error: any) {
      if (error instanceof LedgerError) throw error;
      throw new LedgerError(
        'SIGN_TYPED_DATA_FAILED',
        error?.message || 'Failed to sign typed data via WalletConnect',
      );
    }
  }

  // ---------------------------------------------------------------------------
  // QR code URI
  // ---------------------------------------------------------------------------

  async getQrCodeUri(): Promise<{ uri: string }> {
    if (!this._getProvider) {
      throw new LedgerError('WALLETCONNECT_NOT_CONFIGURED', 'WalletConnect is not configured');
    }
    const provider = await this._getProvider();
    if (!provider) {
      throw new LedgerError(
        'WALLETCONNECT_PROVIDER_NOT_AVAILABLE',
        'WalletConnect provider not available',
      );
    }

    if (provider.session) {
      const uri = (provider as any).uri;
      if (uri) return { uri };
    }

    const QR_CODE_TIMEOUT_MS = 30_000;

    return new Promise<{ uri: string }>((resolve, reject) => {
      const timerId = setTimeout(function onTimeout() {
        provider.off('display_uri', handler);
        reject(new LedgerError('QR_CODE_TIMEOUT', 'WalletConnect display_uri timeout (30s)'));
      }, QR_CODE_TIMEOUT_MS);
      function handler(uri: string) {
        clearTimeout(timerId);
        provider.off('display_uri', handler);
        resolve({ uri });
      }
      provider.on('display_uri', handler);
    });
  }

  // ---------------------------------------------------------------------------
  // Shared validation
  // ---------------------------------------------------------------------------

  private async _ensureReady(): Promise<{
    provider: any;
    session: any;
    chain: string | undefined;
  }> {
    if (!this._getProvider) {
      throw new LedgerError('WALLETCONNECT_NOT_CONFIGURED', 'WalletConnect is not configured');
    }
    if (!this._account?.address) {
      throw new LedgerError('WALLETCONNECT_NO_ACCOUNTS', 'No WalletConnect account available');
    }

    const provider = await this._getProvider();
    if (!provider) {
      throw new LedgerError(
        'WALLETCONNECT_PROVIDER_NOT_AVAILABLE',
        'WalletConnect provider not available',
      );
    }

    const session = provider.session;
    if (!session) {
      throw new LedgerError(
        'WALLETCONNECT_SESSION_NOT_AVAILABLE',
        'WalletConnect session not available',
      );
    }

    const accounts: string[] = session.namespaces.eip155?.accounts || [];
    if (accounts.length === 0) {
      throw new LedgerError(
        'WALLETCONNECT_NO_ACCOUNTS',
        'No accounts found in WalletConnect session',
      );
    }

    const chainId = accounts[0].split(':')[1];
    const chain = chainId ? `eip155:${chainId}` : undefined;

    return { provider, session, chain };
  }
}
