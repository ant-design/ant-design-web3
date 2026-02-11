import type { Account, ConnectOptions } from '@ant-design/web3-common';

export interface LedgerAccount extends Account {
  path?: string;
}

/** Connect options extended with Ledger WalletConnect session restore */
export type LedgerConnectOptions = ConnectOptions & { restoreSession?: boolean };
