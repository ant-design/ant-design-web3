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

  const checkNetworkInWallet = useCallback(
    async (chainId: number): Promise<boolean | null> => {
      if (!connector) return false;
      try {
        const provider = await connector.getProvider();
        const currentChainId = await (
          provider as { request: (args: unknown) => Promise<string> }
        ).request({
          method: 'eth_chainId',
        });
        const targetHex = `0x${chainId.toString(16)}`;
        if (currentChainId === targetHex) return true;
        try {
          await (provider as { request: (args: unknown) => Promise<unknown> }).request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: targetHex }],
          });
          return true;
        } catch (switchErr: unknown) {
          const se = switchErr as { code?: number; message?: string };
          if (
            se?.code === 4902 ||
            (typeof se?.message === 'string' &&
              (se.message.includes('Unrecognized chain ID') ||
                se.message.includes('Chain not added')))
          ) {
            return false;
          }
          return null;
        }
      } catch {
        return false;
      }
    },
    [connector],
  );

  const switchNetwork = useCallback(
    async (
      chain: Chain,
      options?: {
        addIfNotExists?: boolean;
        addNetworkParams?: AddNetworkParams | null;
      },
    ): Promise<void> => {
      const addIfNotExists = options?.addIfNotExists !== false;
      let params: AddNetworkParams | null = options?.addNetworkParams ?? null;
      if (params === undefined && 'wagmiChain' in chain) {
        params = chainToAddNetworkParams(chain as ChainAssetWithWagmiChain);
      }

      if (!connector) {
        const err: SwitchNetworkError = new Error('NO_CONNECTOR') as SwitchNetworkError;
        err.code = 'NO_CONNECTOR';
        throw err;
      }

      setIsLoading(true);
      try {
        if (addIfNotExists && params) {
          const exists = await checkNetworkInWallet(Number(chain.id));
          if (exists === false) {
            await addNetwork(params);
          }
        }
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
    [connector, switchChain, addNetwork, checkNetworkInWallet],
  );

  return {
    switchNetwork,
    checkNetworkInWallet,
    addNetwork,
    isLoading: isLoading || addLoading,
  };
}
