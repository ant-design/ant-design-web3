import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import type { Account, ConnectOptions, Locale, Wallet } from '@ant-design/web3-common';
import { ConfigContext, Web3ConfigProvider } from '@ant-design/web3-common';
import type { UniversalProviderOpts } from '@walletconnect/universal-provider';

import { Ledger } from '../ledger';
import { useLatestWallet } from './useLatestWallet';
import { useWalletConnectProvider } from './useWalletConnectProvider';

// Stable default instance to avoid creating a new Ledger on every render
const DEFAULT_LEDGER = new Ledger();

export interface LedgerWeb3ConfigProviderProps {
  ledger?: Ledger;
  locale?: Locale;
  autoConnect?: boolean;
  walletConnect?: UniversalProviderOpts & {
    useWalletConnectOfficialModal?: boolean;
  };
}

export const LedgerWeb3ConfigProvider: FC<PropsWithChildren<LedgerWeb3ConfigProviderProps>> = ({
  children,
  ledger = DEFAULT_LEDGER,
  locale,
  autoConnect = false,
  walletConnect,
}) => {
  // Read parent context to merge wallets with parent providers (e.g. Wagmi, Solana)
  const parentContext = useContext(ConfigContext);

  const [account, setAccount] = useState<Account | undefined>(undefined);
  const [isWalletConnectConnected, setIsWalletConnectConnected] = useState(false);
  const { cacheSelectedWallet, latestWalletNameRef } = useLatestWallet();
  const getWalletConnectProvider = useWalletConnectProvider(walletConnect);

  // Use refs for values that should NOT trigger the session effect to re-run
  const isWalletConnectConnectedRef = useRef(isWalletConnectConnected);
  isWalletConnectConnectedRef.current = isWalletConnectConnected;

  const accountRef = useRef(account);
  accountRef.current = account;

  // Whether walletConnect is configured (boolean, stable across object reference changes)
  const hasWalletConnect = !!walletConnect;

  // Ref to hold pending QR code resolve functions and cached URI
  // This ensures display_uri listener is registered BEFORE connect() triggers provider.connect()
  // to avoid the race condition where display_uri fires before getQrCode() registers its listener
  const qrCodeResolveRef = useRef<((value: { uri: string }) => void) | null>(null);

  // Set WalletConnect provider getter on ledger instance
  // AND register global display_uri listener to avoid race condition
  useEffect(() => {
    if (!hasWalletConnect) return;
    ledger.setWalletConnectProviderGetter(getWalletConnectProvider);

    let cleanup: (() => void) | undefined;

    const setup = async () => {
      try {
        const provider = await getWalletConnectProvider();
        const handleDisplayUri = (uri: string) => {
          if (qrCodeResolveRef.current) {
            qrCodeResolveRef.current({ uri });
            qrCodeResolveRef.current = null;
          }
        };
        provider.on('display_uri', handleDisplayUri);
        cleanup = () => {
          provider.off('display_uri', handleDisplayUri);
        };
      } catch {
        // Ignore errors
      }
    };

    setup();

    return () => {
      cleanup?.();
    };
  }, [ledger, hasWalletConnect, getWalletConnectProvider]);

  const connect = useCallback(
    async (selected?: Wallet, options?: ConnectOptions) => {
      if (!selected) {
        return;
      }
      if (selected.name === ledger.wallet.name) {
        // Check if using WalletConnect
        if (options?.connectType === 'qrCode' && hasWalletConnect) {
          try {
            await ledger.disconnectWalletConnect();
            const wcAccount = await ledger.connectWalletConnect();
            cacheSelectedWallet(selected.name);
            setAccount(wcAccount);
            setIsWalletConnectConnected(true);
            return wcAccount;
          } catch (error: any) {
            throw error;
          }
        } else {
          // Use hardware wallet connection
          await ledger.disconnect();
          await ledger.disconnectWalletConnect();
          await ledger.connect();
          cacheSelectedWallet(selected.name);
          const hardwareAccount = ledger.accounts[0];
          setAccount(hardwareAccount);
          setIsWalletConnectConnected(false);
          return hardwareAccount;
        }
      }
      return undefined;
    },
    [ledger, hasWalletConnect, cacheSelectedWallet],
  );

  // Use ref for connect to avoid it being a dependency of the session effect
  const connectRef = useRef(connect);
  connectRef.current = connect;

  // Listen for WalletConnect session establishment
  useEffect(() => {
    if (!hasWalletConnect) return;

    let mounted = true;
    let cleanup: (() => void) | undefined;

    const checkSession = async () => {
      try {
        const provider = await getWalletConnectProvider();

        // Listen for session establishment
        const handleSessionEvent = () => {
          if (!mounted) return;

          // Use refs to read latest values without being in dependency array
          if (provider.session && !isWalletConnectConnectedRef.current && !accountRef.current) {
            // Check if this is the Ledger wallet session
            const accounts = provider.session.namespaces.eip155?.accounts || [];
            if (accounts.length > 0) {
              // Auto-connect when session is established
              connectRef.current(ledger.wallet, { connectType: 'qrCode' }).catch(() => {
                // Ignore errors, user can manually retry
              });
            }
          }
        };

        // Check initial session state
        if (provider.session) {
          handleSessionEvent();
        }

        // Listen for session events
        provider.on('session_event', handleSessionEvent);
        provider.on('session_establish', handleSessionEvent);

        // Listen for session_delete event to handle remote disconnection
        const handleSessionDelete = () => {
          if (!mounted) return;

          // Use ref to read latest value
          if (isWalletConnectConnectedRef.current) {
            setIsWalletConnectConnected(false);
            setAccount(undefined);
            cacheSelectedWallet();
          }
        };
        provider.on('session_delete', handleSessionDelete);

        cleanup = () => {
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
  }, [hasWalletConnect, getWalletConnectProvider, ledger, cacheSelectedWallet]);

  const disconnect = useCallback(async () => {
    if (isWalletConnectConnectedRef.current) {
      await ledger.disconnectWalletConnect();
      setIsWalletConnectConnected(false);
    } else {
      await ledger.disconnect();
    }
    cacheSelectedWallet();
    setAccount(undefined);
  }, [ledger, cacheSelectedWallet]);

  useEffect(() => {
    (async () => {
      if (
        autoConnect &&
        latestWalletNameRef.current &&
        ledger.wallet.name === latestWalletNameRef.current
      ) {
        await ledger.disconnect();
        await ledger.disconnectWalletConnect();
        await ledger.connect(true);
        setAccount(ledger.accounts[0]);
        setIsWalletConnectConnected(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoConnect, ledger]);

  // Create wallet object with getQrCode if WalletConnect is configured
  const wallet: Wallet = useMemo(
    () => ({
      ...ledger.wallet,
      getQrCode: hasWalletConnect
        ? async () => {
            // Return a Promise that will be resolved by the global display_uri listener
            // registered in the useEffect above. This avoids the race condition where
            // connect() fires display_uri before getQrCode() can register its listener.
            return new Promise<{ uri: string }>((resolve) => {
              qrCodeResolveRef.current = resolve;
            });
          }
        : undefined,
      customQrCodePanel: walletConnect?.useWalletConnectOfficialModal || false,
    }),
    [ledger.wallet, hasWalletConnect, walletConnect?.useWalletConnectOfficialModal],
  );

  // Merge wallets: parent context wallets (from Wagmi/Solana) + Ledger wallet
  const mergedAvailableWallets = useMemo(() => {
    const parentWallets = parentContext?.availableWallets || [];
    return [...parentWallets, wallet];
  }, [parentContext?.availableWallets, wallet]);

  // Proxy connect: delegate to parent for non-Ledger wallets
  const parentConnectRef = useRef(parentContext?.connect);
  parentConnectRef.current = parentContext?.connect;

  const mergedConnect = useCallback(
    async (selected?: Wallet, options?: ConnectOptions) => {
      if (!selected) return;
      if (selected.name === ledger.wallet.name) {
        // Use Ledger connect logic
        return connect(selected, options);
      }
      // Delegate to parent connect (Wagmi/Solana)
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

  return (
    <Web3ConfigProvider
      locale={locale}
      account={mergedAccount}
      connect={mergedConnect}
      disconnect={mergedDisconnect}
      availableWallets={mergedAvailableWallets}
    >
      {children}
    </Web3ConfigProvider>
  );
};
