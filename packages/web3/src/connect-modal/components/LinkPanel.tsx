import React, { useContext } from 'react';
import { Avatar } from 'antd';

import { connectModalContext } from '../context';
import MainPanelHeader from './MainPanelHeader';

const LinkPanel: React.FC = () => {
  const { loading, updatePanelRoute, localeMessage, prefixCls, selectedWallet } =
    useContext(connectModalContext);

  React.useEffect(() => {
    if (!loading) {
      updatePanelRoute('init', true);
    }
  }, [loading]);

  return (
    <>
      <MainPanelHeader title={`${localeMessage.linkWallet} ${selectedWallet?.name}`} />
      <div className={`${prefixCls}-link-panel`}>
        <div className={`${prefixCls}-ripple-container`}>
          <div className={`${prefixCls}-ripple`} />
          <div className={`${prefixCls}-ripple`} />
          <div className={`${prefixCls}-ripple`} />
          <Avatar size={62} icon={selectedWallet?.icon} />
        </div>
        <div className={`${prefixCls}-wallet-connecting`}>{localeMessage.walletConnecting}</div>
      </div>
    </>
  );
};

export default LinkPanel;
