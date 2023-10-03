import { ConnectModal } from '@ant-design/web3';
import { Button } from 'antd';
import React from 'react';
import type { ConnectModalProps, DefaultGuide, Wallet } from '../interface';

export default () => {
    const [open, setOpen] = React.useState(false);
    const walletList: Wallet[] = [
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
            name: "测试钱包6",
            remark: "备注6",
            key: 6,
            link: "https://test.com/xxx",
            pluginLink: 'https://test.com/xxx'
        },
        {
            name: "测试钱包6",
            remark: "备注6",
            key: 7,
            link: "https://test.com/xxx",
            pluginLink: 'https://test.com/xxx'
        },
    ];
    const groupOrder = (a: string, b: string) => {
        if (a === "Popular") return -1;
        if (b === "Popular") return 1;
        return a.localeCompare(b);
    }
    const guide: DefaultGuide = {
        title: "What is a Wallet?",
        infos: [
            {
                title: "A Home for your Digital Assets",
                description: "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.",
                icon: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=4"
            },
            {
                title: "A New Way to Log In",
                description: "Instead of creating new accounts and passwords on every website, just connect your wallet.",
                icon: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=5"
            },
            // {
            //     title: "A New Way to Log In2",
            //     description: "Instead of creating new accounts and passwords on every website, just connect your wallet.",
            //     icon: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=5"
            // },
            // {
            //     title: "A New Way to Log In3",
            //     description: "Instead of creating new accounts and passwords on every website, just connect your wallet.",
            //     icon: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=5"
            // },
        ],
        moreLink: "https://test.com/xxx",
    };
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>打开</Button>
            <ConnectModal
                open={open}
                title="ConnectModal"
                footer="蚂蚁链提供技术支持"
                groupOrder={groupOrder}
                walletList={walletList}
                onOpenChange={setOpen}
                guide={guide}
            />
        </>
    )
};
