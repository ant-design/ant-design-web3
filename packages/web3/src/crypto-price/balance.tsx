import React, { useContext } from 'react';
import { ConfigProvider } from 'antd';
import type { Balance } from '@ant-design/web3-common';
import classNames from 'classnames';
import { formatBalance } from '../utils';

export interface CryptoPriceBalanceProps extends Balance {
  className?: string;
  hashId: string;
  style?: React.CSSProperties;
  fixed?: number;
  icon?: React.ReactNode;
}

export const CryptoPriceBalance: React.FC<CryptoPriceBalanceProps> = ({
  className,
  style,
  hashId,
  symbol,
  decimals,
  value,
  fixed,
  icon,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-crypto-price-balance');

  return (
    <span style={style} className={classNames(className, hashId, prefixCls)}>
      {icon ? <>{icon} </> : null}
      {formatBalance(value, decimals, fixed)} {symbol}
    </span>
  );
};

CryptoPriceBalance.displayName = 'CryptoPriceBalance';
