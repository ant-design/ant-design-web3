import { useCallback, useEffect, useRef, useState } from 'react';
import type { UniversalProviderOpts } from '@walletconnect/universal-provider';

import type { IUniversalProvider } from '../types';

export const useWalletConnectProvider = (walletConnect?: UniversalProviderOpts) => {
  const [promiseResolves, setPromiseResolves] = useState<((value: IUniversalProvider) => void)[]>(
    [],
  );
  const [mounted, setMounted] = useState(false);

  const [walletConnectProvider, setWalletConnectProvider] = useState<IUniversalProvider | null>(
    null,
  );
  const promiseResolvesRef = useLatest(promiseResolves);

  /* v8 ignore next 9 */
  const getWalletConnectProvider = useCallback(async () => {
    if (walletConnectProvider) return Promise.resolve(walletConnectProvider);

    const promise = new Promise<IUniversalProvider>((resolve) => {
      setPromiseResolves((prev) => [...prev, resolve]);
    });

    return promise;
  }, [walletConnectProvider]);

  useEffect(() => {
    if (mounted || !walletConnect) return;

    setMounted(true);

    import('@walletconnect/universal-provider').then(async ({ UniversalProvider }) => {
      /* v8 ignore next 7 */
      const provider = await UniversalProvider.init(walletConnect);

      setWalletConnectProvider(provider);

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
