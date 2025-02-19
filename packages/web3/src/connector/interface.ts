import type { ConnectModalProps } from '@ant-design/web3';
import type { Account, Chain, Wallet } from '@ant-design/web3-common';

export interface ConnectorProps {
  children: React.ReactNode;
  modalProps?: ConnectModalProps;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onConnected?: (account?: Account) => void;
  onDisconnected?: () => void;
  onChainSwitched?: (chain?: Chain) => void;
  onConnectError?: (error?: Error) => void;

  account?: Account;
  chain?: Chain;

  availableChains?: Chain[];
  availableWallets?: Wallet[];

  // biome-ignore lint/suspicious/noConfusingVoidType: by design
  connect?: (wallet?: Wallet) => Promise<void | Account>;
  disconnect?: () => Promise<void>;
  switchChain?: (chain: Chain) => Promise<void>;
}
