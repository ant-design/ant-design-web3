import React from 'react';
import { useOutlet, usePrefersColor, useRouteData } from 'dumi';

import SiteThemeProvider from '../SiteThemeProvider';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { route } = useRouteData();
  const [color] = usePrefersColor();

  return (
    <SiteThemeProvider themeMode={color || 'auto'}>
      <div className={route.path === '/' ? 'home' : ''}>{outlet}</div>
    </SiteThemeProvider>
  );
};

export default GlobalLayout;
