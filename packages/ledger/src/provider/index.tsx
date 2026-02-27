import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type FC,
  type PropsWithChildren,
} from 'react';
import type { Account, ConnectOptions, Locale, Wallet } from '@ant-design/web3-common';
import { ConfigContext, Web3ConfigProvider } from '@ant-design/web3-common';
import type { UniversalProviderOpts } from '@walletconnect/universal-provider';

import { Ledger } from '../ledger';
import type { LedgerConnectOptions } from '../types';
import {
  LedgerAddressIndexModal,
  type LedgerAddressIndexModalProps,
} from './LedgerAddressIndexModal';
import { useLatestWallet } from './useLatestWallet';
import { useWalletConnectProvider } from './useWalletConnectProvider';

export type { LedgerAddressIndexModalProps };

// Stable default instance to avoid creating a new Ledger on every render
const DEFAULT_LEDGER = new Ledger();

export interface LedgerWeb3ConfigProviderProps {
  ledger?: Ledger;
  locale?: Locale;
  autoConnect?: boolean;
  walletConnect?: UniversalProviderOpts & {
    useWalletConnectOfficialModal?: boolean;
  };
  /** 自定义 USB 连接后「选择地址序号」弹窗；不传则使用默认 LedgerAddressIndexModal */
  addressIndexModal?: ComponentType<LedgerAddressIndexModalProps>;
}

export const LedgerWeb3ConfigProvider: FC<PropsWithChildren<LedgerWeb3ConfigProviderProps>> = ({
  children,
  ledger = DEFAULT_LEDGER,
  locale,
  autoConnect = false,
  walletConnect,
  addressIndexModal: AddressIndexModalFromProps,
}) => {
  // 获取父级上下文
  const parentContext = useContext(ConfigContext);
  // 获取 walletConnect 客户端实例
  const getWalletConnectProvider = useWalletConnectProvider(walletConnect);
  // 是否配置了 walletConnect（布尔值，跨对象引用变化时保持稳定）
  const hasWalletConnect = Boolean(walletConnect);

  const [account, setAccount] = useState<Account | undefined>(undefined);
  const [awaitingAddressIndex, setAwaitingAddressIndex] = useState(false);
  const { cacheSelectedWallet, latestWalletNameRef, latestConnectTypeRef, lastAddressIndexRef } =
    useLatestWallet();

  const accountRef = useRef(account);
  accountRef.current = account;

  // Set WalletConnect provider getter and connect type getter on ledger instance
  useEffect(() => {
    ledger.setConnectTypeGetter(() => latestConnectTypeRef.current);
  }, [ledger, latestConnectTypeRef]);

  useEffect(() => {
    if (!hasWalletConnect) return;
    ledger.setWalletConnectProviderGetter(getWalletConnectProvider);
  }, [ledger, hasWalletConnect, getWalletConnectProvider]);

  const connect = useCallback(
    async (selected?: Wallet, options?: ConnectOptions) => {
      if (!selected) {
        return;
      }
      if (selected.name !== ledger.wallet.name) return undefined;
      // Check if using WalletConnect
      if (options?.connectType === 'qrCode') {
        const isRestoreSession = (options as LedgerConnectOptions)?.restoreSession;
        if (!isRestoreSession) {
          await ledger.disconnectWalletConnect();
        }
        const wcAccount = await ledger.connectWalletConnect();
        cacheSelectedWallet({ walletName: selected.name, latestConnectType: 'WalletConnect' });
        setAccount(wcAccount);
        return wcAccount;
      } else {
        // USB: connect device then show address-index modal (ConnectModal will close)
        await ledger.disconnect();
        await ledger.connectUSB();
        cacheSelectedWallet({ walletName: selected.name, latestConnectType: 'USB' });
        setAwaitingAddressIndex(true);
        return undefined;
      }
    },
    [ledger, cacheSelectedWallet],
  );

  // Use ref for connect to avoid it being a dependency of the session effect
  const connectRef = useRef(connect);
  connectRef.current = connect;

  // Listen for WalletConnect session establishment
  useEffect(() => {
    if (!hasWalletConnect || latestConnectTypeRef.current === 'USB') return;

    let mounted = true;
    let cleanup: (() => void) | undefined;

    const checkSession = async () => {
      try {
        const provider = await getWalletConnectProvider();

        // Listen for session establishment
        const handleSessionEvent = () => {
          if (!mounted) return;

          // Only restore when we have session but no account yet (avoid double connect)
          if (provider.session && !accountRef.current) {
            // Check if this is the Ledger wallet session
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
      } catch {
        // Ignore errors
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
  ]);

  const disconnect = useCallback(async () => {
    setAwaitingAddressIndex(false);
    if (latestConnectTypeRef.current === 'WalletConnect') {
      await ledger.disconnectWalletConnect();
    } else {
      await ledger.disconnect();
    }
    cacheSelectedWallet();
    setAccount(undefined);
  }, [ledger, cacheSelectedWallet, latestConnectTypeRef]);

  const completeUsbConnectWithAddressIndex = useCallback(
    async (index: string) => {
      await ledger.setAddressIndex(index);
      setAccount(ledger.accounts[0]);
      setAwaitingAddressIndex(false);
      cacheSelectedWallet({
        walletName: ledger.wallet.name,
        latestConnectType: 'USB',
        lastAddressIndex: index,
      });
    },
    [ledger, cacheSelectedWallet],
  );

  const cancelUsbConnectWithAddressIndex = useCallback(async () => {
    setAwaitingAddressIndex(false);
    await ledger.disconnect();
    cacheSelectedWallet();
    setAccount(undefined);
  }, [ledger, cacheSelectedWallet]);

  // USB 自动重连（使用上次保存的地址序号，无则用 0）
  useEffect(() => {
    (async () => {
      if (
        !autoConnect ||
        latestConnectTypeRef.current !== 'USB' ||
        !latestWalletNameRef.current ||
        ledger.wallet.name !== latestWalletNameRef.current
      ) {
        return;
      }
      const savedIndex = lastAddressIndexRef.current;
      const addressIndex = savedIndex ?? '0';
      try {
        await ledger.disconnect();
        await ledger.connectUSB(true);
        await ledger.setAddressIndex(addressIndex);
        setAccount(ledger.accounts[0]);
      } catch (e: any) {
        const isNoDevice = e?.code === 'NO_DEVICE' || e?.message?.includes('No available devices');
        if (!isNoDevice) throw e;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoConnect, ledger]);

  // wcGetterReady: re-run after effect sets ledger's provider getter so getWallet() can include getQrCode
  const wallet: Wallet = useMemo(
    () => ({
      ...ledger.wallet,
      getQrCode: hasWalletConnect
        ? async () => {
            const provider = await getWalletConnectProvider();
            return new Promise<{ uri: string }>((resolve) => {
              // Check if already connected and has URI
              if (provider.session) {
                // If already connected, we might not get display_uri event
                // Try to get URI from provider state if available
                const uri = (provider as any).uri;
                if (uri) {
                  resolve({ uri });
                  return;
                }
              }

              // Listen for display_uri event
              provider.on('display_uri', (uri: string) => {
                resolve({ uri });
              });
            });
          }
        : undefined,
      customQrCodePanel: walletConnect?.useWalletConnectOfficialModal || false,
    }),
    [
      ledger.wallet,
      hasWalletConnect,
      getWalletConnectProvider,
      walletConnect?.useWalletConnectOfficialModal,
    ],
  );

  // Merge wallets: parent wallets (Wagmi/Solana) + Ledger; replace any existing Ledger by name to avoid duplicates
  const mergedAvailableWallets = useMemo(() => {
    const parentWallets = parentContext?.availableWallets ?? [];
    const ledgerName = ledger.wallet.name;
    const withoutLedger = parentWallets.filter((w) => w.name !== ledgerName);
    return [...withoutLedger, wallet];
  }, [parentContext?.availableWallets, ledger.wallet.name, wallet]);

  // Proxy connect: delegate to parent for non-Ledger wallets
  const parentConnectRef = useRef(parentContext?.connect);
  parentConnectRef.current = parentContext?.connect;

  const mergedConnect = useCallback(
    async (selected?: Wallet, options?: ConnectOptions) => {
      if (selected?.name === ledger.wallet.name) {
        // Use Ledger connect logic
        return connect(selected, options);
      }
      // Delegate to parent connect (Wagmi/Solana
      return parentConnectRef.current?.(selected, options);
    },
    [connect, ledger.wallet.name],
  );

  // Proxy disconnect: disconnect Ledger if it's active, otherwise delegate to parent
  const parentDisconnectRef = useRef(parentContext?.disconnect);
  parentDisconnectRef.current = parentContext?.disconnect;

  const mergedDisconnect = useCallback(async () => {
    if (accountRef.current) {
      // Ledger is connected, disconnect Ledger
      return disconnect();
    }
    // Delegate to parent disconnect (Wagmi/Solana)
    return parentDisconnectRef.current?.();
  }, [disconnect]);

  // Merge account: Ledger account takes precedence, otherwise use parent account
  const mergedAccount = account ?? parentContext?.account;

  const AddressIndexModalComponent = AddressIndexModalFromProps ?? LedgerAddressIndexModal;

  return (
    <Web3ConfigProvider
      locale={locale}
      account={mergedAccount}
      connect={mergedConnect}
      disconnect={mergedDisconnect}
      availableWallets={mergedAvailableWallets}
    >
      <AddressIndexModalComponent
        open={awaitingAddressIndex}
        ledger={ledger}
        onConfirm={completeUsbConnectWithAddressIndex}
        onCancel={cancelUsbConnectWithAddressIndex}
      />
      {children}
    </Web3ConfigProvider>
  );
};
