import type { Account, WalletExtensionItem } from '@ant-design/web3-common';

export interface LedgerAccount extends Account {
  path?: string;
}

export interface LedgerWallet {
  name: string;
  accounts: LedgerAccount[];
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  signMessage?: (message: string) => Promise<string>;
  signTypedData?: (typedData: unknown) => Promise<unknown>;
  _setupHooks?: (hooks: LedgerHooks) => void;
  useLedgerHooks?: () => LedgerHooksResult;
}

export interface WalletFactory {
  name?: string;
  create: () => WalletWithAdapter;
}

export interface WalletWithAdapter {
  name: string;
  adapter?: LedgerWallet;
  icon?: React.ReactNode;
  group?: string;
  remark: string;
  extensions?: false | WalletExtensionItem[];
}
