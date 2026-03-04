import { useCallback, useMemo, useRef } from 'react';

/**
 * 上次连接钱包信息的持久化 Hook。
 *
 * 通过 localStorage 缓存：
 * - 钱包名称（walletName）
 * - 连接类型（USB / WalletConnect）
 * - 上次选择的地址序号（lastAddressIndex）
 *
 * 所有 localStorage 操作均有 SSR 兼容保护（typeof window 守卫 + try/catch），
 * 在服务端渲染和隐私浏览模式下安全降级。
 */

const LATEST_WALLET_STORAGE_KEY = 'ANT_DESIGN_WEB3_LEDGER_LATEST_WALLET';
const LATEST_CONNECT_TYPE_KEY = 'ANT_DESIGN_WEB3_LEDGER_LATEST_CONNECT_TYPE';
const LAST_ADDRESS_INDEX_KEY = 'ANT_DESIGN_WEB3_LEDGER_LAST_ADDRESS_INDEX';

export type LedgerConnectType = 'USB' | 'WalletConnect';

export type LatestWalletParams = {
  walletName?: string;
  latestConnectType?: LedgerConnectType;
  lastAddressIndex?: string;
};

function safeGetItem(key: string): string | null {
  try {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    if (typeof window !== 'undefined') localStorage.setItem(key, value);
  } catch {
    // Ignore storage errors (private browsing, quota exceeded, etc.)
  }
}

function safeRemoveItem(key: string): void {
  try {
    if (typeof window !== 'undefined') localStorage.removeItem(key);
  } catch {
    // Ignore storage errors
  }
}

function getStorageInitial(): LatestWalletParams {
  const walletName = safeGetItem(LATEST_WALLET_STORAGE_KEY) ?? undefined;
  const t = safeGetItem(LATEST_CONNECT_TYPE_KEY);
  const latestConnectType =
    t === 'USB' || t === 'WalletConnect' ? (t as LedgerConnectType) : undefined;
  const lastAddressIndex = safeGetItem(LAST_ADDRESS_INDEX_KEY) ?? undefined;
  return { walletName, latestConnectType, lastAddressIndex };
}

export const useLatestWallet = () => {
  const initial = useMemo(() => getStorageInitial(), []);
  const latestWalletNameRef = useRef<string | undefined>(initial.walletName);
  const latestConnectTypeRef = useRef<LedgerConnectType | undefined>(initial.latestConnectType);
  const lastAddressIndexRef = useRef<string | undefined>(initial.lastAddressIndex);

  const cacheSelectedWallet = useCallback(
    ({ walletName, latestConnectType, lastAddressIndex }: LatestWalletParams = {}) => {
      if (walletName) {
        safeSetItem(LATEST_WALLET_STORAGE_KEY, walletName);
        latestWalletNameRef.current = walletName;
      } else {
        safeRemoveItem(LATEST_WALLET_STORAGE_KEY);
        latestWalletNameRef.current = undefined;
      }
      if (latestConnectType) {
        safeSetItem(LATEST_CONNECT_TYPE_KEY, latestConnectType);
        latestConnectTypeRef.current = latestConnectType;
      } else {
        safeRemoveItem(LATEST_CONNECT_TYPE_KEY);
        latestConnectTypeRef.current = undefined;
      }
      if (lastAddressIndex) {
        safeSetItem(LAST_ADDRESS_INDEX_KEY, lastAddressIndex);
        lastAddressIndexRef.current = lastAddressIndex;
      } else {
        safeRemoveItem(LAST_ADDRESS_INDEX_KEY);
        lastAddressIndexRef.current = undefined;
      }
    },
    [],
  );

  return {
    latestWalletNameRef,
    latestConnectTypeRef,
    lastAddressIndexRef,
    cacheSelectedWallet,
  };
};
