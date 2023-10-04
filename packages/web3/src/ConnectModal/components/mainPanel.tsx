import React, { useContext } from "react";
import type { MainPanelProps } from "../interface";
import { connectModalContext } from "../context";
import DefaultGuidePanel from "./defaultGuidePanel";
import GetWalletPanel from "./getWalletPanel";
import QrCode from "./qrCode";
import WalletCard from "./walletCard";


const MainPanel: React.FC<MainPanelProps> = (props) => {
    const { guide, walletList } = props;
    const { prefixCls, panelRoute, selectedWallet } = useContext(connectModalContext);

    return (
        <div className={`${prefixCls}-main-panel`}>
            {panelRoute === "guide" ? <DefaultGuidePanel guide={guide} /> : null}
            {panelRoute === "getWallet" ? <GetWalletPanel walletList={walletList} /> : null}
            {(panelRoute === "wallet" && selectedWallet) ? <WalletCard /> : null}
            {(panelRoute === "qrCode" && selectedWallet) ? <QrCode wallet={selectedWallet} /> : null}
        </div>
    );
}

export default MainPanel;