import { useCallback, useEffect, useRef } from 'react';
import type { UniversalProviderOpts } from '@walletconnect/universal-provider';

export type IUniversalProvider = Awaited<
  ReturnType<(typeof import('@walletconnect/universal-provider'))['UniversalProvider']['init']>
>;

export const useWalletConnectProvider = (walletConnect?: UniversalProviderOpts) => {
  const mountedRef = useRef(false);
  const walletConnectProviderRef = useRef<IUniversalProvider | null>(null);
  const promiseResolvesRef = useRef<((value: IUniversalProvider) => void)[]>([]);
  const walletConnectRef = useRef(walletConnect);
  walletConnectRef.current = walletConnect;

  // Stable function reference - no state dependencies, uses refs only
  const getWalletConnectProvider = useCallback(async (): Promise<IUniversalProvider> => {
    // 如果已经有实例，直接返回
    if (walletConnectProviderRef.current) {
      return walletConnectProviderRef.current;
    }

    // 如果正在初始化，等待初始化完成
    if (walletConnectRef.current) {
      return new Promise<IUniversalProvider>((resolve) => {
        promiseResolvesRef.current = [...promiseResolvesRef.current, resolve];
      });
    }

    // 如果没有配置，抛出错误
    throw new Error('WalletConnect not configured');
  }, []); // Empty deps - stable reference, never changes

  useEffect(() => {
    if (mountedRef.current || !walletConnect) return;
    mountedRef.current = true;

    import('@walletconnect/universal-provider').then(async ({ UniversalProvider }) => {
      /* v8 ignore next 7 */
      const provider = await UniversalProvider.init(walletConnect);
      walletConnectProviderRef.current = provider;

      // Resolve all pending promises
      const resolves = promiseResolvesRef.current;
      promiseResolvesRef.current = [];
      resolves.forEach((resolve) => {
        resolve(provider);
      });
    });
  }, [walletConnect]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return getWalletConnectProvider;
};
