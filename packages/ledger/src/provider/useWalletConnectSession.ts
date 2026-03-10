import { useEffect } from 'react';
import type { Account, ConnectOptions, Wallet } from '@ant-design/web3-common';

import type { Ledger } from '../ledger';
import type { LedgerConnectOptions } from '../types';
import { useCallbackRef } from './useCallbackRef';
import type { LatestWalletParams, LedgerConnectType } from './useLatestWallet';

/**
 * WalletConnect 会话恢复 Hook。
 *
 * 在组件挂载时检测是否存在可恢复的 WalletConnect 会话：
 * - 如果 provider 已有 session，立即尝试恢复连接
 * - 否则通过轮询（最多 15 次，间隔 200ms）等待 session 建立
 * - 监听 session_event / session_establish / session_delete 事件
 * - 所有异步操作都有 mounted 检查，组件卸载时安全清理
 */
export interface UseWalletConnectSessionParams {
  hasWalletConnect: boolean;
  getWalletConnectProvider: () => Promise<any>;
  ledger: Ledger;
  connect: (wallet?: Wallet, options?: ConnectOptions) => Promise<Account | undefined>;
  accountRef: React.RefObject<Account | undefined>;
  setAccount: (account: Account | undefined) => void;
  cacheSelectedWallet: (params?: LatestWalletParams) => void;
  latestConnectTypeRef: React.RefObject<LedgerConnectType | undefined>;
}

export function useWalletConnectSession({
  hasWalletConnect,
  getWalletConnectProvider,
  ledger,
  connect,
  accountRef,
  setAccount,
  cacheSelectedWallet,
  latestConnectTypeRef,
}: UseWalletConnectSessionParams): void {
  const connectRef = useCallbackRef(connect);

  useEffect(() => {
    if (!hasWalletConnect || latestConnectTypeRef.current === 'USB') return;

    let mounted = true;
    let cleanup: (() => void) | undefined;

    const checkSession = async () => {
      try {
        const provider = await getWalletConnectProvider();

        const handleSessionEvent = () => {
          if (!mounted) return;
          if (provider.session && !accountRef.current) {
            const accounts = provider.session.namespaces.eip155?.accounts || [];
            if (accounts.length > 0) {
              connectRef
                .current(ledger.wallet, {
                  connectType: 'qrCode',
                  restoreSession: true,
                } as LedgerConnectOptions)
                .catch(() => {});
            }
          }
        };

        const handleSessionDelete = () => {
          if (!mounted) return;
          if (latestConnectTypeRef.current === 'WalletConnect') {
            setAccount(undefined);
            cacheSelectedWallet();
          }
        };

        const POLL_INTERVAL_MS = 200;
        const POLL_MAX_ATTEMPTS = 15;

        let recheckTimer: ReturnType<typeof setTimeout> | undefined;
        if (provider.session) {
          handleSessionEvent();
        } else {
          let attempts = 0;
          const pollSession = () => {
            if (!mounted || attempts >= POLL_MAX_ATTEMPTS) return;
            attempts += 1;
            if (provider.session) {
              handleSessionEvent();
              return;
            }
            recheckTimer = setTimeout(pollSession, POLL_INTERVAL_MS);
          };
          recheckTimer = setTimeout(pollSession, POLL_INTERVAL_MS);
        }

        provider.on('session_event', handleSessionEvent);
        provider.on('session_establish', handleSessionEvent);
        provider.on('session_delete', handleSessionDelete);

        cleanup = () => {
          if (recheckTimer !== undefined) clearTimeout(recheckTimer);
          provider.off('session_event', handleSessionEvent);
          provider.off('session_establish', handleSessionEvent);
          provider.off('session_delete', handleSessionDelete);
        };
      } catch (err) {
        console.warn('[Ledger] WalletConnect session check failed:', err);
      }
    };

    checkSession();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, [
    hasWalletConnect,
    getWalletConnectProvider,
    ledger,
    cacheSelectedWallet,
    latestConnectTypeRef,
    connectRef,
    accountRef,
    setAccount,
  ]);
}

/**
 * USB 自动重连 Hook。
 *
 * 当 autoConnect 为 true 且上次连接类型为 USB 时，复用 connect() 状态机：
 * - 调用 connect(wallet, { silent: true, addressIndex: cached })
 * - 静默模式下无设备/多设备/App 未就绪时直接回退到 idle，不弹错误
 * - 成功时 connect 内部已更新 account 和 cache
 */
export interface UseUSBAutoReconnectParams {
  autoConnect: boolean;
  ledger: Ledger;
  connectRef: React.RefObject<
    (
      wallet?: import('@ant-design/web3-common').Wallet,
      options?: ConnectOptions,
    ) => Promise<Account | undefined>
  >;
  latestConnectTypeRef: React.RefObject<LedgerConnectType | undefined>;
  latestWalletNameRef: React.RefObject<string | undefined>;
  lastAddressIndexRef: React.RefObject<string | undefined>;
}

export function useUSBAutoReconnect({
  autoConnect,
  ledger,
  connectRef,
  latestConnectTypeRef,
  latestWalletNameRef,
  lastAddressIndexRef,
}: UseUSBAutoReconnectParams): void {
  useEffect(() => {
    if (
      !autoConnect ||
      latestConnectTypeRef.current !== 'USB' ||
      !latestWalletNameRef.current ||
      ledger.wallet.name !== latestWalletNameRef.current
    ) {
      return;
    }

    connectRef
      .current?.(ledger.wallet, {
        silent: true,
        addressIndex: lastAddressIndexRef.current ?? '0',
      } as LedgerConnectOptions)
      ?.catch(() => {
        // 静默模式：所有失败均忽略，不产生 unhandled rejection
      });
  }, [
    autoConnect,
    ledger,
    connectRef,
    latestConnectTypeRef,
    latestWalletNameRef,
    lastAddressIndexRef,
  ]);
}
