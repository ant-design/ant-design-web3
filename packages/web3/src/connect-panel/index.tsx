import React from 'react';
import type { Wallet } from '@ant-design/web3-common';
import classNames from 'classnames';

import { useStyle } from './style';

export interface ConnectPanelProps {
  wallets?: Array<{
    key: string;
    name: string;
    icon: React.ReactNode;
    actionText: string;
    onClick?: () => void;
  }>;
  className?: string;
  style?: React.CSSProperties;
}

export const ConnectPanel: React.FC<ConnectPanelProps> = ({ wallets = [], className, style }) => {
  const prefixCls = 'web3-connect-panel';
  const { wrapSSR, hashId } = useStyle(prefixCls);

  return wrapSSR(
    <div className={classNames(prefixCls, hashId, className)} style={style}>
      {wallets.map((wallet) => (
        <div
          key={wallet.key}
          className={classNames(`${prefixCls}-card`, hashId)}
          onClick={wallet.onClick}
        >
          <div className={classNames(`${prefixCls}-icon`, hashId)}>{wallet.icon}</div>
          <div className={classNames(`${prefixCls}-name`, hashId)}>{wallet.name}</div>
          <div className={classNames(`${prefixCls}-action`, hashId)}>{wallet.actionText} &gt;</div>
        </div>
      ))}
    </div>,
  );
};

export default ConnectPanel;
