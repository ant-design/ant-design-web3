import React from 'react';
import SiteThemeProvider from '../SiteThemeProvider';
import { useOutlet } from 'dumi';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  return <SiteThemeProvider>{outlet}</SiteThemeProvider>;
};

export default GlobalLayout;
