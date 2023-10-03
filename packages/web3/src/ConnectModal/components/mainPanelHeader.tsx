import { useContext } from "react";
import { connectModalContext } from "../context";
import { LeftOutlined } from "@ant-design/icons";

export type MainPanelHeaderProps = {
    back?: boolean;
    title?: React.ReactNode;
};

const MainPanelHeader: React.FC<MainPanelHeaderProps> = (props) => {
    const { back = true, title } = props;
    const { updatePanelRoute, prefixCls } = useContext(connectModalContext);

    return (
        <div className={`${prefixCls}-main-panel-header`}>
            {back && (
                <div className={`${prefixCls}-main-panel-header-back`} onClick={() => updatePanelRoute("guide")}>
                    <LeftOutlined />
                </div>
            )}
            {title && (
                <div className={`${prefixCls}-main-panel-header-title`}>
                    {title}
                </div>
            )}
        </div>
    );
}

export default MainPanelHeader;