import React, { useContext } from "react";
import type { MainPanelProps } from "../interface";
import { connectModalContext } from "../context";
import DefaultGuidePanel from "./defaultGuidePanel";
import GetWalletPanel from "./getWalletPanel";


const MainPanel: React.FC<MainPanelProps> = (props) => {
    const { guide, walletList } = props;
    const { prefixCls, panelRoute } = useContext(connectModalContext);

    return (
        <div className={`${prefixCls}-main-panel`}>
            {panelRoute === "guide" ? <DefaultGuidePanel guide={guide} /> : null}
            {panelRoute === "getWallet" ? <GetWalletPanel walletList={walletList} /> : null}
        </div>
    );
}

export default MainPanel;