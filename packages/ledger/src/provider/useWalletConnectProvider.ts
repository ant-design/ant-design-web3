import { useCallback, useEffect, useRef, useState } from 'react';
import type { UniversalProviderOpts } from '@walletconnect/universal-provider';

export type IUniversalProvider = Awaited<
  ReturnType<(typeof import('@walletconnect/universal-provider'))['UniversalProvider']['init']>
>;

export const useWalletConnectProvider = (walletConnect?: UniversalProviderOpts) => {
  const [promiseResolves, setPromiseResolves] = useState<((value: IUniversalProvider) => void)[]>(
    [],
  );
  const [mounted, setMounted] = useState(false);

  const [walletConnectProvider, setWalletConnectProvider] = useState<IUniversalProvider | null>(
    null,
  );
  const promiseResolvesRef = useLatest(promiseResolves);

  // Use ref to stabilize the provider reference and avoid infinite loops
  const walletConnectProviderRef = useRef<IUniversalProvider | null>(null);

  /* v8 ignore next 9 */
  const getWalletConnectProvider = useCallback(async () => {
    // Use ref instead of state to avoid recreating this function
    if (walletConnectProviderRef.current) return Promise.resolve(walletConnectProviderRef.current);

    const promise = new Promise<IUniversalProvider>((resolve) => {
      setPromiseResolves((prev) => [...prev, resolve]);
    });

    return promise;
  }, []); // Remove walletConnectProvider dependency to stabilize function reference

  useEffect(() => {
    if (mounted || !walletConnect) return;

    setMounted(true);

    import('@walletconnect/universal-provider').then(async ({ UniversalProvider }) => {
      /* v8 ignore next 7 */
      const provider = await UniversalProvider.init(walletConnect);

      setWalletConnectProvider(provider);
      walletConnectProviderRef.current = provider; // Update ref as well

      promiseResolvesRef.current.forEach((resolve) => {
        resolve(provider);
      });
    });
  }, [mounted, promiseResolvesRef, walletConnect]);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  return getWalletConnectProvider;
};

function useLatest<T>(value: T) {
  const ref = useRef<T>(value);
  ref.current = value;
  return ref;
}
