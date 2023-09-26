import { ConnectModal } from '@ant-design/web3-connect-modal';
import { Button } from 'antd';
import React from 'react';

export default () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>打开</Button>
            <ConnectModal
                open={open}
                title="ConnectModal"
                footer="蚂蚁链提供技术支持"
                groupOrder={(a, b) => {
                    console.log(a, b);
                    if (a === "Popular") return -1;
                    if (b === "Popular") return 1;
                    return a.localeCompare(b);
                }}
                walletList={[
                    {
                        icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
                        name: "测试钱包",
                        remark: "备注",
                        link: "https://test.com/xxx",
                        group: 'Popular',
                        pluginLink: 'https://test.com/xxx'
                    },
                    {
                        icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
                        name: "测试钱包2",
                        remark: "备注2",
                        link: "https://test.com/xxx",
                        pluginLink: 'https://test.com/xxx'
                    },
                    {
                        icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
                        name: "测试钱包3",
                        remark: "备注3",
                        group: 'Popular',
                        link: "https://test.com/xxx",
                        pluginLink: 'https://test.com/xxx'
                    },
                    {
                        name: "测试钱包4",
                        remark: "备注4",
                        link: "https://test.com/xxx",
                        pluginLink: 'https://test.com/xxx'
                    },
                    {
                        name: "测试钱包5",
                        remark: "备注5",
                        link: "https://test.com/xxx",
                        pluginLink: 'https://test.com/xxx'
                    },
                    {
                        name: "测试钱包5",
                        remark: "备注5",
                        link: "https://test.com/xxx",
                        pluginLink: 'https://test.com/xxx'
                    },
                ]}
                onOpenChange={show => {
                    console.log('onOpenChange', show);
                    setOpen(show);
                }}
            />
        </>
    )
};
