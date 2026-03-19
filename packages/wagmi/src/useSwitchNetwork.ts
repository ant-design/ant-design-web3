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

const NETWORK_NOT_FOUND_CODES = [4902];
const NETWORK_NOT_FOUND_MESSAGES = [
  'Unrecognized chain ID',
  'Chain not added',
  'network not found',
  'Chain with ID',
  'Unrecognized',
];

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
