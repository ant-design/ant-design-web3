import React from 'react';
import { useOutlet, usePrefersColor, useLocation } from 'dumi';

import SiteThemeProvider from '../SiteThemeProvider';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const [color] = usePrefersColor();

  return (
    <SiteThemeProvider themeMode={color || 'auto'}>
      <div className={pathname === '/' || pathname === '/zh-CN' ? 'home' : ''}>{outlet}</div>
    </SiteThemeProvider>
  );
};

export default GlobalLayout;
