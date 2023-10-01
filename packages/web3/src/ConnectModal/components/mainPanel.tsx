import { useContext } from "react";
import type { ConnectModalProps } from "../inter";
import { connectModalContext } from "../context";

export type MainPanelProps = Pick<ConnectModalProps, "guide">;

const MainPanel: React.FC<MainPanelProps> = (props) => {
    const { guide } = props;
    const { prefixCls } = useContext(connectModalContext);

    return (
        <div>
            MainPanel
        </div>
    );
}

export default MainPanel;