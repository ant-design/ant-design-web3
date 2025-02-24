import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { en_US, Web3ConfigProvider, zh_CN } from '@ant-design/web3-common';
import { useIntl, useLocation, useOutlet, usePrefersColor, useServerInsertedHTML } from 'dumi';
import { GlobalLayout as ThemeGlobalLayout } from 'dumi-theme-antd-web3';

import SiteThemeProvider from '../SiteThemeProvider';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const [color] = usePrefersColor();
  const { locale } = useIntl();

  // 参考 antd 服务端渲染文档 https://ant-design.antgroup.com/docs/react/server-side-rendering-cn#%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F
  // https://github.com/ant-design/ant-design/blob/a4c884cb3d0ddc3560801e851d3cbf363de686dd/.dumi/theme/layouts/GlobalLayout.tsx#L217
  const [cssCache] = React.useState(() => createCache());

  useServerInsertedHTML(() => {
    const styleText = extractStyle(cssCache, { plain: true });
    // biome-ignore lint/security/noDangerouslySetInnerHtml: by design
    return <style id="antd-cssinjs" dangerouslySetInnerHTML={{ __html: styleText }} />;
  });

  return (
    <StyleProvider cache={cssCache}>
      {/*@ts-ignore */}
      <ThemeGlobalLayout>
        <Web3ConfigProvider locale={locale === 'zh-CN' ? zh_CN : en_US}>
          <SiteThemeProvider themeMode={color || 'auto'}>
            <div className={pathname === '/' || pathname === '/index-cn' ? 'home' : ''}>
              {outlet}
            </div>
          </SiteThemeProvider>
        </Web3ConfigProvider>
      </ThemeGlobalLayout>
    </StyleProvider>
  );
};

export default GlobalLayout;
