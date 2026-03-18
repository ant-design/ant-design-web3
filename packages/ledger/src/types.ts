import type { Account, ConnectOptions } from '@ant-design/web3-common';
import { DeviceStatus } from '@ledgerhq/device-management-kit';
import type { DiscoveredDevice } from '@ledgerhq/device-management-kit';

import type { LedgerErrorCode } from './ledger/errors';

export { DeviceStatus };

export interface LedgerAccount extends Account {
  path?: string;
}

/** Connect options extended with Ledger WalletConnect session restore */
export type LedgerConnectOptions = ConnectOptions & {
  restoreSession?: boolean;
  /** 静默模式（自动重连场景，失败时不弹错误 phase） */
  silent?: boolean;
  /** 自动重连时直接使用的地址序号，跳过地址选择弹窗 */
  addressIndex?: string;
};

// ---------------------------------------------------------------------------
// USB 设备连接阶段
// ---------------------------------------------------------------------------

/**
 * 业务扩展阶段：DMK DeviceStatus 未覆盖的连接流程状态。
 *
 * - IDLE：未开始连接或已取消
 * - DETECTING：正在发现设备或建立会话
 * - NO_DEVICE：发现结果：无设备
 * - MULTIPLE_DEVICES：发现结果：多设备待选
 * - APP_NOT_OPEN：已连接但未打开目标 App
 * - SELECTING_ADDRESS：会话就绪，等待用户选择地址
 */
export enum LedgerExtendedPhase {
  IDLE = 'IDLE',
  DETECTING = 'DETECTING',
  NO_DEVICE = 'NO_DEVICE',
  MULTIPLE_DEVICES = 'MULTIPLE_DEVICES',
  APP_NOT_OPEN = 'APP_NOT_OPEN',
  SELECTING_ADDRESS = 'SELECTING_ADDRESS',
}

/**
 * Ledger 连接阶段 = DMK DeviceStatus 四态 + 业务扩展阶段。
 *
 * DeviceStatus（基准，来自 @ledgerhq/device-management-kit）：
 * - LOCKED：设备已锁定
 * - BUSY：设备忙
 * - CONNECTED：设备已连接
 * - NOT_CONNECTED：设备未连接
 */
export type LedgerConnectionPhase = DeviceStatus | LedgerExtendedPhase;

/**
 * DMK 会话推送的设备信息（由 USBStatusMonitor 管理）。
 * 不含业务 phase，只反映 DMK 会话级别的设备状态与元数据。
 */
export interface MonitorDeviceInfo {
  deviceStatus: DeviceStatus;
  currentApp?: string;
  deviceModel?: string;
  sessionId?: string;
}

export interface USBDeviceState {
  phase: LedgerConnectionPhase;
  currentApp?: string;
  deviceModel?: string;
  sessionId?: string;
  /** 多设备时的候选设备列表 */
  pendingDevices?: DiscoveredDevice[];
}

// ---------------------------------------------------------------------------
// USBConnection 阶段方法返回类型（用于拆分 connectUSB）
// ---------------------------------------------------------------------------

/** 设备检测结果，返回结构化结果而非抛异常 */
export type USBDetectResult =
  | { type: 'no_device' }
  | { type: 'multiple_devices'; devices: DiscoveredDevice[] }
  | { type: 'single_device'; device: DiscoveredDevice };

/** App 状态检查结果，区分锁定与未打开 */
export type USBAppCheckResult =
  | { type: 'locked' }
  | { type: 'app_not_open'; currentApp?: string }
  | { type: 'ready' };

// ---------------------------------------------------------------------------
// Error event
// ---------------------------------------------------------------------------

export type LedgerErrorPhase =
  | 'usb:connect'
  | 'usb:disconnect'
  | 'usb:sign'
  | 'usb:getAddress'
  | 'wc:connect'
  | 'wc:disconnect'
  | 'wc:sign';

export interface LedgerErrorEvent {
  code: LedgerErrorCode;
  phase: LedgerErrorPhase;
  message: string;
  raw?: Error;
}
