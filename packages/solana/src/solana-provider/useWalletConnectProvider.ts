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
      const provider = await UniversalProvider.init(walletConnect);

      setWalletConnectProvider(provider);

      promiseResolvesRef.current.forEach((resolve) => {
        resolve(provider);
      });

      return () => {
        setMounted(false);
      };
    });
  }, [mounted, promiseResolvesRef, walletConnect]);

  return getWalletConnectProvider;
};

function useLatest<T>(value: T) {
  const ref = useRef<T>(value);
  ref.current = value;
  return ref;
}
