import React from 'react';
import { useOutlet, usePrefersColor, useLocation, useIntl } from 'dumi';
import { Web3ConfigProvider, en_US, zh_CN } from '@ant-design/web3-common';

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
