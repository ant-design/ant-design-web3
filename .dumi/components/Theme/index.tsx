import React, { useContext, useEffect } from 'react';
import { ConnectModal, Web3ConfigProvider, type Wallet } from '@ant-design/web3';
import {
  metadata_CoinbaseWallet,
  metadata_MetaMask,
  metadata_OkxWallet,
  metadata_TokenPocket,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { Card, theme } from 'antd';
import { useTheme } from 'antd-style';
import { useIntl, usePrefersColor } from 'dumi';

import { ThemeContext } from '../ThemeContext';
import { Thumbnail } from './components/Thumbnail';
import styles from './index.module.less';

const defaultColor = 'auto';

const colors = [defaultColor, '#1677FF', '#9E339F', '#F2BD27', '#00B96B'];

export const Theme: React.FC = () => {
  const intl = useIntl();
  const [isDark, setIsDark] = React.useState(false);
  const [color] = usePrefersColor();
  const { curTheme, updateTheme } = useContext(ThemeContext);

  useEffect(() => {
    setIsDark(color === 'dark');
  }, [color]);

  const walletList: Wallet[] = [
    {
      ...metadata_MetaMask,
      hasWalletReady: async () => {
        return true;
      },
      hasExtensionInstalled: async () => {
        return true;
      },
      getQrCode: async () => {
        return {
          uri: 'https://web3.ant.design',
        };
      },
    },
    {
      ...metadata_WalletConnect,
      getQrCode: async () => {
        return {
          uri: 'https://web3.ant.design',
        };
      },
    },
    {
      ...metadata_TokenPocket,
      hasWalletReady: async () => {
        return true;
      },
      hasExtensionInstalled: async () => {
        return true;
      },
      getQrCode: async () => {
        return {
          uri: 'https://web3.ant.design',
        };
      },
    },
    {
      ...metadata_OkxWallet,
      hasWalletReady: async () => {
        return true;
      },
      hasExtensionInstalled: async () => {
        return false;
      },
      getQrCode: async () => {
        return {
          uri: 'https://web3.ant.design',
        };
      },
    },
    metadata_CoinbaseWallet,
  ];
  const token = useTheme();
  const themeStyle: React.CSSProperties = {
    backgroundImage: `url(${curTheme.themeBg})`,
    '--theme-text-color': curTheme.name === 'Dark' ? token.colorWhite : token.colorTextBase,
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={themeStyle}>
      <h2 className={styles.title}>{intl.formatMessage({ id: 'app.docs.site.theme.title' })}</h2>
      <div className={styles.desc}>
        {intl.formatMessage({ id: 'app.docs.site.theme.description' })}
      </div>
      <Web3ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : undefined,
          token:
            curTheme.name === 'Default'
              ? undefined
              : {
                  colorPrimary: curTheme.color,
                },
        }}
      >
        <Card
          className={styles.card}
          style={curTheme.style}
          styles={{
            body: {
              padding: 0,
            },
          }}
        >
          <ConnectModal.ModalPanel walletList={walletList} />
        </Card>
      </Web3ConfigProvider>
      <div className={styles.thumbnailBox}>
        <Thumbnail selectedTheme={curTheme} onSelect={(theme) => updateTheme(theme)} />
      </div>
    </div>
  );
};

export default Theme;
