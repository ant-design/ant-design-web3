import type { Account, ConnectOptions } from '@ant-design/web3-common';
import type { DiscoveredDevice } from '@ledgerhq/device-management-kit';

import type { LedgerErrorCode } from './ledger/errors';

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

/** Ledger USB 连接各阶段，用于表达设备状态而非错误 */
export type USBConnectionPhase =
  | 'idle'
  | 'detecting'
  | 'no_device'
  | 'multiple_devices'
  | 'device_locked'
  | 'app_not_open'
  | 'ready'
  | 'selecting_address'
  | 'connected'
  | 'disconnected';

export interface USBDeviceState {
  phase: USBConnectionPhase;
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
