import React from 'react';
import { en_US, Web3ConfigProvider, zh_CN } from '@ant-design/web3-common';
import { ConfigProvider } from 'antd';
import { useIntl, useLocation, useOutlet, usePrefersColor } from 'dumi';
import { GlobalLayout as ThemeGlobalLayout } from 'dumi-theme-antd-web3';

import SiteThemeProvider from '../SiteThemeProvider';

// 这里是为了处理一个 dumi 的 bug
const getPopupContainer = () => document.body;

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const [color] = usePrefersColor();
  const { locale } = useIntl();

  return (
    <ConfigProvider getPopupContainer={getPopupContainer}>
      {/* @ts-ignore ts props error in dumi theme */}
      <ThemeGlobalLayout>
        <Web3ConfigProvider locale={locale === 'zh-CN' ? zh_CN : en_US}>
          <SiteThemeProvider themeMode={color || 'auto'}>
            <div className={pathname === '/' || pathname === '/index-cn' ? 'home' : ''}>
              {outlet}
            </div>
          </SiteThemeProvider>
        </Web3ConfigProvider>
      </ThemeGlobalLayout>
    </ConfigProvider>
  );
};

export default GlobalLayout;
