import type { Account } from '@ant-design/web3-common';

export interface LedgerAccount extends Account {
  path?: string;
}
