import React, { useEffect } from 'react';
import { theme as antdTheme, ConfigProvider, type ThemeConfig } from 'antd';
import { ThemeProvider, useTheme, type ThemeProviderProps } from 'antd-style';

interface NewToken {
  bannerHeight: number;
  headerHeight: number;
  anchorTop: number;
}

// 通过给 antd-style 扩展 CustomToken 对象类型定义，可以为 useTheme 中增加相应的 token 对象
declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends NewToken {}
}

const headerHeight = 64;
const bannerHeight = 38;

const SiteThemeProvider: React.FC<ThemeProviderProps<any>> = ({ children, theme, ...rest }) => {
  const { token } = antdTheme.useToken();

  useEffect(() => {
    ConfigProvider.config({ theme: theme as ThemeConfig });
  }, [theme]);

  return (
    <ThemeProvider<NewToken>
      {...rest}
      theme={theme}
      customToken={{
        bannerHeight,
        headerHeight,
        anchorTop: headerHeight + token.margin,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default SiteThemeProvider;
