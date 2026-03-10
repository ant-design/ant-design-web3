import {
  DeviceStatus as DeviceStatusType,
  type DiscoveredDevice,
} from '@ledgerhq/device-management-kit';
import type { DeviceSessionId } from '@ledgerhq/device-management-kit';

import type { LedgerAccount, USBAppCheckResult, USBDetectResult } from '../types';
import AppCommand from './AppCommand';
import AvailableDevices from './AvailableDevices';
import DeviceStatus from './DeviceStatus';
import { getDMK } from './dmk';
import { LedgerError } from './errors';
import EthereumSigner from './EthereumSigner';
import type { USBStatusMonitor } from './USBStatusMonitor';

/**
 * USB 连接管理器，负责 Ledger 设备的 USB 连接全生命周期。
 *
 * 职责：
 * - 设备发现与连接（通过 DMK connect/disconnect）
 * - Ethereum App 就绪检测（轮询 DeviceStatus，可区分 LOCKED / app_not_open）
 * - 地址派生与管理（通过 EthereumSigner）
 * - USB 签名代理（signMessage / signTypedData）
 * - 状态监控（通过 USBStatusMonitor 向上层通知连接状态变化）
 *
 * 阶段方法（返回结构化结果，不抛业务状态异常）：
 * - detectDevices：检测可用设备
 * - connectToDevice：连接到指定设备
 * - checkAppStatus：检查 App 状态（区分锁定/未打开/就绪）
 */
export class USBConnection {
  public sessionId: DeviceSessionId | null = null;
  public accounts: LedgerAccount[] = [];
  public derivationPath: string;
  public basePath: string;
  public availableDevices: AvailableDevices;

  private _deviceStatus: DeviceStatus;
  private _appCommand: AppCommand;
  private _ethereumSigner: EthereumSigner;
  private _monitor: USBStatusMonitor;

  constructor(derivationPath: string, monitor: USBStatusMonitor) {
    this.derivationPath = derivationPath;

    const parts = derivationPath.split('/');
    this.basePath = parts.slice(0, -1).join('/');

    this.availableDevices = new AvailableDevices();
    this._deviceStatus = new DeviceStatus();
    this._appCommand = new AppCommand();
    this._ethereumSigner = new EthereumSigner();
    this._monitor = monitor;
  }

  // ---------------------------------------------------------------------------
  // 底层 DMK 连接/断开
  // ---------------------------------------------------------------------------

  private async _dmkConnect(device: DiscoveredDevice): Promise<DeviceSessionId> {
    const dmk = getDMK();
    await this._dmkDisconnect();
    return dmk.connect({ device });
  }

  private async _dmkDisconnect(): Promise<void> {
    if (!this.sessionId) return;
    const dmk = getDMK();
    try {
      await dmk.disconnect({ sessionId: this.sessionId });
    } finally {
      this.sessionId = null;
    }
  }

  // ---------------------------------------------------------------------------
  // 阶段 1：检测可用设备
  // ---------------------------------------------------------------------------

  /**
   * 检测可用 Ledger 设备。
   * @param silent 静默模式：为 true 时不弹出 WebUSB 选择器，仅检查已有设备列表
   */
  async detectDevices(silent?: boolean): Promise<USBDetectResult> {
    const { availableDevices } = this;

    availableDevices.ensureSubscribed();

    if (availableDevices.devices.length === 0) {
      if (silent) {
        return { type: 'no_device' };
      }
      try {
        await availableDevices.discover();
      } catch {
        return { type: 'no_device' };
      }
      if (availableDevices.devices.length === 0) {
        return { type: 'no_device' };
      }
    }

    if (availableDevices.devices.length > 1) {
      return { type: 'multiple_devices', devices: [...availableDevices.devices] };
    }

    return { type: 'single_device', device: availableDevices.devices[0] };
  }

  // ---------------------------------------------------------------------------
  // 阶段 2：连接到指定设备
  // ---------------------------------------------------------------------------

  /**
   * 建立与指定设备的 DMK 会话。
   * 失败时清理 sessionId，避免孤儿 session。
   */
  async connectToDevice(device: DiscoveredDevice): Promise<void> {
    try {
      this.sessionId = await this._dmkConnect(device);
    } catch {
      this.sessionId = null;
      throw new LedgerError('CONNECTION_FAILED', 'Cannot connect to Ledger device');
    }

    if (!this.sessionId) {
      throw new LedgerError('CONNECTION_FAILED', 'Cannot connect to Ledger device');
    }
  }

  // ---------------------------------------------------------------------------
  // 阶段 3：检查 App 状态（区分锁定 / 未打开 / 就绪）
  // ---------------------------------------------------------------------------

  /**
   * 轮询检查设备上的 Ethereum App 状态。
   * 使用 DMK DeviceStatus 枚举区分 LOCKED 与 CONNECTED。
   */
  async checkAppStatus(): Promise<USBAppCheckResult> {
    const { sessionId, _deviceStatus: deviceStatus } = this;
    if (!sessionId) {
      throw new LedgerError('NO_SESSION', 'No session. Please connect to Ledger device first.');
    }

    try {
      deviceStatus.listenDeviceStatus(sessionId);

      // 轮询 15 次，每次 200ms，共约 3s
      for (let i = 0; i < 15; i++) {
        await new Promise((r) => setTimeout(r, 200));

        if (deviceStatus.deviceStatus === DeviceStatusType.LOCKED) {
          deviceStatus.unsubscribe();
          return { type: 'locked' };
        }

        if (
          deviceStatus.deviceStatus === DeviceStatusType.CONNECTED &&
          deviceStatus.currentApp === 'Ethereum'
        ) {
          deviceStatus.unsubscribe();
          this._appCommand.setSessionId(sessionId);
          this._monitor.watch(sessionId);
          return { type: 'ready' };
        }

        if (deviceStatus.deviceStatus === DeviceStatusType.CONNECTED) {
          deviceStatus.unsubscribe();
          return { type: 'app_not_open', currentApp: deviceStatus.currentApp ?? undefined };
        }
      }

      deviceStatus.unsubscribe();
      return { type: 'app_not_open', currentApp: deviceStatus.currentApp ?? undefined };
    } catch {
      deviceStatus.unsubscribe();
      await this._dmkDisconnect();
      throw new LedgerError(
        'ETHEREUM_APP_NOT_OPEN',
        'Failed to check Ledger device status. Please unlock the device and open the Ethereum app.',
      );
    }
  }

  // ---------------------------------------------------------------------------
  // 兼容：原 connectUSB 方法（供过渡期使用）
  // ---------------------------------------------------------------------------

  async connectUSB(returnWhenNoDevice?: boolean, selectedDevice?: DiscoveredDevice): Promise<void> {
    const detect = await this.detectDevices(returnWhenNoDevice ?? false);
    if (detect.type === 'no_device') {
      if (!returnWhenNoDevice) {
        throw new LedgerError('NO_DEVICE', 'No Ledger device found. Please connect your device.');
      }
      return;
    }
    if (detect.type === 'multiple_devices') {
      if (!selectedDevice) {
        throw new LedgerError(
          'MULTIPLE_DEVICES',
          'Multiple Ledger devices found. Please select a device.',
        );
      }
      await this.connectToDevice(selectedDevice);
    } else {
      await this.connectToDevice(detect.device);
    }

    const appStatus = await this.checkAppStatus();
    if (appStatus.type === 'locked') {
      throw new LedgerError(
        'ETHEREUM_APP_NOT_OPEN',
        'Device is locked. Please unlock and open the Ethereum app.',
      );
    }
    if (appStatus.type === 'app_not_open') {
      throw new LedgerError(
        'ETHEREUM_APP_NOT_OPEN',
        'Please open the Ethereum app on your Ledger device manually.',
      );
    }
    // appStatus.type === 'ready' 时已在 checkAppStatus 中完成 monitor 更新
  }

  async disconnect(): Promise<void> {
    try {
      this._monitor.unwatch();
      this._ethereumSigner.unsubscribe();
      await this._appCommand.closeApp().catch(() => {});
      this._deviceStatus.unsubscribe();
      await this._dmkDisconnect();
      this.accounts = [];
      this.sessionId = null;
    } catch {
      this.accounts = [];
      this.sessionId = null;
    }
  }

  // ---------------------------------------------------------------------------
  // 地址管理
  // ---------------------------------------------------------------------------

  async getAddressAtIndex(index: string): Promise<string> {
    if (!this.sessionId) {
      throw new LedgerError('NO_SESSION', 'No session. Please connect to Ledger device first.');
    }
    const path = `${this.basePath}/${index}`;
    try {
      return await this._ethereumSigner.getAddress(this.sessionId, path);
    } catch {
      throw new LedgerError('CANNOT_GET_ADDRESS', 'Failed to get address at index ' + index);
    }
  }

  async setAddressIndex(index: string): Promise<void> {
    if (!this.sessionId) {
      throw new LedgerError('NO_SESSION', 'No session. Please connect to Ledger device first.');
    }
    const path = `${this.basePath}/${index}`;
    try {
      const address = await this._ethereumSigner.getAddress(this.sessionId, path);
      this.derivationPath = path;
      this.accounts = [{ address, path }];
    } catch {
      throw new LedgerError('CANNOT_GET_ADDRESS', 'Failed to get address at index ' + index);
    }
  }

  getAvailableDevices(): DiscoveredDevice[] {
    return this.availableDevices.devices;
  }

  // ---------------------------------------------------------------------------
  // 签名
  // ---------------------------------------------------------------------------

  async signWithUSB(
    params: { type: 'message'; message: string } | { type: 'typedData'; typedData: any },
  ): Promise<any> {
    if (!this.sessionId) {
      throw new LedgerError(
        'NO_SESSION',
        'No session. Please connect to Ledger device via USB first.',
      );
    }
    if (params.type === 'message') {
      try {
        return await this._ethereumSigner.signMessage(
          this.sessionId,
          this.derivationPath,
          params.message,
        );
      } catch (error: any) {
        throw new LedgerError('SIGN_MESSAGE_FAILED', error?.message || 'Reject');
      }
    }
    try {
      return await this._ethereumSigner.signTypedData(
        this.sessionId,
        this.derivationPath,
        params.typedData,
      );
    } catch (error: any) {
      throw new LedgerError('SIGN_TYPED_DATA_FAILED', error?.message || 'Reject');
    }
  }
}
