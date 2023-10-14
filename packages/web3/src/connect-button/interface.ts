import type { ButtonProps } from 'antd';

export type CommonButtonProps = {
  buttonProps?: ButtonProps;
};

export type UnconnectedButtonProps = CommonButtonProps & {
  /**
   * Text before connect
   * @default 'Connect Wallet'
   */
  connectText?: string;
  /**
   * Icon before connect
   * @default <WalletIcon />
   */
  connectIcon?: false | React.ReactNode;
};

export type ChainSelectItem = {
  id: number;
  name: string;
  icon?: React.ReactNode;
};

export type ChainSelectProps = CommonButtonProps & {
  chains: ChainSelectItem[];
};

export type ConnectButtonProps = UnconnectedButtonProps & {
  /**
   * @default false
   */
  showBalance?: boolean;
  /**
   * @default false
   */
  showENS?: boolean;
  /**
   * @default false
   */
  showSwitchChain?: boolean;
  // onConnect?: () => void;
  // onDisconnect?: () => void;
  // onSwitchChain?: () => void;
  // onCopyAddress?: () => void;
};
