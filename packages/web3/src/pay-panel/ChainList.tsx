import React, { useContext } from 'react';
import { ConfigProvider, List } from 'antd';

import { ChainInfo } from './ChainInfo';
import { PayPanelContext } from './PayPanelContext';

interface ChainListProps {
  onChainSelected: (chainId: number | string | undefined) => void;
}

export const ChainList: React.FC<ChainListProps> = ({ onChainSelected }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-pay-panel');

  const { target } = useContext(PayPanelContext);
  return (
    <>
      <div className={`${prefixCls}-title`}>Select network</div>
      {Object.entries(target).map(([chainId, { chain }]) => {
        return (
          <div
            key={chainId}
            onClick={() => {
              onChainSelected(chainId);
            }}
          >
            <ChainInfo chainInfo={chain} />
          </div>
        );
      })}
    </>
  );
};
