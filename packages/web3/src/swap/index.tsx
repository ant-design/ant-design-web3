import React, { useContext } from 'react';
import { Button, ConfigProvider } from 'antd';
import classNames from 'classnames';

import { useStyle } from './style';
import Token from './Token';

export interface SwapProps {
  onSwap?: () => void;
}

export const Swap = ({ onSwap }: SwapProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('web3-swap');

  const { wrapSSR, hashId } = useStyle(prefixCls);

  const getClsName = (cls: string) => classNames(`${prefixCls}-${cls}`, hashId);

  return wrapSSR(
    <div className={classNames(prefixCls, hashId)}>
      <Token />
      <Token />
      <Button size="large" type="primary" onClick={onSwap} className={getClsName('submit')}>
        Swap
      </Button>
    </div>,
  );
};

Swap.Token = Token;
