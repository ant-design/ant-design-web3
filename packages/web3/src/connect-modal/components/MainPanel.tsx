import React, { useContext } from 'react';
import type { MainPanelProps } from '../interface';
import { connectModalContext } from '../context';
import DefaultGuidePanel from './DefaultGuidePanel';
import GetWalletPanel from './GetWalletPanel';
import QrCode from './QrCode';
import WalletCard from './WalletCard';

const MainPanel: React.FC<MainPanelProps> = (props) => {
  const { guide, walletList } = props;
  const { prefixCls, panelRoute, selectedWallet } = useContext(connectModalContext);

  return (
    <div className={`${prefixCls}-main-panel`}>
      {panelRoute === 'guide' || panelRoute === 'init' ? <DefaultGuidePanel guide={guide} /> : null}
      {panelRoute === 'getWallet' ? <GetWalletPanel walletList={walletList} /> : null}
      {panelRoute === 'wallet' && selectedWallet ? <WalletCard /> : null}
      {panelRoute === 'qrCode' && selectedWallet ? (
        <QrCode wallet={selectedWallet} isSimple={!guide} />
      ) : null}
    </div>
  );
};

export default MainPanel;
