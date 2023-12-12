import React from 'react';
import { useOutlet, usePrefersColor } from 'dumi';
import SiteThemeProvider from '../SiteThemeProvider';
import Header from '../components/header';
import Banner from '../components/banner';
import Features from '../components/features';
import CustomTheme from '../components/custom-theme';
import ComponentsShow from '../components/components-show';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const [color] = usePrefersColor();
  return (
    <SiteThemeProvider themeMode={color || 'auto'}>
      <Header />
      <Banner />
      <Features />
      <CustomTheme />
      <ComponentsShow />
      {/* {outlet} */}
    </SiteThemeProvider>
  );
};

export default GlobalLayout;
