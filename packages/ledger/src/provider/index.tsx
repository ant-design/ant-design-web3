import { useCallback, useEffect, useState, type FC, type PropsWithChildren } from 'react';
import type { Account, ConnectOptions, Locale, Wallet } from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import type { UniversalProviderOpts } from '@walletconnect/universal-provider';

import { Ledger } from '../ledger';
import { useLatestWallet } from './useLatestWallet';
import { useWalletConnectProvider } from './useWalletConnectProvider';

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
  ledger = new Ledger(),
  locale,
  autoConnect = false,
  walletConnect,
}) => {
  const [account, setAccount] = useState<Account | undefined>(undefined);
  const [isWalletConnectConnected, setIsWalletConnectConnected] = useState(false);
  const { cacheSelectedWallet, latestWalletNameRef } = useLatestWallet();
  const getWalletConnectProvider = useWalletConnectProvider(walletConnect);

  // Set WalletConnect provider getter on ledger instance
  useEffect(() => {
    if (walletConnect) {
      ledger.setWalletConnectProviderGetter(getWalletConnectProvider);
    }
  }, [ledger, walletConnect, getWalletConnectProvider]);

  const connect = useCallback(
    async (selected?: Wallet, options?: ConnectOptions) => {
      if (!selected) {
        return;
      }
      if (selected.name === ledger.wallet.name) {
        // Check if using WalletConnect
        if (options?.connectType === 'qrCode' && walletConnect) {
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
    [ledger, walletConnect, cacheSelectedWallet],
  );

  // Listen for WalletConnect session establishment
  useEffect(() => {
    if (!walletConnect) return;

    let mounted = true;
    let providerInstance: any = null;
    let cleanup: (() => void) | undefined;

    const checkSession = async () => {
      try {
        const provider = await getWalletConnectProvider();
        providerInstance = provider;

        // Listen for session establishment
        const handleSessionEvent = () => {
          if (!mounted) return;

          // If session is established and we're in QR code mode, try to connect
          if (provider.session && !isWalletConnectConnected && !account) {
            // Check if this is the Ledger wallet session
            const accounts = provider.session.namespaces.eip155?.accounts || [];
            if (accounts.length > 0) {
              // Auto-connect when session is established
              connect(ledger.wallet, { connectType: 'qrCode' }).catch(() => {
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

          // If WalletConnect was connected, clear the connection state
          if (isWalletConnectConnected) {
            setIsWalletConnectConnected(false);
            setAccount(undefined);
            cacheSelectedWallet();
          }
        };
        provider.on('session_delete', handleSessionDelete);

        cleanup = () => {
          if (providerInstance) {
            providerInstance.off('session_event', handleSessionEvent);
            providerInstance.off('session_establish', handleSessionEvent);
            providerInstance.off('session_delete', handleSessionDelete);
          }
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
    walletConnect,
    getWalletConnectProvider,
    ledger,
    isWalletConnectConnected,
    account,
    connect,
    cacheSelectedWallet,
  ]);

  const disconnect = async () => {
    if (isWalletConnectConnected) {
      await ledger.disconnectWalletConnect();
      setIsWalletConnectConnected(false);
    } else {
      await ledger.disconnect();
    }
    cacheSelectedWallet();
    setAccount(undefined);
  };

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
  const wallet: Wallet = {
    ...ledger.wallet,
    getQrCode: walletConnect
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
              console.log('display_uri', uri);
              resolve({ uri });
            });
          });
        }
      : undefined,
    customQrCodePanel: walletConnect?.useWalletConnectOfficialModal || false,
  };

  return (
    <Web3ConfigProvider
      locale={locale}
      account={account}
      connect={connect}
      disconnect={disconnect}
      availableWallets={[wallet]}
    >
      {children}
    </Web3ConfigProvider>
  );
};
