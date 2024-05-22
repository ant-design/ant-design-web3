import React, { useContext } from 'react';

import { connectModalContext } from '../context';
import type { Wallet } from '../interface';

const WalletIcon: React.FC<{ wallet: Wallet }> = ({ wallet }) => {
  const { prefixCls } = useContext(connectModalContext);

  return typeof wallet.icon === 'string' || wallet.icon === undefined ? (
    <img className={`${prefixCls}-img`} src={wallet.icon} alt={wallet.name} />
  ) : (
    <div className={`${prefixCls}-icon`}>{wallet.icon}</div>
  );
};

export default WalletIcon;
