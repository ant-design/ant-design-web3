import React, { useContext } from 'react';

import { connectModalContext } from '../context';
import type { ConnectModalProps } from '../interface';
import DefaultGuidePanel from './DefaultGuidePanel';
import LinkPanel from './LinkPanel';
import QrCode from './QrCode';
import WalletCard from './WalletCard';

export type MainPanelProps = Pick<ConnectModalProps, 'guide' | 'walletList' | 'locale'> & {
  simple: boolean;
};

const MainPanel: React.FC<MainPanelProps> = (props) => {
  const { guide, simple } = props;
  const { prefixCls, panelRoute, selectedWallet } = useContext(connectModalContext);

  return (
    <div className={`${prefixCls}-main-panel`}>
      {panelRoute === 'guide' || panelRoute === 'init' ? (
        <DefaultGuidePanel guide={guide} simple={simple} />
      ) : null}
      {panelRoute === 'wallet' && selectedWallet ? <WalletCard /> : null}
      {panelRoute === 'link' && selectedWallet ? <LinkPanel /> : null}
      {panelRoute === 'qrCode' && selectedWallet ? (
        <QrCode wallet={selectedWallet} simple={simple} />
      ) : null}
      {panelRoute === 'downloadQrCode' && selectedWallet ? (
        <QrCode wallet={selectedWallet} simple={simple} download />
      ) : null}
    </div>
  );
};

export default MainPanel;
