import React, { useContext } from 'react';
import { ConfigProvider } from 'antd';
import type { Balance } from '@ant-design/web3-common';
import classNames from 'classnames';
import { formatBalance } from '../utils';

export interface BalanceProps extends Balance {
  className?: string;
  hashId: string;
  style?: React.CSSProperties;
  fixed?: number;
}

export const ConnectButtonBanlance: React.FC<BalanceProps> = ({
  className,
  style,
  hashId,
  symbol,
  decimals,
  value,
  fixed,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button-balance');

  return (
    <span style={style} className={classNames(className, hashId, prefixCls)}>
      {formatBalance(value, decimals, fixed)} {symbol}
    </span>
  );
};

ConnectButtonBanlance.displayName = 'ConnectButtonBalance';
