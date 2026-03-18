import { useMemo, type ComponentType, type FC, type PropsWithChildren } from 'react';
import type { Locale } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import type { UniversalProviderOpts } from '@walletconnect/universal-provider';

import { Ledger } from '../ledger';
import type { LedgerErrorEvent } from '../types';
import type { LedgerAddressIndexModalProps } from './LedgerAddressIndexModal';
import { LedgerContext } from './LedgerContext';
import { LedgerDefaultPrompts, type LedgerDefaultPromptsProps } from './LedgerDefaultPrompts';
import {
  type DeviceSelectModalOption,
  type LedgerDeviceSelectModalProps,
} from './LedgerDeviceSelectModal';
import { useCallbackRef } from './useCallbackRef';
import { useLatestWallet } from './useLatestWallet';
import { useLedgerConnection } from './useLedgerConnection';
import { useLedgerWallet } from './useLedgerWallet';
import { useMergedProvider } from './useMergedProvider';
import { useWalletConnectProvider } from './useWalletConnectProvider';
import { useUSBAutoReconnect, useWalletConnectSession } from './useWalletConnectSession';

export type { DeviceSelectModalOption, LedgerAddressIndexModalProps, LedgerDeviceSelectModalProps };
export { LedgerDefaultPrompts };
export type { LedgerDefaultPromptsProps };

/** 稳定的默认 Ledger 实例，避免每次渲染创建新对象 */
const DEFAULT_LEDGER = new Ledger();

/**
 * Ledger Web3 配置提供者组件。
 *
 * 作为 Provider 组装层，将各职责委托给独立的 Hook：
 * - useLatestWallet：持久化上次连接信息
 * - useLedgerConnection：连接/断开/错误/USB 状态管理
 * - useWalletConnectSession：WalletConnect 会话恢复
 * - useUSBAutoReconnect：USB 自动重连
 * - useLedgerWallet：Wallet 对象构造
 * - useMergedProvider：与父级 Provider 上下文合并
 *
 * 内置 LedgerDefaultPrompts（设备选择、地址选择弹窗），通过 LedgerContext 提供 USB 状态和错误信息。
 */
export interface LedgerWeb3ConfigProviderProps {
  ledger?: Ledger;
  locale?: Locale;
  autoConnect?: boolean;
  walletConnect?: UniversalProviderOpts & {
    useWalletConnectOfficialModal?: boolean;
  };
  /** 自定义 USB 连接后「选择地址序号」弹窗；不传则使用默认 LedgerAddressIndexModal */
  addressIndexModal?: ComponentType<LedgerAddressIndexModalProps>;
  /**
   * 多设备时的选择方式。
   * - `'default'`（默认）：仅使用浏览器原生 HID 选择器
   * - `true`：使用内置 LedgerDeviceSelectModal
   * - 自定义组件：使用传入的组件
   */
  deviceSelectModal?: DeviceSelectModalOption;
  /**
   * @desc USB 断开时的回调
   * @descEn Callback when USB is disconnected
   */
  onUSBDisconnect?: () => void;
  /**
   * @desc 各阶段错误回调（命令式通道，适合日志上报 / toast 提示）
   * @descEn Error callback for all phases (imperative channel, suitable for logging / toast)
   */
  onError?: (event: LedgerErrorEvent) => void;
}

export const LedgerWeb3ConfigProvider: FC<PropsWithChildren<LedgerWeb3ConfigProviderProps>> = ({
  children,
  ledger = DEFAULT_LEDGER,
  locale,
  autoConnect = false,
  walletConnect,
  addressIndexModal: AddressIndexModalFromProps,
  deviceSelectModal: DeviceSelectModalFromProps = 'default',
  onUSBDisconnect,
  onError,
}) => {
  const getWalletConnectProvider = useWalletConnectProvider(walletConnect);
  const hasWalletConnect = Boolean(walletConnect);
  const { cacheSelectedWallet, latestWalletNameRef, latestConnectTypeRef, lastAddressIndexRef } =
    useLatestWallet();

  const connection = useLedgerConnection({
    ledger,
    hasWalletConnect,
    getWalletConnectProvider,
    cacheSelectedWallet,
    latestConnectTypeRef,
    deviceSelectModal: DeviceSelectModalFromProps,
    onUSBDisconnect,
    onError,
  });

  useWalletConnectSession({
    hasWalletConnect,
    getWalletConnectProvider,
    ledger,
    connect: connection.connect,
    accountRef: connection.accountRef,
    setAccount: connection.setAccount,
    cacheSelectedWallet,
    latestConnectTypeRef,
  });

  const connectRef = useCallbackRef(connection.connect);
  useUSBAutoReconnect({
    autoConnect,
    ledger,
    connectRef,
    latestConnectTypeRef,
    latestWalletNameRef,
    lastAddressIndexRef,
  });

  const wallet = useLedgerWallet({
    ledger,
    hasWalletConnect,
    useWalletConnectOfficialModal: walletConnect?.useWalletConnectOfficialModal,
  });

  const merged = useMergedProvider({
    account: connection.account,
    accountRef: connection.accountRef,
    connect: connection.connect,
    disconnect: connection.disconnect,
    wallet,
    ledgerWalletName: ledger.wallet.name,
  });

  const ledgerContextValue = useMemo(
    () => ({
      usbStatus: connection.usbStatus,
      lastError: connection.lastError,
      clearError: connection.clearError,
      actions: connection.actions,
      ledger,
      addressIndexModal: AddressIndexModalFromProps,
      deviceSelectModal: DeviceSelectModalFromProps,
    }),
    [
      connection.usbStatus,
      connection.lastError,
      connection.clearError,
      connection.actions,
      ledger,
      AddressIndexModalFromProps,
      DeviceSelectModalFromProps,
    ],
  );

  return (
    <LedgerContext.Provider value={ledgerContextValue}>
      <LedgerDefaultPrompts
        addressIndexModal={AddressIndexModalFromProps}
        deviceSelectModal={DeviceSelectModalFromProps}
      />
      <Web3ConfigProvider
        locale={locale}
        account={merged.mergedAccount}
        connect={merged.mergedConnect}
        disconnect={merged.mergedDisconnect}
        availableWallets={merged.mergedAvailableWallets}
      >
        {children}
      </Web3ConfigProvider>
    </LedgerContext.Provider>
  );
};
