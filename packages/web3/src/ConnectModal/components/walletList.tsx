import React, { useContext, useMemo } from "react";
import { Avatar, List } from "antd";
import type { ConnectModalProps, Wallet } from "../interface";
import { defaultGroupOrder } from "../utils";
import { connectModalContext } from "../context";
import classNames from "classnames";

export type WalletListProps = Pick<ConnectModalProps, "walletList" | "groupOrder">;


const WalletList: React.FC<WalletListProps> = (props) => {
    const {
        walletList = [],
        groupOrder,
    } = props;
    const { prefixCls, updateSelectedWallet, selectedWallet } = useContext(connectModalContext);
    const dataSource: Record<string, Wallet[]> = useMemo(() => {
        const result: Record<string, Wallet[]> = {};
        walletList.forEach(wallet => {
            const { group = "Default" } = wallet;
            if (!result[group]) {
                result[group] = [];
            }
            result[group].push(wallet);
        });
        return result;
    }, [walletList]);

    const groupKeys = useMemo(() =>
        Object.keys(dataSource).sort(groupOrder ?? defaultGroupOrder),
        [dataSource, groupOrder]
    );

    return (
        <div className={`${prefixCls}-wallet-list`}>
            {groupKeys.map(group => (
                <div className={`${prefixCls}-group`} key={group}>
                    <div className={`${prefixCls}-group-title`}>{group}</div>
                    <div className={`${prefixCls}-group-content`}>
                        <List<Wallet>
                            itemLayout="horizontal"
                            dataSource={dataSource[group]}
                            rowKey="key"
                            renderItem={(item) => (
                                <List.Item
                                    className={classNames(`${prefixCls}-item`, {
                                        'selected': item.key !== undefined ? selectedWallet?.key === item.key : selectedWallet?.name === item.name,
                                    })}
                                    extra={(
                                        <div className={`${prefixCls}-extra`}>
                                            {item.remark}
                                        </div>
                                    )}
                                    onClick={() => {
                                        updateSelectedWallet(item);
                                    }}
                                >
                                    <div className={`${prefixCls}-content`}>
                                        <div className={`${prefixCls}-icon`}>
                                            {
                                                (typeof item.icon === "string" || item.icon === undefined) ?
                                                    (
                                                        <Avatar
                                                            size={32}
                                                            shape="square"
                                                            src={item.icon}
                                                        >
                                                            {item.name[0].toUpperCase()}
                                                        </Avatar>
                                                    ) : item.icon
                                            }
                                        </div>
                                        <div className={`${prefixCls}-name`}>
                                            {item.name}
                                        </div>
                                    </div>
                                </List.Item>
                            )}

                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WalletList;