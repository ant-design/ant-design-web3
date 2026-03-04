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
  type PendingPromise = {
    resolve: (value: IUniversalProvider) => void;
    reject: (reason?: any) => void;
  };
  const promiseResolvesRef = useRef<PendingPromise[]>([]);
  const walletConnectRef = useRef(walletConnect);

  useEffect(() => {
    walletConnectRef.current = walletConnect;
  }, [walletConnect]);

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
      return new Promise<IUniversalProvider>((resolve, reject) => {
        promiseResolvesRef.current = [...promiseResolvesRef.current, { resolve, reject }];
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
          const pending = promiseResolvesRef.current;
          promiseResolvesRef.current = [];
          pending.forEach((p) => p.resolve(cached));
          return;
        }
      }
      try {
        const { UniversalProvider } = await import('@walletconnect/universal-provider');
        const storagePrefix =
          (walletConnect as { customStoragePrefix?: string }).customStoragePrefix ??
          'ant_ledger_wc_';
        const provider = await UniversalProvider.init({
          ...walletConnect,
          customStoragePrefix: storagePrefix,
        } as typeof walletConnect);
        walletConnectProviderRef.current = provider;
        if (key) providerCache.set(key, provider);
        const pending = promiseResolvesRef.current;
        promiseResolvesRef.current = [];
        pending.forEach((p) => p.resolve(provider));
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        const pending = promiseResolvesRef.current;
        promiseResolvesRef.current = [];
        pending.forEach((p) => p.reject(error));
      }
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
