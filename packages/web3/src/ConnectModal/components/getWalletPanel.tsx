import { useContext } from "react";
import type { ConnectModalProps } from "../interface";
import { connectModalContext } from "../context";
import MainPanelHeader from "./mainPanelHeader";

export type GetWalletPanelProps = Pick<ConnectModalProps, "walletList">;

const GetWalletPanel: React.FC<GetWalletPanelProps> = (props) => {
    const {
        walletList = [],
    } = props;
    const { prefixCls } = useContext(connectModalContext);
    return (
        <div className={`${prefixCls}-get-wallet-panel`}>
            <MainPanelHeader title="Get a Wallet" />
        </div>
    );
};

export default GetWalletPanel;