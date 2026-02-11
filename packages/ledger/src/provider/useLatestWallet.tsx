import { useCallback, useMemo, useRef } from 'react';

// USB 链接时缓存上次连接的钱包
const LATEST_WALLET_STORAGE_KEY = 'ANT_DESIGN_WEB3_LEDGER_LATEST_WALLET';
// WalletConnect 链接时缓存
const WALLET_CONNECT_STORAGE_KEY = 'ANT_DESIGN_WEB3_LEDGER_LATEST_WALLET_CONNECT';
// 链接类型
const LATEST_CONNECT_TYPE_KEY = 'ANT_DESIGN_WEB3_LEDGER_LATEST_CONNECT_TYPE';
// 上次链接选取的地址序号
const LAST_ADDRESS_INDEX_KEY = 'ANT_DESIGN_WEB3_LEDGER_LAST_ADDRESS_INDEX';

export type LedgerConnectType = 'USB' | 'WalletConnect';

export type LatestWalletParams = {
  walletName?: string;
  latestConnectType?: LedgerConnectType;
  lastWalletConnect?: string;
  lastAddressIndex?: string;
};

function getStorageInitial(): LatestWalletParams {
  const walletName = localStorage.getItem(LATEST_WALLET_STORAGE_KEY) ?? undefined;
  const t = localStorage.getItem(LATEST_CONNECT_TYPE_KEY);
  const latestConnectType =
    t === 'USB' || t === 'WalletConnect' ? (t as LedgerConnectType) : undefined;
  const lastWalletConnect = localStorage.getItem(WALLET_CONNECT_STORAGE_KEY) ?? undefined;
  const lastAddressIndex = localStorage.getItem(LAST_ADDRESS_INDEX_KEY) ?? undefined;
  return { walletName, latestConnectType, lastWalletConnect, lastAddressIndex };
}

export const useLatestWallet = () => {
  const initial = useMemo(() => getStorageInitial(), []);
  const latestWalletNameRef = useRef<string | undefined>(initial.walletName);
  const latestConnectTypeRef = useRef<LedgerConnectType | undefined>(initial.latestConnectType);
  const lastWalletConnectRef = useRef<string | undefined>(initial.lastWalletConnect);
  const lastAddressIndexRef = useRef<string | undefined>(initial.lastAddressIndex);

  const cacheSelectedWallet = useCallback(
    ({
      walletName,
      latestConnectType,
      lastWalletConnect,
      lastAddressIndex,
    }: LatestWalletParams = {}) => {
      if (walletName) {
        localStorage.setItem(LATEST_WALLET_STORAGE_KEY, walletName);
        latestWalletNameRef.current = walletName;
      } else {
        localStorage.removeItem(LATEST_WALLET_STORAGE_KEY);
        latestWalletNameRef.current = undefined;
      }
      if (latestConnectType) {
        localStorage.setItem(LATEST_CONNECT_TYPE_KEY, latestConnectType);
        latestConnectTypeRef.current = latestConnectType;
      } else {
        localStorage.removeItem(LATEST_CONNECT_TYPE_KEY);
        latestConnectTypeRef.current = undefined;
      }
      if (lastWalletConnect) {
        localStorage.setItem(WALLET_CONNECT_STORAGE_KEY, lastWalletConnect);
        lastWalletConnectRef.current = lastWalletConnect;
      } else {
        localStorage.removeItem(WALLET_CONNECT_STORAGE_KEY);
        lastWalletConnectRef.current = undefined;
      }
      if (lastAddressIndex) {
        localStorage.setItem(LAST_ADDRESS_INDEX_KEY, lastAddressIndex);
        lastAddressIndexRef.current = lastAddressIndex;
      } else {
        localStorage.removeItem(LAST_ADDRESS_INDEX_KEY);
        lastAddressIndexRef.current = undefined;
      }
    },
    [],
  );

  return {
    latestWalletNameRef,
    latestConnectTypeRef,
    lastWalletConnectRef,
    lastAddressIndexRef,
    cacheSelectedWallet,
  };
};
