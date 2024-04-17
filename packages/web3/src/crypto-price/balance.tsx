import React, { useContext, useMemo } from 'react';
import type { Balance } from '@ant-design/web3-common';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';

import { formatBalance } from '../utils';

export type FormatInfo = {
  originValue: number | bigint;
  symbol: string;
  decimals?: number;
  fixed?: number;
};

export type CryptoPriceFormatFn = (preFormatValue: string, info: FormatInfo) => string;

export interface CryptoPriceBalanceProps extends Balance {
  className?: string;
  hashId: string;
  style?: React.CSSProperties;
  fixed?: number;
  icon?: React.ReactNode;
  format?: CryptoPriceFormatFn;
}

export const CryptoPriceBalance: React.FC<CryptoPriceBalanceProps> = ({
  className,
  style,
  hashId,
  symbol = 'ETH',
  decimals = 18,
  value = 0,
  fixed,
  icon,
  format,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-crypto-price-balance');

  const displayText = useMemo(() => {
    if (format) {
      return format(formatBalance(value, decimals, fixed), {
        symbol,
        decimals,
        fixed,
        originValue: value,
      });
    }
    return `${formatBalance(value, decimals, fixed)} ${symbol}`;
  }, [value, symbol, decimals, fixed, format]);

  return (
    <span style={style} className={classNames(className, hashId, prefixCls)}>
      {icon ? <>{icon} </> : null}
      {displayText}
    </span>
  );
};

CryptoPriceBalance.displayName = 'CryptoPriceBalance';
