import React from 'react';
import { useOutlet, usePrefersColor } from 'dumi';

import SiteThemeProvider from '../SiteThemeProvider';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const [color] = usePrefersColor();

  return <SiteThemeProvider themeMode={color || 'auto'}>{outlet}</SiteThemeProvider>;
};

export default GlobalLayout;
