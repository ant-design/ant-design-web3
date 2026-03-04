import { useCallback, useEffect, useRef, useState } from 'react';
import type { Account, ConnectOptions, Wallet } from '@ant-design/web3-common';
import type { DiscoveredDevice } from '@ledgerhq/device-management-kit';

import type { Ledger } from '../ledger';
import type {
  LedgerConnectOptions,
  LedgerErrorEvent,
  USBConnectionPhase,
  USBDeviceState,
} from '../types';
import { useCallbackRef } from './useCallbackRef';
import type { LatestWalletParams, LedgerConnectType } from './useLatestWallet';

/**
 * Ledger 连接核心 Hook，管理设备连接/断开的完整生命周期。
 *
 * 职责：
 * - phase 状态机驱动连接流程（detecting -> no_device/multiple_devices/device_locked/app_not_open -> selecting_address -> connected）
 * - 账户状态管理（account / setAccount）
 * - USB 设备状态与 monitor 合并（phase/pendingDevices 自维护，currentApp/deviceModel/sessionId 来自 monitor）
 * - 错误状态管理（lastError / clearError，仅运行时异常）
 * - USB 断开自动检测
 * - connect/disconnect 逻辑（区分 USB 和 WalletConnect 路径）
 * - 操作回调：retryConnect / selectDevice / confirmAddress / cancelConnect
 */
export interface UseLedgerConnectionParams {
  ledger: Ledger;
  hasWalletConnect: boolean;
  getWalletConnectProvider: () => Promise<any>;
  cacheSelectedWallet: (params?: LatestWalletParams) => void;
  latestConnectTypeRef: React.RefObject<LedgerConnectType | undefined>;
  /** 多设备选择方式：'default' 原生 HID | true 内置 Modal | 自定义组件 */
  deviceSelectModal?: 'default' | true | React.ComponentType<any>;
  onUSBDisconnect?: () => void;
  onError?: (event: LedgerErrorEvent) => void;
}

export interface LedgerConnectionActions {
  selectDevice: (device: DiscoveredDevice) => Promise<void>;
  confirmAddress: (index: string) => Promise<void>;
  cancelConnect: () => Promise<void>;
  retryConnect: () => Promise<void>;
  discoverMore: () => Promise<void>;
}

export interface UseLedgerConnectionReturn {
  account: Account | undefined;
  setAccount: (account: Account | undefined) => void;
  accountRef: React.RefObject<Account | undefined>;
  usbStatus: USBDeviceState;
  lastError: LedgerErrorEvent | null;
  clearError: () => void;
  connect: (wallet?: Wallet, options?: ConnectOptions) => Promise<Account | undefined>;
  disconnect: () => Promise<void>;
  /** 当前连接阶段 */
  phase: USBConnectionPhase;
  /** 多设备时的候选列表 */
  pendingDevices: DiscoveredDevice[];
  /** 用户操作回调 */
  actions: LedgerConnectionActions;
  /** @deprecated 使用 phase === 'selecting_address' */
  awaitingAddressIndex: boolean;
  /** @deprecated 使用 phase === 'multiple_devices' */
  awaitingDeviceSelect: boolean;
  completeUsbConnectWithAddressIndex: (index: string) => Promise<void>;
  cancelUsbConnectWithAddressIndex: () => Promise<void>;
  handleDeviceSelected: (device: DiscoveredDevice) => Promise<void>;
  handleDeviceSelectCancel: () => Promise<void>;
  handleDiscoverMore: () => Promise<void>;
}

export function useLedgerConnection({
  ledger,
  hasWalletConnect,
  getWalletConnectProvider,
  cacheSelectedWallet,
  latestConnectTypeRef,
  deviceSelectModal = 'default',
  onUSBDisconnect,
  onError,
}: UseLedgerConnectionParams): UseLedgerConnectionReturn {
  const [account, setAccount] = useState<Account | undefined>(undefined);
  const [phase, setPhase] = useState<USBConnectionPhase>('idle');
  const [pendingDevices, setPendingDevices] = useState<DiscoveredDevice[]>([]);

  const accountRef = useCallbackRef(account);
  const onUSBDisconnectRef = useCallbackRef(onUSBDisconnect);
  const onErrorRef = useCallbackRef(onError);
  const connectingRef = useRef(false);
  const cancelledRef = useRef(false);

  // Monitor 状态（currentApp, deviceModel, sessionId, disconnected）
  const [monitorState, setMonitorState] = useState<USBDeviceState>({ phase: 'idle' });

  useEffect(() => {
    return ledger.usbStatusMonitor.onChange(setMonitorState);
  }, [ledger]);

  // 合并 usbStatus：phase 和 pendingDevices 来自 Hook，其余来自 monitor
  const usbStatus: USBDeviceState = {
    phase,
    pendingDevices: pendingDevices.length > 0 ? pendingDevices : undefined,
    currentApp: monitorState.currentApp,
    deviceModel: monitorState.deviceModel,
    sessionId: monitorState.sessionId,
  };

  // 错误状态
  const [lastError, setLastError] = useState<LedgerErrorEvent | null>(null);
  const clearError = useCallback(() => setLastError(null), []);

  useEffect(() => {
    return ledger.onError((event) => {
      setLastError(event);
      onErrorRef.current?.(event);
    });
  }, [ledger, onErrorRef]);

  // USB 物理断开检测：monitor 报告 disconnected 时清理
  useEffect(() => {
    if (monitorState.phase === 'disconnected' && latestConnectTypeRef.current === 'USB') {
      setPhase('idle');
      setPendingDevices([]);
      setAccount(undefined);
      cacheSelectedWallet();
      onUSBDisconnectRef.current?.();
      ledger.disconnectUSB().catch(() => {});
    }
  }, [monitorState.phase, latestConnectTypeRef, cacheSelectedWallet, onUSBDisconnectRef, ledger]);

  // 注入 WalletConnect provider getter
  useEffect(() => {
    if (!hasWalletConnect) return;
    ledger.setWalletConnectProviderGetter(getWalletConnectProvider);
  }, [ledger, hasWalletConnect, getWalletConnectProvider]);

  /** 内部：执行 USB 连接流程（从 connectToDevice 或从 detect 开始） */
  const runUsbConnectFlow = useCallback(
    async (
      device: DiscoveredDevice,
      opts: { silent?: boolean; addressIndex?: string; selectedWallet?: Wallet },
    ) => {
      if (connectingRef.current) return;
      connectingRef.current = true;
      cancelledRef.current = false;

      const { silent, addressIndex, selectedWallet } = opts;
      const { usbConnection } = ledger;

      try {
        setPhase('detecting');
        await usbConnection.connectToDevice(device);
        if (cancelledRef.current) return;

        const appStatus = await usbConnection.checkAppStatus();
        if (cancelledRef.current) return;

        if (appStatus.type === 'locked') {
          await usbConnection.disconnect();
          setPhase(silent ? 'idle' : 'device_locked');
          return;
        }
        if (appStatus.type === 'app_not_open') {
          await usbConnection.disconnect();
          setPhase(silent ? 'idle' : 'app_not_open');
          return;
        }

        ledger.markUSBConnected();
        clearError();
        if (selectedWallet) {
          cacheSelectedWallet({ walletName: selectedWallet.name, latestConnectType: 'USB' });
        }

        if (addressIndex != null) {
          await usbConnection.setAddressIndex(addressIndex);
          setAccount(ledger.accounts[0]);
          cacheSelectedWallet({
            walletName: ledger.wallet.name,
            latestConnectType: 'USB',
            lastAddressIndex: addressIndex,
          });
          setPhase('connected');
        } else {
          setPhase('selecting_address');
        }
      } catch (e) {
        if (!silent) {
          setLastError({
            code: e instanceof Error && 'code' in e ? (e as any).code : 'CONNECTION_FAILED',
            phase: 'usb:connect',
            message: e instanceof Error ? e.message : String(e),
            raw: e instanceof Error ? e : undefined,
          });
        }
        setPhase(silent ? 'idle' : 'no_device');
      } finally {
        connectingRef.current = false;
      }
    },
    [ledger, cacheSelectedWallet, clearError],
  );

  const connect = useCallback(
    async (selected?: Wallet, options?: ConnectOptions) => {
      if (!selected) return undefined;
      if (selected.name !== ledger.wallet.name) return undefined;

      // WalletConnect 路径
      if (options?.connectType === 'qrCode') {
        const isRestoreSession = (options as LedgerConnectOptions)?.restoreSession;
        if (!isRestoreSession) {
          await ledger.disconnectWalletConnect();
        }
        try {
          const wcAccount = await ledger.connectWalletConnect();
          clearError();
          cacheSelectedWallet({ walletName: selected.name, latestConnectType: 'WalletConnect' });
          setAccount(wcAccount);
          return wcAccount;
        } catch (e) {
          setLastError({
            code: e instanceof Error && 'code' in e ? (e as any).code : 'CONNECTION_FAILED',
            phase: 'wc:connect',
            message: e instanceof Error ? e.message : String(e),
            raw: e instanceof Error ? e : undefined,
          });
          throw e;
        }
      }

      // USB 路径：状态机驱动
      const opts = options as LedgerConnectOptions | undefined;
      const silent = opts?.silent ?? false;
      const addressIndex = opts?.addressIndex;

      await ledger.disconnectUSB();

      const detect = await ledger.usbConnection.detectDevices(silent);
      if (detect.type === 'no_device') {
        setPhase(silent ? 'idle' : 'no_device');
        return undefined;
      }
      if (detect.type === 'multiple_devices') {
        if (silent) {
          setPhase('idle');
          return undefined;
        }
        // deviceSelectModal === 'default'：仅使用浏览器原生 HID 选择器
        if (deviceSelectModal === 'default') {
          try {
            const device = await ledger.availableDevices.discover();
            await runUsbConnectFlow(device, {
              silent,
              addressIndex,
              selectedWallet: selected,
            });
          } catch {
            setPhase(silent ? 'idle' : 'no_device');
          }
          return undefined;
        }
        // deviceSelectModal === true 或自定义组件：使用应用内 Modal
        setPendingDevices(detect.devices);
        setPhase('multiple_devices');
        return undefined;
      }

      await runUsbConnectFlow(detect.device, {
        silent,
        addressIndex,
        selectedWallet: selected,
      });
      return undefined;
    },
    [ledger, cacheSelectedWallet, clearError, runUsbConnectFlow, deviceSelectModal],
  );

  const disconnect = useCallback(async () => {
    cancelledRef.current = true;
    setPhase('idle');
    setPendingDevices([]);
    await ledger.disconnect();
    cacheSelectedWallet();
    setAccount(undefined);
  }, [ledger, cacheSelectedWallet]);

  const retryConnect = useCallback(async () => {
    await connect(ledger.wallet);
  }, [connect, ledger.wallet]);

  const selectDevice = useCallback(
    async (device: DiscoveredDevice) => {
      setPendingDevices([]);
      setPhase('detecting');
      try {
        await runUsbConnectFlow(device, { selectedWallet: ledger.wallet });
      } catch {
        // 错误已由 runUsbConnectFlow 设置
      }
    },
    [ledger.wallet, runUsbConnectFlow],
  );

  const confirmAddress = useCallback(
    async (index: string) => {
      try {
        await ledger.setAddressIndex(index);
        setAccount(ledger.accounts[0]);
        setPhase('connected');
        cacheSelectedWallet({
          walletName: ledger.wallet.name,
          latestConnectType: 'USB',
          lastAddressIndex: index,
        });
      } catch (e) {
        setLastError({
          code: e instanceof Error && 'code' in e ? (e as any).code : 'CANNOT_GET_ADDRESS',
          phase: 'usb:getAddress',
          message: e instanceof Error ? e.message : String(e),
          raw: e instanceof Error ? e : undefined,
        });
      }
    },
    [ledger, cacheSelectedWallet],
  );

  const cancelConnect = useCallback(async () => {
    cancelledRef.current = true;
    setPhase('idle');
    setPendingDevices([]);
    await ledger.disconnect();
    cacheSelectedWallet();
    setAccount(undefined);
  }, [ledger, cacheSelectedWallet]);

  const handleDiscoverMore = useCallback(async () => {
    try {
      await ledger.availableDevices.discover();
      setPendingDevices([...ledger.getAvailableDevices()]);
    } catch {
      // 静默失败
    }
  }, [ledger]);

  const actions: LedgerConnectionActions = {
    selectDevice,
    confirmAddress,
    cancelConnect,
    retryConnect,
    discoverMore: handleDiscoverMore,
  };

  return {
    account,
    setAccount,
    accountRef,
    usbStatus,
    lastError,
    clearError,
    connect,
    disconnect,
    phase,
    pendingDevices,
    actions,
    awaitingAddressIndex: phase === 'selecting_address',
    awaitingDeviceSelect: phase === 'multiple_devices',
    completeUsbConnectWithAddressIndex: confirmAddress,
    cancelUsbConnectWithAddressIndex: cancelConnect,
    handleDeviceSelected: selectDevice,
    handleDeviceSelectCancel: cancelConnect,
    handleDiscoverMore,
  };
}
