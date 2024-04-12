import React from 'react';
import { en_US, Web3ConfigProvider, zh_CN } from '@ant-design/web3-common';
import { GlobalLayout as ThemeGlobalLayout } from 'dumi-theme-antd-web3';
import { useIntl, useLocation, useOutlet, usePrefersColor, useRouteMeta } from 'dumi';
import ReactDOM from 'react-dom/client';

import SiteThemeProvider from '../SiteThemeProvider';

const Contributors = React.lazy(() => import('../slots/Content/Contributors'));

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const meta = useRouteMeta();
  const { pathname } = useLocation();
  const [color] = usePrefersColor();
  const { locale } = useIntl();

  React.useEffect(() => {
    const articleElement = document.querySelector('article');
    const newContainer = document.createElement('div');

    if (articleElement) {
      // 在 article 元素后面创建一个新的容器
      articleElement.parentNode?.insertBefore(newContainer, articleElement.nextSibling);

      // 在新容器中渲染 Contributors 组件
      const root = ReactDOM.createRoot(newContainer);
      root.render(<Contributors filename={meta.frontmatter.filename} />);
    }
    return () => {
      if (newContainer && articleElement) {
        newContainer.remove();
      }
    };
  }, [meta.frontmatter.filename]);

  return (
    <ThemeGlobalLayout>
      <Web3ConfigProvider locale={locale === 'zh-CN' ? zh_CN : en_US}>
        <SiteThemeProvider themeMode={color || 'auto'}>
          <div className={pathname === '/' || pathname === '/index-cn' ? 'home' : ''}>{outlet}</div>
        </SiteThemeProvider>
      </Web3ConfigProvider>
    </ThemeGlobalLayout>
  );
};

export default GlobalLayout;
