import { useCallback, useContext, useMemo } from 'react';
import type { Account, ConnectOptions, Wallet } from '@ant-design/web3-common';
import { ConfigContext } from '@ant-design/web3-common';

import { useCallbackRef } from './useCallbackRef';

/**
 * 父级上下文合并 Hook。
 *
 * 将 Ledger 的 connect/disconnect/account/wallets 与父级 Provider（如 Wagmi、Solana）的上下文合并：
 * - mergedConnect：Ledger 钱包走 Ledger 连接逻辑，其他钱包委托给父级
 * - mergedDisconnect：有 Ledger 账户时断开 Ledger，否则委托给父级
 * - mergedAccount：Ledger 账户优先，回退到父级账户
 * - mergedAvailableWallets：父级钱包列表 + Ledger 钱包（去重）
 */
export interface UseMergedProviderParams {
  account: Account | undefined;
  accountRef: React.RefObject<Account | undefined>;
  connect: (wallet?: Wallet, options?: ConnectOptions) => Promise<Account | undefined>;
  disconnect: () => Promise<void>;
  wallet: Wallet;
  ledgerWalletName: string;
}

export interface UseMergedProviderReturn {
  mergedAccount: Account | undefined;
  mergedConnect: (wallet?: Wallet, options?: ConnectOptions) => Promise<Account | undefined>;
  mergedDisconnect: () => Promise<void>;
  mergedAvailableWallets: Wallet[];
}

export function useMergedProvider({
  account,
  accountRef,
  connect,
  disconnect,
  wallet,
  ledgerWalletName,
}: UseMergedProviderParams): UseMergedProviderReturn {
  const parentContext = useContext(ConfigContext);

  const mergedAvailableWallets = useMemo(() => {
    const parentWallets = parentContext?.availableWallets ?? [];
    const withoutLedger = parentWallets.filter((w) => w.name !== ledgerWalletName);
    return [...withoutLedger, wallet];
  }, [parentContext?.availableWallets, ledgerWalletName, wallet]);

  const parentConnectRef = useCallbackRef(parentContext?.connect);
  const parentDisconnectRef = useCallbackRef(parentContext?.disconnect);

  const mergedConnect = useCallback(
    async (selected?: Wallet, options?: ConnectOptions): Promise<Account | undefined> => {
      if (selected?.name === ledgerWalletName) {
        return connect(selected, options);
      }
      const result = await parentConnectRef.current?.(selected, options);
      return result || undefined;
    },
    [connect, ledgerWalletName, parentConnectRef],
  );

  const mergedDisconnect = useCallback(async () => {
    if (accountRef.current) {
      return disconnect();
    }
    return parentDisconnectRef.current?.();
  }, [disconnect, accountRef, parentDisconnectRef]);

  const mergedAccount = account ?? parentContext?.account;

  return {
    mergedAccount,
    mergedConnect,
    mergedDisconnect,
    mergedAvailableWallets,
  };
}
