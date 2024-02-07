import type { ConnectModalProps } from '@ant-design/web3';
import type { Account, Chain, Wallet } from '@ant-design/web3-common';

export interface ConnectorProps {
  children: React.ReactNode;
  modalProps?: ConnectModalProps;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onConnected?: () => void;
  onDisconnected?: () => void;
  onChainSwitched?: (chain?: Chain) => void;

  account?: Account;
  chain?: Chain;

  availableChains?: Chain[];
  availableWallets?: Wallet[];

  connect?: (wallet?: Wallet) => Promise<void>;
  disconnect?: () => Promise<void>;
  switchChain?: (chain: Chain) => Promise<void>;
}
