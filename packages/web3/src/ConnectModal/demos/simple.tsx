import { ConnectModal } from '@ant-design/web3';
import { Button } from 'antd';
import React from 'react';
import type { DefaultGuide, Wallet } from '../interface';

export default () => {
  const [open, setOpen] = React.useState(false);
  const walletList: Wallet[] = [
    {
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
      name: '测试钱包',
      remark: '备注',
      app: {
        link: 'https://test.com/xxx',
      },
      extensions: [
        {
          link: 'https://test.com/xxx',
          browserIcon:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/10286961/272760470-19d97962-40f5-4efc-bbc4-dce2b20feacc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231005%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231005T023430Z&X-Amz-Expires=300&X-Amz-Signature=add26d7019cbb4893503f5b115bd4e16f5bd1a6e0651cb52b4819ec5b09af36c&X-Amz-SignedHeaders=host&actor_id=10286961&key_id=0&repo_id=680030799',
          browserName: 'Chrome',
          description: 'Access your wallet right from your favorite web browser.',
        },
        {
          link: 'https://test.com/xxx',
          browserIcon:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/10286961/272761034-dd093b0e-ae57-4c29-b8a0-2ee27daf0cc4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231005%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231005T023516Z&X-Amz-Expires=300&X-Amz-Signature=f804b3395e376ebd8738770345a09910e2102c5f63696f541dbae8b284257afe&X-Amz-SignedHeaders=host&actor_id=10286961&key_id=0&repo_id=680030799',
          browserName: 'Firefox',
          description: 'Access your wallet right from your favorite web browser.',
        },
      ],
      group: 'Popular',
    },
    {
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
      name: '测试钱包2',
      remark: '备注2',
      app: {
        link: 'https://test.com/xxx',
      },
      extensions: [
        {
          link: 'https://test.com/xxx',
          browserIcon:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/10286961/272761034-dd093b0e-ae57-4c29-b8a0-2ee27daf0cc4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231005%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231005T023516Z&X-Amz-Expires=300&X-Amz-Signature=f804b3395e376ebd8738770345a09910e2102c5f63696f541dbae8b284257afe&X-Amz-SignedHeaders=host&actor_id=10286961&key_id=0&repo_id=680030799',
          browserName: 'Firefox',
          description: 'Access your wallet right from your favorite web browser.',
        },
      ],
    },
    {
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
      name: '测试钱包3',
      remark: '备注3',
      group: 'Popular',
      app: {
        link: 'https://test.com/xxx',
      },
    },
    {
      name: '测试钱包4',
      remark: '备注4',
      extensions: [
        {
          link: 'https://test.com/xxx',
          browserIcon:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/10286961/272760470-19d97962-40f5-4efc-bbc4-dce2b20feacc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231005%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231005T023605Z&X-Amz-Expires=300&X-Amz-Signature=dcf36d0a3b41906dea4d956a1c11fd30082874c6c48cfe9f726b9813bd1d3a0d&X-Amz-SignedHeaders=host&actor_id=10286961&key_id=0&repo_id=680030799',
          browserName: 'Safari',
          description: 'Access your wallet right from your favorite web browser.',
        },
      ],
    },
    {
      name: '测试钱包5',
      remark: '备注5',
      app: {
        link: 'https://test.com/xxx',
      },
    },
    {
      name: '测试钱包6',
      remark: '备注6',
      key: 6,
      app: {
        link: 'https://test.com/xxx',
      },
      extensions: [
        {
          link: 'https://test.com/xxx',
          browserIcon:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/10286961/272760470-19d97962-40f5-4efc-bbc4-dce2b20feacc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231005%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231005T023430Z&X-Amz-Expires=300&X-Amz-Signature=add26d7019cbb4893503f5b115bd4e16f5bd1a6e0651cb52b4819ec5b09af36c&X-Amz-SignedHeaders=host&actor_id=10286961&key_id=0&repo_id=680030799',
          browserName: 'Chrome',
          description: 'Access your wallet right from your favorite web browser.',
        },
      ],
    },
    {
      name: '测试钱包6',
      remark: '备注6',
      key: 7,
      app: {
        link: 'https://test.com/xxx',
      },
      extensions: [
        {
          link: 'https://test.com/xxx',
          browserIcon:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/10286961/272760470-19d97962-40f5-4efc-bbc4-dce2b20feacc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231005%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231005T023430Z&X-Amz-Expires=300&X-Amz-Signature=add26d7019cbb4893503f5b115bd4e16f5bd1a6e0651cb52b4819ec5b09af36c&X-Amz-SignedHeaders=host&actor_id=10286961&key_id=0&repo_id=680030799',
          browserName: 'Chrome',
          description: 'Access your wallet right from your favorite web browser.',
        },
      ],
    },
  ];
  const groupOrder = (a: string, b: string) => {
    if (a === 'Popular') return -1;
    if (b === 'Popular') return 1;
    return a.localeCompare(b);
  };
  const guide: DefaultGuide = {
    title: 'What is a Wallet?',
    infos: [
      {
        title: 'A Home for your Digital Assets',
        description:
          'Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.',
        icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
      },
      {
        title: 'A New Way to Log In',
        description:
          'Instead of creating new accounts and passwords on every website, just connect your wallet.',
        icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
      },
      {
        title: 'A New Way to Log In2',
        description:
          'Instead of creating new accounts and passwords on every website, just connect your wallet.',
        icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
      },
      {
        title: 'A New Way to Log In3',
        description:
          'Instead of creating new accounts and passwords on every website, just connect your wallet.',
        icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
      },
    ],
    moreLink: 'https://test.com/xxx',
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开
      </Button>
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
  );
};
