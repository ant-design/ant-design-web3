import React, { useContext } from 'react';
import { ConfigProvider } from 'antd';

import { PayPanelContext } from './PayPanelContext';

interface ChainListProps {
  chainId: string | number;
}

export const ChainInfo: React.FC<ChainListProps> = ({ chainId }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const { supportedChains } = useContext(PayPanelContext);

  const prefixCls = getPrefixCls('web3-pay-panel');

  const returnChainInfo = supportedChains.find((chain) => chain.chain.id === Number(chainId));

  return (
    <div className={`${prefixCls}-chainItem`}>
      <div className={`${prefixCls}-chainInfo`}>
        <span className={`${prefixCls}-icon`}>{returnChainInfo?.chain.icon}</span>
        <div>
          <span>{returnChainInfo?.chain.name}</span>
        </div>
      </div>
      <div className={`${prefixCls}-gasInfo`}>{returnChainInfo?.extra}</div>
    </div>
  );
};
