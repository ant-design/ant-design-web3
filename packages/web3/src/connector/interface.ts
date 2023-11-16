import type { ConnectModalProps } from '@ant-design/web3';
import type { Account, Wallet } from '@ant-design/web3-common';

export interface ConnectorProps {
  children: React.ReactNode;
  modalProps?: ConnectModalProps;

  onConnect?: () => Promise<void>;
  onDisconnect?: () => Promise<void>;
  onConnected?: (account: Account) => Promise<void>;
  onDisconnected?: () => Promise<void>;

  wallets?: Wallet[];
  accounts?: Account[];
  requestAccounts?: (wallet: string) => Promise<Account[]>;
  disconnect?: () => Promise<void>;
}
