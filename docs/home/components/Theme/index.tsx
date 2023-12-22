import React, { useEffect } from 'react';
import styles from './index.module.less';
import { ConnectModal, type Wallet } from '@ant-design/web3';
import {
  metadata_MetaMask,
  metadata_WalletConnect,
  metadata_CoinbaseWallet,
} from '@ant-design/web3-assets';
import { Space, Tooltip, ConfigProvider, theme, Card } from 'antd';
import { useIntl, usePrefersColor } from 'dumi';

const defaultColor = '#1677FF';

const colors = [defaultColor, '#9E339F', '#F2BD27', '#00B96B'];

const App: React.FC = () => {
  const intl = useIntl();
  const [isDark, setIsDark] = React.useState(false);
  const [color] = usePrefersColor();
  const [themeColor, setThemeColor] = React.useState(defaultColor);

  useEffect(() => {
    setIsDark(color === 'dark');
  }, [color]);

  const walletList: Wallet[] = [
    {
      ...metadata_MetaMask,
    },
    {
      ...metadata_WalletConnect,
      getQrCode: () => {
        return new Promise<{
          uri: string;
        }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                uri: `https://web3.ant.design/?timestamp=${Date.now()}&random=${Math.random()}`,
              }),
            2000,
          ),
        );
      },
    },
    metadata_CoinbaseWallet,
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{intl.formatMessage({ id: 'app.docs.site.theme.title' })}</h3>
      <div className={styles.desc}>
        {intl.formatMessage({ id: 'app.docs.site.theme.description' })}
      </div>
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : undefined,
          token: {
            colorPrimary: themeColor,
          },
        }}
      >
        <Card
          className={styles.card}
          bodyStyle={{
            padding: 0,
          }}
        >
          <ConnectModal.ModalPanel walletList={walletList} />
        </Card>
      </ConfigProvider>
      <div className={styles.controls}>
        <div className={`${styles.themeBtns}${color === 'dark' ? ` ${styles.dark}` : ''}`}>
          <Space>
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
        <div className={styles.colorSelector}>
          {colors.map((c) => (
            <div
              className={styles.colorItem}
              key={c}
              style={{
                backgroundColor: c,
                outline: !isDark && c === themeColor ? `2px solid ${c}` : undefined,
                outlineOffset: 1,
                cursor: isDark ? 'not-allowed' : 'pointer',
              }}
              onClick={() => setThemeColor(c)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
