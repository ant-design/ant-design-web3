import { useCallback, useState } from 'react';
import { useAccount } from 'wagmi';

import type { AddNetworkParams } from './interface';

export interface AddNetworkError extends Error {
  code?: number | string;
  cause?: unknown;
}

const NETWORK_TIMEOUT_MS = 30_000;
const EIP6963_DISCOVERY_MS = 3_000;

/** EIP-6963 announce 事件的 detail 类型 */
interface EIP6963ProviderDetail {
  info: { uuid: string; name: string; icon?: string; rdns: string };
  provider: { request: (args: unknown) => Promise<unknown> };
}

/** 未连接时指定添加到哪个钱包：EIP-6963 的 rdns（如 io.metamask）或名称匹配 */
export interface AddNetworkOptions {
  /** 优先使用的钱包 rdns，如 'io.metamask' 表示添加到 MetaMask */
  preferredWalletRdns?: string;
  /** 优先使用的钱包名称（与 EIP-6963 info.name 模糊匹配，不区分大小写） */
  preferredWalletName?: string;
}

type CachedEIP6963 = { info: EIP6963ProviderDetail['info']; provider: unknown };

/**
 * 已发现的 EIP-6963 provider 缓存，避免重复请求；可按 rdns/name 指定钱包。
 * 注意：这是一个模块级缓存，在 SSR 场景下需要通过 clearEIP6963Cache() 清理。
 */
let eip6963ProviderCache: CachedEIP6963[] = [];

/**
 * 清空 EIP-6963 provider 缓存。
 * 在以下场景中应该调用此函数：
 * - SSR 场景：在每个请求处理完毕后清理，避免请求间数据泄露
 * - 测试环境：在 afterEach/afterAll 钩子中清理，避免测试用例间状态污染
 *
 * @example
 * // 测试中
 * afterEach(() => {
 *   clearEIP6963Cache();
 * });
 *
 * // SSR 中
 * app.use((req, res, next) => {
 *   res.on('finish', () => clearEIP6963Cache());
 *   next();
 * });
 */
export function clearEIP6963Cache(): void {
  eip6963ProviderCache = [];
}

function matchPreferredWallet(
  info: EIP6963ProviderDetail['info'],
  options?: AddNetworkOptions,
): boolean {
  if (!options) return true;
  if (options.preferredWalletRdns) {
    return info.rdns?.toLowerCase() === options.preferredWalletRdns.toLowerCase();
  }
  if (options.preferredWalletName) {
    return info.name?.toLowerCase().includes(options.preferredWalletName.toLowerCase()) ?? false;
  }
  return true;
}

/**
 * 通过 EIP-6963 协议获取一个可用的原始 EIP-1193 provider（未连接时使用）。
 * 可通过 preferredWalletRdns / preferredWalletName 指定添加到哪个钱包（如 MetaMask）。
 */
function getProviderViaEIP6963(options?: AddNetworkOptions): Promise<unknown> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(null);
      return;
    }

    const fromCache = (): unknown => {
      if (options?.preferredWalletRdns || options?.preferredWalletName) {
        const found = eip6963ProviderCache.find((c) => matchPreferredWallet(c.info, options));
        return found ? found.provider : null;
      }
      return eip6963ProviderCache[0]?.provider ?? null;
    };

    if (eip6963ProviderCache.length > 0) {
      resolve(fromCache());
      return;
    }

    const timeoutId = setTimeout(() => {
      window.removeEventListener('eip6963:announceProvider', handler);
      resolve(fromCache());
    }, EIP6963_DISCOVERY_MS);

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<EIP6963ProviderDetail>).detail;
      const provider = detail?.provider;
      if (
        provider &&
        typeof (provider as EIP6963ProviderDetail['provider']).request === 'function' &&
        detail?.info
      ) {
        const exists = eip6963ProviderCache.some((c) => c.info.uuid === detail.info.uuid);
        if (!exists) {
          eip6963ProviderCache = [...eip6963ProviderCache, { info: detail.info, provider }];
        }
        if (!matchPreferredWallet(detail.info, options)) return;
        clearTimeout(timeoutId);
        window.removeEventListener('eip6963:announceProvider', handler);
        resolve(provider);
      }
    };

    window.addEventListener('eip6963:announceProvider', handler);
    window.dispatchEvent(new Event('eip6963:requestProvider'));
  });
}

/**
 * 调用 wallet_addEthereumChain 并设置超时。
 */
async function callAddNetworkWithTimeout(
  provider: unknown,
  params: AddNetworkParams,
): Promise<void> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error('NETWORK_TIMEOUT')), NETWORK_TIMEOUT_MS);
  });

  const addPromise = (provider as { request: (args: unknown) => Promise<unknown> }).request({
    method: 'wallet_addEthereumChain',
    params: [params],
  });

  await Promise.race([addPromise, timeoutPromise]);
}

/**
 * 解析出用于调 wallet_addEthereumChain 的 provider。
 * 已连接时用当前 connector；未连接时通过 EIP-6963 获取，可指定 preferredWalletRdns / preferredWalletName。
 */
async function getProviderForAddNetwork(
  connector: ReturnType<typeof useAccount>['connector'],
  options?: AddNetworkOptions,
): Promise<unknown> {
  if (connector) {
    const p = await connector.getProvider();
    if (p) return p;
  }
  return getProviderViaEIP6963(options);
}

export function useAddNetwork() {
  const { connector } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AddNetworkError | null>(null);

  const addNetwork = useCallback(
    async (params: AddNetworkParams, options?: AddNetworkOptions): Promise<void> => {
      setError(null);

      if (!params.nativeCurrency || !params.rpcUrls?.length) {
        const err: AddNetworkError = new Error('NETWORK_PARAMS_INCOMPLETE');
        err.code = 'NETWORK_PARAMS_INCOMPLETE';
        setError(err);
        throw err;
      }

      const provider = await getProviderForAddNetwork(connector ?? undefined, options);
      if (!provider) {
        const err: AddNetworkError = new Error('NO_PROVIDER');
        err.code = 'NO_CONNECTOR';
        setError(err);
        throw err;
      }

      setIsLoading(true);
      try {
        await callAddNetworkWithTimeout(provider, params);
      } catch (err: unknown) {
        const e = err as AddNetworkError;
        if (e?.code !== 4001 && e?.message !== 'User rejected') {
          setError(e);
        }
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [connector],
  );

  return { addNetwork, isLoading, error };
}

/**
 * 不依赖 WagmiWeb3ConfigProvider 的「仅添加网络」方法，通过 EIP-6963 获取钱包并调 wallet_addEthereumChain。
 * 适用于未连接钱包、且页面未包在 WagmiWeb3ConfigProvider 内的场景（如独立落地页、非 React 等）。
 * 需在支持 EIP-6963 的浏览器环境中使用。
 */
export async function addNetworkToWallet(
  params: AddNetworkParams,
  options?: AddNetworkOptions,
): Promise<void> {
  if (!params.nativeCurrency || !params.rpcUrls?.length) {
    const err: AddNetworkError = new Error('NETWORK_PARAMS_INCOMPLETE');
    err.code = 'NETWORK_PARAMS_INCOMPLETE';
    throw err;
  }

  const provider = await getProviderViaEIP6963(options);
  if (!provider) {
    const err: AddNetworkError = new Error('NO_PROVIDER');
    err.code = 'NO_CONNECTOR';
    throw err;
  }

  await callAddNetworkWithTimeout(provider, params);
}
