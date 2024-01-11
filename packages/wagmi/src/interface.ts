import type { Wallet } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

export interface WalletUseInWagmiAdapter extends Wallet {
  getWagmiConnector?: () => Promise<Connector | undefined>;
}

export interface WalletFactory {
  name: Connector['name'] | Connector['name'][];
  create: (connector?: Connector | Connector[]) => WalletUseInWagmiAdapter;
}
