import type { Account, Wallet } from '@ant-design/web3-common';
// dev 开发需要，临时调整，上线前必须改回来
import { MaticFilled } from '@ant-design/web3-icons';
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
    icon: <MaticFilled />,
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

  public sessionId: DeviceSessionId | null = null;
  public accounts: LedgerAccount[] = [];

  private _getWalletConnectProvider?: () => Promise<any>;
  private _walletConnectAccount?: Account;
  private _sessionDeleteHandler?: () => void;

  constructor(name?: string, derivationPath?: string) {
    this.wallet.name = name || 'Ledger';
    this.derivationPath = derivationPath || "44'/60'/0'/0/0";

    this.availableDevices = new AvailableDevices();
    this.connectInstance = new Connect();
    this.deviceStatus = new DeviceStatus();
    this.appCommand = new AppCommand();
    this.ethereumSigner = new EthereumSigner();
  }

  public connect = async (returnWhenNoDevice?: boolean) => {
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

    try {
      // await this.appCommand.openApp(this.sessionId, 'Ethereum');

      const address = await this.ethereumSigner.getAddress(this.sessionId, this.derivationPath);

      this.accounts = [
        {
          address,
          path: this.derivationPath,
        },
      ];
    } catch {
      throw new LedgerError('CANNOT_GET_ADDRESS', 'Failed to get address');
    }
  };

  public disconnect = async () => {
    try {
      this.ethereumSigner.unsubscribe();
      this.appCommand.closeApp();
      this.deviceStatus.unsubscribe();
      this.connectInstance.disconnect();
      this.availableDevices.unsubscribe();
      this.accounts = [];
      this.sessionId = null;
    } catch {}
  };

  public signMessage = async (message: string) => {
    // Check if using WalletConnect
    if (this._walletConnectAccount) {
      return this._signMessageWithWalletConnect(message);
    }

    // Use hardware wallet signing
    if (!this.sessionId) {
      throw new LedgerError(
        'NO_SESSION',
        'No session ID available. Please connect to Ledger device first.',
      );
    }
    try {
      return await this.ethereumSigner.signMessage(this.sessionId, this.derivationPath, message);
    } catch {
      throw new LedgerError('SIGN_MESSAGE_FAILED', 'Failed to sign message');
    }
  };

  public signTypedData = async (typedData: any) => {
    // Check if using WalletConnect
    if (this._walletConnectAccount) {
      return this._signTypedDataWithWalletConnect(typedData);
    }

    // Use hardware wallet signing
    if (!this.sessionId) {
      throw new LedgerError(
        'NO_SESSION',
        'No session ID available. Please connect to Ledger device first.',
      );
    }
    try {
      return await this.ethereumSigner.signTypedData(
        this.sessionId,
        this.derivationPath,
        typedData,
      );
    } catch {
      throw new LedgerError('SIGN_TYPED_DATA_FAILED', 'Failed to sign typed data');
    }
  };

  public setWalletConnectProviderGetter = (providerGetter: () => Promise<any>) => {
    this._getWalletConnectProvider = providerGetter;
  };

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
      // Check if there's an existing pairing (from getQrCode or previous connection)
      const hasPairing = provider.client?.session?.map?.size > 0;

      // Connect to WalletConnect
      // If hasPairing is true, skipPairing will make connect() return immediately with existing session
      // If hasPairing is false, connect() will wait for mobile wallet to confirm
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
        skipPairing: hasPairing,
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
