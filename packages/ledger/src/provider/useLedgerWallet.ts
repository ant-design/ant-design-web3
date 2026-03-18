import { useMemo } from 'react';
import type { Wallet } from '@ant-design/web3-common';

import type { Ledger } from '../ledger';

/**
 * 构造 Ledger Wallet 对象的 Hook。
 *
 * 在 Ledger 基础 wallet 信息之上，附加：
 * - getQrCode：当配置了 WalletConnect 时，委托 WalletConnectBridge.getQrCodeUri() 获取配对 URI
 * - customQrCodePanel：是否使用 WalletConnect 官方弹窗
 */
export interface UseLedgerWalletParams {
  ledger: Ledger;
  hasWalletConnect: boolean;
  useWalletConnectOfficialModal?: boolean;
}

export function useLedgerWallet({
  ledger,
  hasWalletConnect,
  useWalletConnectOfficialModal,
}: UseLedgerWalletParams): Wallet {
  return useMemo(
    () => ({
      ...ledger.wallet,
      getQrCode: hasWalletConnect ? () => ledger.walletConnectBridge.getQrCodeUri() : undefined,
      customQrCodePanel: useWalletConnectOfficialModal || false,
    }),
    [ledger.wallet, hasWalletConnect, ledger.walletConnectBridge, useWalletConnectOfficialModal],
  );
}
