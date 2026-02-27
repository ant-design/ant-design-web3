import type { Account, Wallet } from '@ant-design/web3-common';
import { LedgerFilled } from '@ant-design/web3-icons';
import type { DeviceSessionId } from '@ledgerhq/device-management-kit';
import { DeviceStatus as DeviceStatusType } from '@ledgerhq/device-management-kit';

import type { LedgerAccount } from '../types';
import AppCommand from './AppCommand';
import AvailableDevices from './AvailableDevices';
import Connect from './Connect';
import DeviceStatus from './DeviceStatus';
import { LedgerError } from './errors';
import EthereumSigner from './EthereumSigner';

export class Ledger {
  wallet: Wallet = {
    name: 'Ledger',
    icon: <LedgerFilled />,
    group: 'Hardware',
    remark: 'Ledger Hardware Wallet',
    app: {
      link: 'https://www.ledger.com/',
    },
    universalProtocol: {
      link: 'https://www.ledger.com/',
    },
    hasWalletReady: async () => true,
  };

  public availableDevices: AvailableDevices;
  public connectInstance: Connect;
  public deviceStatus: DeviceStatus;
  public appCommand: AppCommand;
  public ethereumSigner: EthereumSigner;

  public derivationPath: string;
  public basePath: string;

  public sessionId: DeviceSessionId | null = null;
  public accounts: LedgerAccount[] = [];

  private _getWalletConnectProvider?: () => Promise<any>;
  private _walletConnectAccount?: Account;
  private _sessionDeleteHandler?: () => void;
  /** 由 provider 注入，用于 signMessage/signTypedData 根据连接类型分支 */
  private _getConnectType?: () => 'USB' | 'WalletConnect' | undefined;

  constructor(name?: string, derivationPath?: string) {
    this.wallet.name = name || 'Ledger';
    this.derivationPath = derivationPath || "44'/60'/0'/0/0";

    // Extract basePath: e.g. "44'/60'/0'/0" from "44'/60'/0'/0/0"
    const parts = this.derivationPath.split('/');
    this.basePath = parts.slice(0, -1).join('/');

    this.availableDevices = new AvailableDevices();
    this.connectInstance = new Connect();
    this.deviceStatus = new DeviceStatus();
    this.appCommand = new AppCommand();
    this.ethereumSigner = new EthereumSigner();
  }

  /**
   * USB 连接：发现设备、建立 session、检查 Ethereum app。
   */
  public connectUSB = async (returnWhenNoDevice?: boolean) => {
    if (this.availableDevices.devices.length === 0) {
      if (returnWhenNoDevice) {
        throw new LedgerError('NO_DEVICE', 'No available devices to connect');
      }
      try {
        await this.availableDevices.discover();
      } catch {
        throw new LedgerError('NO_DEVICE', 'Failed to discover device');
      }
      if (this.availableDevices.devices.length === 0) {
        throw new LedgerError('NO_DEVICE', 'No Ledger device found. Please connect your device.');
      }
    }

    try {
      // 暂时取第 1 个设备
      if (!this.sessionId) {
        const device = this.availableDevices.devices[0];
        this.sessionId = await this.connectInstance.connect({ device });
      }
    } catch {
      throw new LedgerError('CONNECTION_FAILED', 'Cannot connect to Ledger device');
    }

    if (!this.sessionId) {
      throw new LedgerError('CONNECTION_FAILED', 'Cannot connect to Ledger device');
    }

    // 轮询 15 次，每次间隔 200ms 检查是否在 Ethereum app
    let appFound = false;
    try {
      this.deviceStatus.listenDeviceStatus(this.sessionId);
      for (let i = 0; i < 15; i++) {
        if (
          this.deviceStatus.currentApp === 'Ethereum' &&
          this.deviceStatus.deviceStatus === DeviceStatusType.CONNECTED
        ) {
          appFound = true;
          break;
        }
        await new Promise((resolve) => {
          setTimeout(resolve, 200);
        });
      }
    } catch {
      throw new LedgerError(
        'ETHEREUM_APP_NOT_OPEN',
        "Failed to connect to Ledger device's Ethereum app. Please open the Ethereum app manually and try again.",
      );
    } finally {
      this.deviceStatus.unsubscribe();
    }

    if (!appFound && this.deviceStatus.currentApp !== 'Ethereum') {
      throw new LedgerError(
        'ETHEREUM_APP_NOT_OPEN',
        "Failed to connect to Ledger device's Ethereum app. Please open the Ethereum app manually and try again.",
      );
    }

    // 地址在 setAddressIndex(index) 中按用户选择的索引再获取
  };

  /**
   * 仅获取指定索引的地址（用于弹窗预览），不改变当前账户。
   * @param index 地址序号（字符串，与 LAST_ADDRESS_INDEX_KEY 存储一致）
   */
  public getAddressAtIndex = async (index: string): Promise<string> => {
    if (!this.sessionId) {
      throw new LedgerError('NO_SESSION', 'No session. Please connect to Ledger device first.');
    }
    const path = `${this.basePath}/${index}`;
    try {
      const address = await this.ethereumSigner.getAddress(this.sessionId, path);
      return address;
    } catch {
      throw new LedgerError('CANNOT_GET_ADDRESS', 'Failed to get address at index ' + index);
    }
  };

  /**
   * USB 连接成功后，按「第几个地址」获取并设置为当前账户。
   * @param index 地址序号（字符串，与 LAST_ADDRESS_INDEX_KEY 存储一致）
   */
  public setAddressIndex = async (index: string): Promise<void> => {
    if (!this.sessionId) {
      throw new LedgerError('NO_SESSION', 'No session. Please connect to Ledger device first.');
    }
    const path = `${this.basePath}/${index}`;
    try {
      const address = await this.ethereumSigner.getAddress(this.sessionId, path);
      this.derivationPath = path;
      this.accounts = [{ address, path }];
    } catch {
      throw new LedgerError('CANNOT_GET_ADDRESS', 'Failed to get address at index ' + index);
    }
  };

  public disconnect = async () => {
    try {
      this.ethereumSigner.unsubscribe();
      this.appCommand.closeApp();
      this.deviceStatus.unsubscribe();
      await this.connectInstance.disconnect();
      this.availableDevices.unsubscribe();
      this.accounts = [];
      this.sessionId = null;
    } catch {
      // Ignore disconnect errors, ensure cleanup still happens
      this.accounts = [];
      this.sessionId = null;
    }
  };

  /**
   * USB 签名：仅走 USB 通道（personal_sign 或 EIP-712）。
   * 与 WalletConnect 签名完全独立。
   */
  public signWithUSB = async (
    params: { type: 'message'; message: string } | { type: 'typedData'; typedData: any },
  ): Promise<any> => {
    if (!this.sessionId) {
      throw new LedgerError(
        'NO_SESSION',
        'No session. Please connect to Ledger device via USB first.',
      );
    }
    if (params.type === 'message') {
      try {
        return await this.ethereumSigner.signMessage(
          this.sessionId,
          this.derivationPath,
          params.message,
        );
      } catch {
        throw new LedgerError('SIGN_MESSAGE_FAILED', 'Failed to sign message');
      }
    }
    try {
      return await this.ethereumSigner.signTypedData(
        this.sessionId,
        this.derivationPath,
        params.typedData,
      );
    } catch {
      throw new LedgerError('SIGN_TYPED_DATA_FAILED', 'Failed to sign typed data');
    }
  };

  /**
   * WalletConnect 签名：仅走 WalletConnect 通道（personal_sign 或 EIP-712）。
   * 与 USB 签名完全独立。
   */
  public signWithWalletConnect = async (
    params: { type: 'message'; message: string } | { type: 'typedData'; typedData: any },
  ): Promise<any> => {
    if (params.type === 'message') {
      return this._signMessageWithWalletConnect(params.message);
    }
    return this._signTypedDataWithWalletConnect(params.typedData);
  };

  /**
   * 统一签名入口：优先根据 connectType（由 provider 通过 setConnectTypeGetter 注入 latestConnectTypeRef）委托；
   * 未注入时回退为根据 _walletConnectAccount 判断。
   */
  public signMessage = async (message: string) => {
    const connectType = this._getConnectType?.();
    const useWalletConnect = connectType === 'WalletConnect' && this._walletConnectAccount;
    if (useWalletConnect) {
      return this.signWithWalletConnect({ type: 'message', message });
    }
    return this.signWithUSB({ type: 'message', message });
  };

  /**
   * 统一签名入口：优先根据 connectType（由 provider 通过 setConnectTypeGetter 注入 latestConnectTypeRef）委托；
   * 未注入时回退为根据 _walletConnectAccount 判断。
   */
  public signTypedData = async (typedData: any) => {
    const connectType = this._getConnectType?.();
    const useWalletConnect = connectType === 'WalletConnect' && this._walletConnectAccount;
    if (useWalletConnect) {
      return this.signWithWalletConnect({ type: 'typedData', typedData });
    }
    return this.signWithUSB({ type: 'typedData', typedData });
  };

  /** 由 provider 注入 latestConnectTypeRef 的 getter，用于签名分支判断 */
  public setConnectTypeGetter = (getter: () => 'USB' | 'WalletConnect' | undefined) => {
    this._getConnectType = getter;
  };

  public setWalletConnectProviderGetter = (providerGetter: () => Promise<any>) => {
    this._getWalletConnectProvider = providerGetter;
  };

  /**
   * WalletConnect 连接：配对/复用 session、解析账户。
   */
  public connectWalletConnect = async () => {
    if (!this._getWalletConnectProvider) {
      throw new LedgerError('WALLETCONNECT_NOT_CONFIGURED', 'WalletConnect is not configured');
    }

    const provider = await this._getWalletConnectProvider();
    if (!provider) {
      throw new LedgerError(
        'WALLETCONNECT_PROVIDER_NOT_AVAILABLE',
        'WalletConnect provider not available',
      );
    }

    try {
      // Reuse existing session when present (e.g. restored from storage after refresh)
      const hasSession = Boolean(provider.session);
      const hasPairing = provider.client?.session?.map?.size > 0;
      const skipPairing = hasSession || hasPairing;

      // Connect to WalletConnect
      // When skipPairing is true, connect() returns immediately with existing session (no new pairing)
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
            chains: ['eip155:1'], // Mainnet, can be extended
            events: ['chainChanged', 'accountsChanged'],
          },
        },
        skipPairing,
      });

      // Get session after connection (mobile wallet confirmed or existing session used)
      const session = provider.session;
      if (!session) {
        throw new LedgerError(
          'WALLETCONNECT_SESSION_NOT_AVAILABLE',
          'WalletConnect session not available',
        );
      }

      // Listen for session_delete event to handle remote disconnection
      this._sessionDeleteHandler = () => {
        this._walletConnectAccount = undefined;
      };
      provider.on('session_delete', this._sessionDeleteHandler);

      const accounts = session.namespaces.eip155?.accounts || [];
      if (accounts.length === 0) {
        throw new LedgerError(
          'WALLETCONNECT_NO_ACCOUNTS',
          'No accounts found in WalletConnect session',
        );
      }

      // Extract address from account string (format: eip155:1:0x...)
      const address = accounts[0].split(':')[2];
      if (!address) {
        throw new LedgerError(
          'WALLETCONNECT_INVALID_ACCOUNT',
          'Invalid account format from WalletConnect',
        );
      }

      this._walletConnectAccount = {
        address,
      };

      // Ping session so the mobile wallet receives activity and can show "connected"
      try {
        const client = (
          provider as { client?: { ping?: (params: { topic: string }) => Promise<void> } }
        ).client;
        if (client?.ping && session.topic) {
          await client.ping({ topic: session.topic });
        }
      } catch {
        // Non-fatal: session is still valid for the DApp
      }

      return this._walletConnectAccount;
    } catch (error: any) {
      if (error instanceof LedgerError) {
        throw error;
      }
      throw new LedgerError(
        'WALLETCONNECT_CONNECTION_FAILED',
        error?.message || 'Failed to connect via WalletConnect',
      );
    }
  };

  public disconnectWalletConnect = async () => {
    if (this._getWalletConnectProvider) {
      try {
        const provider = await this._getWalletConnectProvider();
        if (provider) {
          // Remove session_delete listener
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
    this._walletConnectAccount = undefined;
  };

  public getWalletConnectAccount = (): Account | undefined => {
    return this._walletConnectAccount;
  };

  /**
   * Sign message using WalletConnect
   * @private
   */
  private _signMessageWithWalletConnect = async (message: string): Promise<any> => {
    if (!this._getWalletConnectProvider) {
      throw new LedgerError('WALLETCONNECT_NOT_CONFIGURED', 'WalletConnect is not configured');
    }

    if (!this._walletConnectAccount?.address) {
      throw new LedgerError('WALLETCONNECT_NO_ACCOUNTS', 'No WalletConnect account available');
    }

    try {
      const provider = await this._getWalletConnectProvider();
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

      // Get chain ID from session (format: eip155:1)
      const accounts = session.namespaces.eip155?.accounts || [];
      if (accounts.length === 0) {
        throw new LedgerError(
          'WALLETCONNECT_NO_ACCOUNTS',
          'No accounts found in WalletConnect session',
        );
      }

      // Extract chain ID from account string (format: eip155:1:0x...)
      const chainId = accounts[0].split(':')[1];
      const chain = chainId ? `eip155:${chainId}` : undefined;

      // Convert message to hex string if it's not already
      let messageHex: string;
      if (message.startsWith('0x')) {
        messageHex = message;
      } else {
        // Convert string to hex using TextEncoder for browser compatibility
        const encoder = new TextEncoder();
        const bytes = encoder.encode(message);
        messageHex = `0x${Array.from(bytes)
          .map((byte) => byte.toString(16).padStart(2, '0'))
          .join('')}`;
      }

      // Call personal_sign via WalletConnect
      const signature = (await provider.request(
        {
          method: 'personal_sign',
          params: [messageHex, this._walletConnectAccount.address],
        },
        chain,
      )) as string;

      return signature;
    } catch (error: any) {
      if (error instanceof LedgerError) {
        throw error;
      }
      throw new LedgerError(
        'SIGN_MESSAGE_FAILED',
        error?.message || 'Failed to sign message via WalletConnect',
      );
    }
  };

  /**
   * Sign typed data (EIP-712) using WalletConnect
   * @private
   */
  private _signTypedDataWithWalletConnect = async (typedData: any): Promise<any> => {
    if (!this._getWalletConnectProvider) {
      throw new LedgerError('WALLETCONNECT_NOT_CONFIGURED', 'WalletConnect is not configured');
    }

    if (!this._walletConnectAccount?.address) {
      throw new LedgerError('WALLETCONNECT_NO_ACCOUNTS', 'No WalletConnect account available');
    }

    try {
      const provider = await this._getWalletConnectProvider();
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

      // Get chain ID from session (format: eip155:1)
      const accounts = session.namespaces.eip155?.accounts || [];
      if (accounts.length === 0) {
        throw new LedgerError(
          'WALLETCONNECT_NO_ACCOUNTS',
          'No accounts found in WalletConnect session',
        );
      }

      // Extract chain ID from account string (format: eip155:1:0x...)
      const chainId = accounts[0].split(':')[1];
      const chain = chainId ? `eip155:${chainId}` : undefined;

      // Ensure chainId in domain is a number (not string) for proper serialization
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

      // Call eth_signTypedData via WalletConnect
      // Note: WalletConnect v2 expects the second parameter to be a JSON string
      // Some wallets may also support eth_signTypedData_v4
      let signature: string;
      try {
        // Try eth_signTypedData_v4 first (preferred for WalletConnect v2)
        signature = (await provider.request(
          {
            method: 'eth_signTypedData_v4',
            params: [this._walletConnectAccount.address, JSON.stringify(normalizedTypedData)],
          },
          chain,
        )) as string;
      } catch (error: any) {
        // Fallback to eth_signTypedData if v4 is not supported
        signature = (await provider.request(
          {
            method: 'eth_signTypedData',
            params: [this._walletConnectAccount.address, JSON.stringify(normalizedTypedData)],
          },
          chain,
        )) as string;
      }

      return signature;
    } catch (error: any) {
      if (error instanceof LedgerError) {
        throw error;
      }
      throw new LedgerError(
        'SIGN_TYPED_DATA_FAILED',
        error?.message || 'Failed to sign typed data via WalletConnect',
      );
    }
  };
}
