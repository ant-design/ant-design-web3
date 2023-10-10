export type CommonButtonProps = {
  /**
   * Class name
   */
  className?: string;
  /**
   * CSS style
   */
  style?: React.CSSProperties;
  /**
   * Button display type
   * @default 'default'
   */
  type?: 'primary' | 'text' | 'default';
  /**
   * @default false
   */
  ghost?: boolean;
  /**
   * Button size
   * @default 'middle'
   */
  size?: 'small' | 'middle' | 'large';
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
  connectIcon?: React.ReactNode | false;
};

export type ChainSelectItem = {
  id: number;
  name: string;
  icon?: React.ReactNode;
};

export type ChainSelectProps = CommonButtonProps & {
  chains: ChainSelectItem[];
};

export type ConnectButtonPropsNew = CommonButtonProps &
  UnconnectedButtonProps & {
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
    onConnect?: () => void;
    onDisconnect?: () => void;
    onSwitchChain?: () => void;
    onCopyAddress?: () => void;
  };
