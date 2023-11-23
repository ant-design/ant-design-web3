import { Menu, type MenuProps } from 'antd';

export type ConnectButtonMenuProps = MenuProps & {};
export const ConnectButtonMenu: React.FC<ConnectButtonMenuProps> = (props) => {
  return <Menu className="connect-button-menu" {...props} />;
};
