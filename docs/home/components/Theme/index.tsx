import React, { useEffect } from 'react';
import styles from './index.module.less';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Space, Tooltip, ConfigProvider, theme, Card } from 'antd';
import { usePrefersColor } from 'dumi';

const walletList: Wallet[] = [
  metadata_MetaMask,
  {
    ...metadata_WalletConnect,
    getQrCode: () => {
      return new Promise<{
        uri: string;
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
            }),
          2000,
        ),
      );
    },
  },
  {
    icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
    name: 'Test Wallet3',
    remark: '备注3',
    app: {
      link: 'https://test.com/xxx',
    },
    getQrCode: () => {
      return new Promise<{
        uri: string;
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
            }),
          2000,
        ),
      );
    },
  },
];

const App: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);
  const [color, prefersColor] = usePrefersColor();

  useEffect(() => {
    setIsDark(color === 'dark');
  }, [color]);

  useEffect(() => {
    // zh-CN: 临时修复主题跟随系统时先切换到亮色主题的问题，后续在 dumi 中修复后再删掉
    // en-US: Temporarily fix the problem that the theme follows the system and switch to the light theme first,
    // and then delete it after fixing it in dumi
    if (prefersColor === 'auto') {
      // @ts-ignore
      document.documentElement.setAttribute(
        'data-prefers-color',
        window.matchMedia(`(prefers-color-scheme: dark)`).matches ? 'dark' : 'light',
      );
    }
  }, [prefersColor]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Customize the theme as you like</h3>
      <div className={styles.desc}>
        Open more style algorithms to make it easier to customize your theme
      </div>
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : undefined,
        }}
      >
        <Card
          className={styles.card}
          bodyStyle={{
            padding: 0,
          }}
        >
          <ConnectModal.ModalPanel
            title="Connect Wallet"
            footer="Powered by AntChain"
            walletList={walletList}
            guide
          />
        </Card>
      </ConfigProvider>
      <div className={`${styles.themeBtns}${color === 'dark' ? ` ${styles.dark}` : ''}`}>
        <Space size="large">
          <Tooltip title="Light Mode">
            <span onClick={() => setIsDark(false)}>
              <svg
                viewBox="0 0 16 16"
                className={`${styles.lightIcon}${!isDark ? ` ${styles.selected}` : ''}`}
              >
                <path
                  fill="currentColor"
                  d="M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                />
              </svg>
            </span>
          </Tooltip>
          <Tooltip title="Dark Mode">
            <span onClick={() => setIsDark(true)}>
              <svg
                viewBox="0 0 16 16"
                className={`${styles.darkIcon}${isDark ? ` ${styles.selected}` : ''}`}
              >
                <path
                  fill="currentColor"
                  d="M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z"
                />
              </svg>
            </span>
          </Tooltip>
        </Space>
      </div>
    </div>
  );
};

export default App;
