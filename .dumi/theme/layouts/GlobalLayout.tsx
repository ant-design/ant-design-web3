import React from 'react';
import { en_US, Web3ConfigProvider, zh_CN } from '@ant-design/web3-common';
import { useIntl, useLocation, useOutlet, usePrefersColor } from 'dumi';

import SiteThemeProvider from '../SiteThemeProvider';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const [color] = usePrefersColor();
  const { locale } = useIntl();

  return (
    <Web3ConfigProvider locale={locale === 'zh-CN' ? zh_CN : en_US}>
      <SiteThemeProvider themeMode={color || 'auto'}>
        <div className={pathname === '/' || pathname === '/zh-CN' ? 'home' : ''}>{outlet}</div>
      </SiteThemeProvider>
    </Web3ConfigProvider>
  );
};

export default GlobalLayout;
