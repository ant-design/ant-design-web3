import { useCallback, useEffect, useRef } from 'react';
import type { UniversalProviderOpts } from '@walletconnect/universal-provider';

export type IUniversalProvider = Awaited<
  ReturnType<(typeof import('@walletconnect/universal-provider'))['UniversalProvider']['init']>
>;

const providerCache = new Map<string, IUniversalProvider>();

function getCacheKey(opts?: UniversalProviderOpts): string | null {
  const id = opts?.projectId;
  return id != null && String(id).length > 0 ? String(id) : null;
}

export const useWalletConnectProvider = (walletConnect?: UniversalProviderOpts) => {
  const mountedRef = useRef(false);
  const walletConnectProviderRef = useRef<IUniversalProvider | null>(null);
  const promiseResolvesRef = useRef<((value: IUniversalProvider) => void)[]>([]);
  const walletConnectRef = useRef(walletConnect);
  walletConnectRef.current = walletConnect;

  const getWalletConnectProvider = useCallback(async (): Promise<IUniversalProvider> => {
    if (walletConnectProviderRef.current) return walletConnectProviderRef.current;
    const key = getCacheKey(walletConnectRef.current);
    if (key) {
      const cached = providerCache.get(key);
      if (cached) {
        walletConnectProviderRef.current = cached;
        return cached;
      }
    }
    if (walletConnectRef.current) {
      return new Promise<IUniversalProvider>((resolve) => {
        promiseResolvesRef.current = [...promiseResolvesRef.current, resolve];
      });
    }
    throw new Error('WalletConnect not configured');
  }, []);

  useEffect(() => {
    if (mountedRef.current || !walletConnect) return;
    mountedRef.current = true;
    const key = getCacheKey(walletConnect);

    const run = async () => {
      if (key) {
        const cached = providerCache.get(key);
        if (cached) {
          walletConnectProviderRef.current = cached;
          const resolves = promiseResolvesRef.current;
          promiseResolvesRef.current = [];
          resolves.forEach((r) => r(cached));
          return;
        }
      }
      const { UniversalProvider } = await import('@walletconnect/universal-provider');
      // Separate storage prefix so Ledger's session does not conflict with Wagmi when both use same projectId (reduces "Restore will override" / double-init side effects)
      const storagePrefix =
        (walletConnect as { customStoragePrefix?: string }).customStoragePrefix ?? 'ant_ledger_wc_';
      const provider = await UniversalProvider.init({
        ...walletConnect,
        customStoragePrefix: storagePrefix,
      } as typeof walletConnect);
      walletConnectProviderRef.current = provider;
      if (key) providerCache.set(key, provider);
      const resolves = promiseResolvesRef.current;
      promiseResolvesRef.current = [];
      resolves.forEach((r) => r(provider));
    };
    run();
  }, [walletConnect]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return getWalletConnectProvider;
};
