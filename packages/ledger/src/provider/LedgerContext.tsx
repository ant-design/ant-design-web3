import { createContext, useContext } from 'react';
import type { ComponentType } from 'react';

import type { Ledger } from '../ledger';
import type { LedgerErrorEvent, USBDeviceState } from '../types';
import type { LedgerAddressIndexModalProps } from './LedgerAddressIndexModal';
import type {
  DeviceSelectModalOption,
  LedgerDeviceSelectModalProps,
} from './LedgerDeviceSelectModal';
import type { LedgerConnectionActions } from './useLedgerConnection';

export interface LedgerContextValue {
  usbStatus: USBDeviceState;
  lastError: LedgerErrorEvent | null;
  clearError: () => void;
  actions: LedgerConnectionActions;
  ledger: Ledger;
  addressIndexModal?: ComponentType<LedgerAddressIndexModalProps>;
  deviceSelectModal?: DeviceSelectModalOption;
}

export const LedgerContext = createContext<LedgerContextValue | null>(null);

/**
 * 获取连接阶段和设备信息。
 * 必须在 LedgerWeb3ConfigProvider 内使用。
 */
export const useLedgerUSBStatus = (): USBDeviceState => {
  const ctx = useContext(LedgerContext);
  if (!ctx) throw new Error('useLedgerUSBStatus must be used within LedgerWeb3ConfigProvider');
  return ctx.usbStatus;
};

/**
 * 获取运行时错误及清除方法。
 * 必须在 LedgerWeb3ConfigProvider 内使用。
 */
export const useLedgerError = () => {
  const ctx = useContext(LedgerContext);
  if (!ctx) throw new Error('useLedgerError must be used within LedgerWeb3ConfigProvider');
  const { lastError, clearError } = ctx;
  return { error: lastError, clearError };
};

/**
 * 获取用户操作回调（选择设备、确认地址、取消、重试）。
 * 必须在 LedgerWeb3ConfigProvider 内使用。
 */
export const useLedgerActions = (): LedgerConnectionActions => {
  const ctx = useContext(LedgerContext);
  if (!ctx) throw new Error('useLedgerActions must be used within LedgerWeb3ConfigProvider');
  return ctx.actions;
};

/**
 * 获取 Ledger 实例。
 * 必须在 LedgerWeb3ConfigProvider 内使用。
 */
export const useLedgerInstance = (): Ledger => {
  const ctx = useContext(LedgerContext);
  if (!ctx) throw new Error('useLedgerInstance must be used within LedgerWeb3ConfigProvider');
  return ctx.ledger;
};
