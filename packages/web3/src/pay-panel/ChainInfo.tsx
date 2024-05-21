import React, { useContext } from 'react';
import { Chain } from '@ant-design/web3-common';
import { ConfigProvider } from 'antd';

interface ChainListProps {
  chainInfo: Chain;
}

export const ChainInfo: React.FC<ChainListProps> = ({ chainInfo }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-pay-panel');

  return (
    <div className={`${prefixCls}-chainItem`}>
      <div className={`${prefixCls}-chainInfo`}>
        <span className={`${prefixCls}-icon`}>{chainInfo.icon}</span>
        <span>{chainInfo.name}</span>
      </div>
    </div>
  );
};
