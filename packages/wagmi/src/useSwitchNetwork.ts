import { useCallback, useState } from 'react';
import type { Chain } from '@ant-design/web3-common';
import { useAccount, useSwitchChain } from 'wagmi';

import { chainToAddNetworkParams } from './add-network';
import type { AddNetworkParams, ChainAssetWithWagmiChain } from './interface';
import { useAddNetwork } from './useAddNetwork';

export interface SwitchNetworkError extends Error {
  code?: number | string;
  cause?: unknown;
  data?: { originalError?: { code?: number } };
  details?: string;
  shortMessage?: string;
}

/**
 * 网络未找到的错误码列表
 * - 4902: EIP-3326 标准错误码，表示链未添加
 * - -32603: 某些钱包（如 MetaMask Mobile）在链未找到时可能返回此错误码
 */
const NETWORK_NOT_FOUND_CODES = [4902, -32603];

/**
 * 网络未找到的错误消息关键词列表
 * 用于兼容不同钱包返回的错误消息格式
 */
const NETWORK_NOT_FOUND_MESSAGES = [
  'Unrecognized chain ID',
  'Chain not added',
  'network not found',
  'Chain with ID',
  'Unrecognized',
];

/**
 * 判断错误是否为"网络未找到"错误
 * 采用双重匹配策略：
 * 1. 优先匹配错误码（标准 4902 或其他钱包特定的错误码）
 * 2. 如果错误码不匹配，则匹配错误消息关键词
 * 这样可以最大程度兼容不同钱包的实现差异
 */
function isNetworkNotFoundError(error: unknown): boolean {
  const e = error as SwitchNetworkError;
  if (!e) return false;
  const causeCode =
    typeof e.cause === 'object' && e.cause !== null && 'code' in e.cause
      ? (e.cause as { code?: number }).code
      : undefined;
  const code = e.code ?? causeCode ?? e.data?.originalError?.code;
  if (code !== undefined && NETWORK_NOT_FOUND_CODES.includes(Number(code))) return true;
  const msg = e.message ?? e.shortMessage ?? e.details ?? '';
  return NETWORK_NOT_FOUND_MESSAGES.some((m) => String(msg).includes(m));
}

export function useSwitchNetwork() {
  const { connector } = useAccount();
  const { switchChain } = useSwitchChain();
  const { addNetwork, isLoading: addLoading } = useAddNetwork();
  const [isLoading, setIsLoading] = useState(false);

  const switchNetwork = useCallback(
    async (
      chain: Chain,
      options?: {
        addIfNotExists?: boolean;
        addNetworkParams?: AddNetworkParams | null;
      },
    ): Promise<void> => {
      const addIfNotExists = options?.addIfNotExists !== false;
      let params: AddNetworkParams | null | undefined = options?.addNetworkParams;
      if (params === undefined && 'wagmiChain' in chain) {
        params = chainToAddNetworkParams(chain as ChainAssetWithWagmiChain);
      }
      // 统一转为 null 以便后续判断
      params = params ?? null;

      if (!connector) {
        const err: SwitchNetworkError = new Error('NO_CONNECTOR') as SwitchNetworkError;
        err.code = 'NO_CONNECTOR';
        throw err;
      }

      setIsLoading(true);
      try {
        await new Promise<void>((resolve, reject) => {
          switchChain?.({ chainId: Number(chain.id) }, {
            onSuccess: () => resolve(),
            onError: (err: unknown) => reject(err),
          } as { onSuccess?: () => void; onError?: (error: unknown) => void });
        });
      } catch (err: unknown) {
        if (addIfNotExists && params && isNetworkNotFoundError(err)) {
          try {
            await addNetwork(params);
            await new Promise<void>((resolve, reject) => {
              switchChain?.({ chainId: Number(chain.id) }, {
                onSuccess: () => resolve(),
                onError: (err: unknown) => reject(err),
              } as { onSuccess?: () => void; onError?: (error: unknown) => void });
            });
          } catch (addErr) {
            throw addErr;
          }
        } else {
          throw err;
        }
      } finally {
        setIsLoading(false);
      }
    },
    [connector, switchChain, addNetwork],
  );

  return {
    switchNetwork,
    addNetwork,
    isLoading: isLoading || addLoading,
  };
}
