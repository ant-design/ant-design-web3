import React from 'react';
import type { TabsProps } from 'antd';
import { ConfigProvider, Tabs } from 'antd';
import { createStyles, css } from 'antd-style';
import SourceCode from 'dumi/theme-default/builtins/SourceCode';

import BunLogo from './bun';
import NpmLogo from './npm';
import PnpmLogo from './pnpm';
import YarnLogo from './yarn';

interface InstallProps {
  npm?: string;
  yarn?: string;
  pnpm?: string;
  bun?: string;
}

const useStyle = createStyles(() => ({
  packageManager: css`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-inline-end: 8px;
    }
  `,
}));

const InstallDependencies: React.FC<InstallProps> = (props) => {
  const { npm, yarn, pnpm, bun } = props;
  const { styles } = useStyle();

  const items = React.useMemo<TabsProps['items']>(
    () =>
      [
        {
          key: 'npm',
          children: npm ? <SourceCode lang="bash">{npm}</SourceCode> : null,
          label: (
            <div className={styles.packageManager}>
              <NpmLogo />
              <span>npm</span>
            </div>
          ),
        },
        {
          key: 'yarn',
          children: yarn ? <SourceCode lang="bash">{yarn}</SourceCode> : null,
          label: (
            <div className={styles.packageManager}>
              <YarnLogo />
              <span>yarn</span>
            </div>
          ),
        },
        {
          key: 'pnpm',
          children: pnpm ? <SourceCode lang="bash">{pnpm}</SourceCode> : null,
          label: (
            <div className={styles.packageManager}>
              <PnpmLogo />
              <span>pnpm</span>
            </div>
          ),
        },
        {
          key: 'bun',
          children: bun ? <SourceCode lang="bash">{bun}</SourceCode> : null,
          label: (
            <div className={styles.packageManager}>
              <BunLogo />
              <span>bun</span>
            </div>
          ),
        },
      ].filter((item) => item.children),
    [npm, yarn, pnpm, bun],
  );

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            horizontalMargin: '0',
          },
        },
      }}
    >
      <Tabs className="markdown" size="small" defaultActiveKey="npm" items={items} />
    </ConfigProvider>
  );
};

export default InstallDependencies;
