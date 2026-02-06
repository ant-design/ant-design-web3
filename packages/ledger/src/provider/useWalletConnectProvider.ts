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
  // const getWalletConnectProvider = useCallback(async () => {
  //   // Use ref instead of state to avoid recreating this function
  //   if (walletConnectProviderRef.current) return Promise.resolve(walletConnectProviderRef.current);

  //   const promise = new Promise<IUniversalProvider>((resolve) => {
  //     setPromiseResolves((prev) => [...prev, resolve]);
  //   });

  //   return promise;
  // }, []); // Remove walletConnectProvider dependency to stabilize function reference
  const getWalletConnectProvider = useCallback(async () => {
    // 如果已经有实例，直接返回
    if (walletConnectProviderRef.current) {
      return Promise.resolve(walletConnectProviderRef.current);
    }

    // 如果正在初始化，等待初始化完成
    if (!mounted && walletConnect) {
      const promise = new Promise<IUniversalProvider>((resolve) => {
        setPromiseResolves((prev) => [...prev, resolve]);
      });
      return promise;
    }

    // 如果没有配置或初始化失败，抛出错误
    throw new Error('WalletConnect not configured');
  }, [mounted, walletConnect]);

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
