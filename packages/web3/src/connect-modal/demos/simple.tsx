import { ConnectModal } from '@ant-design/web3';
import { Button } from 'antd';
import React from 'react';
import type { WalletMetadata } from '../interface';

const walletList: WalletMetadata[] = [
  {
    icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
    name: '测试钱包',
    remark: '备注',
    app: {
      link: 'https://test.com/xxx',
    },
    extensions: [
      {
        key: 'Chrome',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
        browserName: 'Chrome',
        description: 'Access your wallet right from your favorite web browser.',
      },
      {
        key: 'Firefox',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/a6559d9b-d20a-4ac7-a263-53c04b9038a4',
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
        key: 'Firefox',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/a6559d9b-d20a-4ac7-a263-53c04b9038a4',
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
        key: 'Safari',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/9d56eba7-84d7-4360-b013-bf57d419b058',
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
        key: 'Chrome',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
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
        key: 'Chrome',
        link: 'https://test.com/xxx',
        browserIcon:
          'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
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

export default () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with simple
      </Button>
      <ConnectModal
        open={open}
        title="ConnectModal"
        footer="蚂蚁链提供技术支持"
        groupOrder={groupOrder}
        walletList={walletList}
        onOpenChange={setOpen}
      />
    </>
  );
};
