import type { Account, WalletExtensionItem } from '@ant-design/web3-common';
import type {
  DeviceSessionId,
  DeviceStatus,
  DiscoveredDevice,
} from '@ledgerhq/device-management-kit';

export interface LedgerAccount extends Account {
  path?: string;
}

export interface LedgerHooks {
  devices: DiscoveredDevice[];
  connect: (args: any) => Promise<DeviceSessionId>;
  disconnect: (id?: DeviceSessionId) => Promise<void>;
  openApp: (appName: string) => Promise<any>;
  getAddress: () => string | null;
  signMessage: (message: string) => Promise<any>;
  signTypedData: (typedData: any) => Promise<any>;
  deviceStatus: DeviceStatus | null;
  currentApp: string | null;
}

export interface LedgerWallet {
  name: string;
  accounts: LedgerAccount[];
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  signMessage?: (message: string) => Promise<string>;
  signTypedData?: (typedData: unknown) => Promise<unknown>;
  useLedgerHooks?: () => LedgerHooks;
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
