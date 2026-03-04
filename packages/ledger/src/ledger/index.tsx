import type { Account, Wallet } from '@ant-design/web3-common';
import { LedgerFilled } from '@ant-design/web3-icons';
import type { DiscoveredDevice } from '@ledgerhq/device-management-kit';

import type { LedgerAccount, LedgerErrorEvent, LedgerErrorPhase } from '../types';
import { LedgerError } from './errors';
import { USBConnection } from './USBConnection';
import { USBStatusMonitor } from './USBStatusMonitor';
import { WalletConnectBridge } from './WalletConnectBridge';

type ConnectType = 'USB' | 'WalletConnect';
type ErrorListener = (event: LedgerErrorEvent) => void;

/**
 * Ledger 门面类，作为 USB 和 WalletConnect 两种连接方式的统一入口。
 *
 * 核心设计：
 * - 内部跟踪 _connectType，connectUSB/connectWalletConnect 成功后自动设置
 * - disconnect() 根据 _connectType 自动路由到对应的断开逻辑
 * - account getter 统一从 USB accounts 或 WC account 获取当前账户
 * - signMessage/signTypedData 根据 _connectType 自动选择签名通道
 * - 通过事件监听器（onError）提供统一的错误通知机制
 */
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

  public usbConnection: USBConnection;
  public walletConnectBridge: WalletConnectBridge;
  public usbStatusMonitor: USBStatusMonitor;

  private _connectType: ConnectType | undefined;
  private _errorListeners = new Set<ErrorListener>();

  constructor(name?: string, derivationPath?: string) {
    this.wallet.name = name || 'Ledger';
    const path = derivationPath || "44'/60'/0'/0/0";

    this.usbStatusMonitor = new USBStatusMonitor();
    this.usbConnection = new USBConnection(path, this.usbStatusMonitor);
    this.walletConnectBridge = new WalletConnectBridge();
  }

  // ---------------------------------------------------------------------------
  // Public getters
  // ---------------------------------------------------------------------------

  get connectType(): ConnectType | undefined {
    return this._connectType;
  }

  get account(): Account | undefined {
    if (this._connectType === 'WalletConnect') {
      return this.walletConnectBridge.getAccount();
    }
    return this.usbConnection.accounts[0];
  }

  get accounts(): LedgerAccount[] {
    return this.usbConnection.accounts;
  }

  get sessionId() {
    return this.usbConnection.sessionId;
  }

  get derivationPath(): string {
    return this.usbConnection.derivationPath;
  }

  get availableDevices() {
    return this.usbConnection.availableDevices;
  }

  // ---------------------------------------------------------------------------
  // Error event emitter
  // ---------------------------------------------------------------------------

  onError(listener: ErrorListener): () => void {
    this._errorListeners.add(listener);
    return () => {
      this._errorListeners.delete(listener);
    };
  }

  private _emitError(phase: LedgerErrorPhase, error: unknown): void {
    const event: LedgerErrorEvent = {
      code: error instanceof LedgerError ? error.code : 'CONNECTION_FAILED',
      phase,
      message: error instanceof Error ? error.message : String(error),
      raw: error instanceof Error ? error : undefined,
    };
    this._errorListeners.forEach((l) => l(event));
  }

  // ---------------------------------------------------------------------------
  // USB delegation
  // ---------------------------------------------------------------------------

  /**
   * @deprecated 请通过 useLedgerConnection 使用阶段方法。保留用于兼容。
   * NO_DEVICE / MULTIPLE_DEVICES / ETHEREUM_APP_NOT_OPEN 为设备状态，不通过 _emitError 广播。
   */
  public connectUSB = async (
    returnWhenNoDevice?: boolean,
    selectedDevice?: DiscoveredDevice,
  ): Promise<void> => {
    try {
      await this.usbConnection.connectUSB(returnWhenNoDevice, selectedDevice);
      this._connectType = 'USB';
    } catch (error) {
      const isDeviceState =
        error instanceof LedgerError &&
        (error.code === 'NO_DEVICE' ||
          error.code === 'MULTIPLE_DEVICES' ||
          error.code === 'ETHEREUM_APP_NOT_OPEN');
      const isSilent =
        returnWhenNoDevice && error instanceof LedgerError && error.code === 'NO_DEVICE';
      // 设备状态（no_device/multiple_devices/app_not_open）不广播为错误，由 phase 表达
      if (!isDeviceState && !isSilent) {
        this._emitError('usb:connect', error);
      }
      throw error;
    }
  };

  public getAddressAtIndex = async (index: string): Promise<string> => {
    try {
      return await this.usbConnection.getAddressAtIndex(index);
    } catch (error) {
      this._emitError('usb:getAddress', error);
      throw error;
    }
  };

  public setAddressIndex = async (index: string): Promise<void> => {
    try {
      await this.usbConnection.setAddressIndex(index);
    } catch (error) {
      this._emitError('usb:getAddress', error);
      throw error;
    }
  };

  public getAvailableDevices = (): DiscoveredDevice[] => {
    return this.usbConnection.getAvailableDevices();
  };

  /** 当通过阶段方法（connectToDevice + checkAppStatus）建立 USB 连接后，由 useLedgerConnection 调用以标记连接类型 */
  public markUSBConnected = (): void => {
    this._connectType = 'USB';
  };

  // ---------------------------------------------------------------------------
  // WalletConnect delegation
  // ---------------------------------------------------------------------------

  public connectWalletConnect = async (): Promise<Account> => {
    try {
      const account = await this.walletConnectBridge.connect();
      this._connectType = 'WalletConnect';
      return account;
    } catch (error) {
      this._emitError('wc:connect', error);
      throw error;
    }
  };

  /**
   * Explicitly disconnect WalletConnect session only.
   * Used before establishing a new WC connection to clear stale sessions.
   */
  public disconnectWalletConnect = async (): Promise<void> => {
    try {
      await this.walletConnectBridge.disconnect();
    } catch (error) {
      this._emitError('wc:disconnect', error);
      throw error;
    }
  };

  public getWalletConnectAccount = (): Account | undefined => {
    return this.walletConnectBridge.getAccount();
  };

  public setWalletConnectProviderGetter = (getter: () => Promise<any>): void => {
    this.walletConnectBridge.setProviderGetter(getter);
  };

  // ---------------------------------------------------------------------------
  // Unified disconnect (routes based on internal connectType)
  // ---------------------------------------------------------------------------

  public disconnect = async (): Promise<void> => {
    const type = this._connectType;
    this._connectType = undefined;

    if (type === 'WalletConnect') {
      try {
        await this.walletConnectBridge.disconnect();
      } catch (error) {
        this._emitError('wc:disconnect', error);
        throw error;
      }
    } else {
      try {
        await this.usbConnection.disconnect();
      } catch (error) {
        this._emitError('usb:disconnect', error);
        throw error;
      }
    }
  };

  /**
   * Disconnect USB only (without clearing WalletConnect).
   * Used internally when switching from USB to another connection.
   */
  public disconnectUSB = async (): Promise<void> => {
    try {
      await this.usbConnection.disconnect();
      if (this._connectType === 'USB') {
        this._connectType = undefined;
      }
    } catch (error) {
      this._emitError('usb:disconnect', error);
      throw error;
    }
  };

  // ---------------------------------------------------------------------------
  // Unified signing router
  // ---------------------------------------------------------------------------

  public signMessage = async (message: string): Promise<any> => {
    if (this._connectType === 'WalletConnect' && this.walletConnectBridge.getAccount()) {
      try {
        return await this.walletConnectBridge.signMessage(message);
      } catch (error) {
        this._emitError('wc:sign', error);
        throw error;
      }
    }
    try {
      return await this.usbConnection.signWithUSB({ type: 'message', message });
    } catch (error) {
      this._emitError('usb:sign', error);
      throw error;
    }
  };

  public signTypedData = async (typedData: any): Promise<any> => {
    if (this._connectType === 'WalletConnect' && this.walletConnectBridge.getAccount()) {
      try {
        return await this.walletConnectBridge.signTypedData(typedData);
      } catch (error) {
        this._emitError('wc:sign', error);
        throw error;
      }
    }
    try {
      return await this.usbConnection.signWithUSB({ type: 'typedData', typedData });
    } catch (error) {
      this._emitError('usb:sign', error);
      throw error;
    }
  };
}
