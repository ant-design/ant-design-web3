/* eslint-disable react/no-unknown-property */
import type { ReactNode } from "react";
import { useContext, useState } from "react";
import type { ConnectModalProps, Wallet } from "../interface";
import { connectModalContext } from "../context";
import MainPanelHeader from "./mainPanelHeader";
import { Avatar, Button, List } from "antd";

export type GetWalletPanelProps = Pick<ConnectModalProps, "walletList">;

const CardItem: React.FC<{ icon: ReactNode, title: string, desc: string, link: string }> = ({
    icon,
    title,
    desc,
    link,
}) => {
    const { prefixCls } = useContext(connectModalContext);
    return (
        <a className={`${prefixCls}-card-item`} target="_blank" href={link} rel="noreferrer">
            <div className={`${prefixCls}-card-icon`}>
                {icon}
            </div>
            <div className={`${prefixCls}-card-content`}>
                <div className={`${prefixCls}-card-title`}>{title}</div>
                <div className={`${prefixCls}-card-description`}>
                    {desc}
                </div>
            </div>
        </a>
    )
}

const GetWalletPanel: React.FC<GetWalletPanelProps> = (props) => {
    const {
        walletList = [],
    } = props;
    const { prefixCls } = useContext(connectModalContext);
    const [selectedWallet, setSelectedWallet] = useState<Wallet | undefined>();
    const list = (
        <>
            <div className={`${prefixCls}-list`}>
                <List
                    itemLayout="horizontal"
                    dataSource={walletList}
                    renderItem={(item) => (
                        <List.Item
                            className={`${prefixCls}-item`}
                            actions={[
                                <Button
                                    key="get"
                                    type="default"
                                    shape="round"
                                    className={`${prefixCls}-get-wallet-btn`}
                                    onClick={() => setSelectedWallet(item)}
                                >
                                    Get
                                </Button>
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar shape="square" src={item.icon}>{item.name[0]}</Avatar>}
                                title={item.name}
                                description={item.remark}
                            />
                        </List.Item>
                    )}
                />
            </div>
            <div className={`${prefixCls}-info`}>
                <h3>Not what you&apos;re looking for?</h3>
                <p>Select a wallet on the left to get started with a different wallet provider.</p>
            </div>
        </>
    );

    const detail = (
        <div className={`${prefixCls}-card-list`}>
            {selectedWallet?.extension && (
                <CardItem
                    link={selectedWallet.extension.link}
                    icon={(
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4213" id="mx_n_1696319534814" width="64" height="64">
                            <path d="M123.648 178.346667C361.642667-98.602667 802.986667-43.946667 967.936 279.68h-396.501333c-71.424 0-117.546667-1.621333-167.509334 24.661333-58.709333 30.933333-102.997333 88.234667-118.485333 155.52L123.648 178.389333z" fill="#EA4335" p-id="4214" />
                            <path d="M341.674667 512c0 93.866667 76.330667 170.24 170.154666 170.24 93.866667 0 170.154667-76.373333 170.154667-170.24s-76.330667-170.24-170.154667-170.24c-93.866667 0-170.154667 76.373333-170.154666 170.24z" fill="#4285F4" p-id="4215" />
                            <path d="M577.877333 734.848c-95.530667 28.373333-207.274667-3.114667-268.501333-108.8-46.762667-80.64-170.24-295.765333-226.346667-393.557333-196.565333 301.226667-27.136 711.808 329.685334 781.866666l165.12-279.509333z" fill="#34A853" p-id="4216" />
                            <path d="M669.866667 341.76a233.130667 233.130667 0 0 1 43.008 286.634667c-40.576 69.973333-170.154667 288.682667-232.96 394.581333 367.658667 22.656 635.733333-337.664 514.645333-681.258667H669.866667z" fill="#FBBC05" p-id="4217" />
                        </svg>
                    )}
                    title={`${selectedWallet.name} for Chrome`}
                    desc="Access your wallet right from your favorite web browser."
                />
            )}
            {selectedWallet?.app && (
                <CardItem
                    link={selectedWallet.app.link}
                    icon={(
                        typeof selectedWallet.icon === "string" ? <img src={selectedWallet.icon} /> : selectedWallet.icon
                    )}
                    title={`${selectedWallet.name} for Mobile`}
                    desc="Use the mobile wallet to explore the world of Ethereum."
                />
            )}
        </div>
    );

    const handleBack = () => {
        if (selectedWallet) {
            setSelectedWallet(undefined);
            return false;
        }
        return true;
    }

    return (
        <div className={`${prefixCls}-get-wallet-panel`}>
            <MainPanelHeader title="Get a Wallet" onBack={handleBack} />
            {selectedWallet ? detail : list}
        </div>
    );
};

export default GetWalletPanel;