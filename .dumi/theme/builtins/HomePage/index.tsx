import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { usePrefersColor } from 'dumi';
import SiteContext from 'dumi-theme-antd-web3/dist/slots/SiteContext';

import { Banner } from './components/Banner';
import { Features } from './components/Features';
import { ShowCase } from './components/ShowCase';
import { Theme } from './components/Theme';
import { ThemeItem, themes } from './components/Theme/components/Thumbnail';
import { ThemeContext } from './components/ThemeContext';
import styles from './index.module.less';

export const HomePage: React.FC = () => {
  const [color, prefersColor] = usePrefersColor();
  const [curTheme, setCurTheme] = React.useState<ThemeItem>(themes.default);
  const displayTheme = color === 'dark' ? themes.black : curTheme;
  const { updateSiteConfig } = useContext(SiteContext);

  const updateTheme = (theme: ThemeItem) => {
    console.log('updateTheme', theme);
    updateSiteConfig({
      theme: [theme.name === 'Black' ? 'dark' : 'light'],
    });
    setCurTheme(theme);
  };

  const themeStyle: React.CSSProperties = {
    '--theme-main-bg': displayTheme.mainBg,
  } as React.CSSProperties;

  useEffect(() => {
    // zh-CN: 临时修复主题跟随系统时先切换到亮色主题的问题，后续在 dumi 中修复后再删掉
    // en-US: Temporarily fix the problem that the theme follows the system and switch to the light theme first,
    // and then delete it after fixing it in dumi
    if (prefersColor === 'auto') {
      document.documentElement.setAttribute(
        'data-prefers-color',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      );
    }
  }, [prefersColor]);

  return (
    <ThemeContext.Provider
      value={{
        curTheme: displayTheme,
        updateTheme,
      }}
    >
      <div className={classNames(styles.container)} style={themeStyle}>
        <Banner />
        <Features />
        <Theme />
        <ShowCase />
      </div>
    </ThemeContext.Provider>
  );
};

export default HomePage;
